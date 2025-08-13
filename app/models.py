from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Author(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=255)
    summary = models.TextField()
    publication_date = models.DateField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    total_sales = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name

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
