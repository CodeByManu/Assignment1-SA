from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField()
    country = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

class Book(models.Model):
    name = models.CharField(max_length=255)
    summary = models.TextField()
    publication_date = models.DateField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')


class Review(models.Model):
    review = models.TextField()
    score = models.PositiveSmallIntegerField()
    upvotes = models.PositiveIntegerField(default=0)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')


class Sales(models.Model):
    date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='sales')