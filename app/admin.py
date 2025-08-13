from django.contrib import admin
from .models import Author, Book, Review, YearlySales

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name", "country", "birthdate")
    search_fields = ("name", "country")

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("name", "author", "publication_date", "total_sales")
    list_filter = ("author", "publication_date")
    search_fields = ("name", "summary")

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("book", "score", "upvotes")
    list_filter = ("score",)
    search_fields = ("book__name", "review")

@admin.register(YearlySales)
class YearlySalesAdmin(admin.ModelAdmin):
    list_display = ("book", "year", "units")
    list_filter = ("year",)
    search_fields = ("book__name",)
