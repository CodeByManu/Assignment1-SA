from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
import uuid
import os
from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver

def _uuid_name(original_name: str) -> str:
    ext = os.path.splitext(original_name)[1].lower()  # conserva extensión
    return f"{uuid.uuid4().hex}{ext}"

def author_image_upload_to(instance, filename):
    subdir = getattr(settings, "UPLOADS_DIR_AUTHORS", "authors/")
    # Guardamos con nombre UUID para evitar colisiones / problemas de pk
    return f"{subdir}{_uuid_name(filename)}"

def book_cover_upload_to(instance, filename):
    subdir = getattr(settings, "UPLOADS_DIR_BOOKS", "covers/")
    return f"{subdir}{_uuid_name(filename)}"

class Author(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    photo = models.ImageField(upload_to=author_image_upload_to, blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def photo_url(self):
        if self.photo:
            return self.photo.url
        # podrías poner un placeholder estático si quieres
        return f"{settings.STATIC_URL}img/author-placeholder.png"

class Book(models.Model):
    name = models.CharField(max_length=255)
    summary = models.TextField()
    publication_date = models.DateField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    total_sales = models.PositiveIntegerField(default=0)
    cover = models.ImageField(upload_to=book_cover_upload_to, blank=True, null=True)

    def __str__(self):
        return self.name

    @property
    def cover_url(self):
        if self.cover:
            return self.cover.url
        return f"{settings.STATIC_URL}img/book-placeholder.png"

class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')
    review = models.TextField()
    score = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    upvotes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.book.name} - {self.score}/5"

class YearlySales(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='yearly_sales')
    year = models.PositiveSmallIntegerField()
    units = models.PositiveIntegerField(default=0)

    class Meta:
        unique_together = ('book', 'year')

    def __str__(self):
        return f"{self.book.name} - {self.year}: {self.units}"

# --- Utilidades para limpiar archivos viejos ---

def _delete_file_field_file(fld):
    try:
        storage = fld.storage
        name = fld.name
        if name and storage.exists(name):
            storage.delete(name)
    except Exception:
        pass

@receiver(post_delete, sender=Author)
def author_delete_file(sender, instance, **kwargs):
    if instance.photo:
        _delete_file_field_file(instance.photo)

@receiver(post_delete, sender=Book)
def book_delete_file(sender, instance, **kwargs):
    if instance.cover:
        _delete_file_field_file(instance.cover)

@receiver(pre_save, sender=Author)
def author_replace_file(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old = Author.objects.get(pk=instance.pk)
    except Author.DoesNotExist:
        return
    # si subieron una nueva imagen, borra la anterior
    if old.photo and old.photo != instance.photo:
        _delete_file_field_file(old.photo)

@receiver(pre_save, sender=Book)
def book_replace_file(sender, instance, **kwargs):
    if not instance.pk:
        return
    try:
        old = Book.objects.get(pk=instance.pk)
    except Book.DoesNotExist:
        return
    if old.cover and old.cover != instance.cover:
        _delete_file_field_file(old.cover)
