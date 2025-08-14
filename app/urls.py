from django.urls import path
from django.views.generic import TemplateView
from .views import authors as v_authors, books as v_books, reviews as v_reviews, sales as v_sales

urlpatterns = [
    path("", TemplateView.as_view(template_name="app/home.html"), name="home"),

    # Authors
    path("authors/", v_authors.author_list, name="author_list"),
    path("authors/<int:pk>/", v_authors.author_detail, name="author_detail"),
    path("authors/new/", v_authors.author_create, name="author_create"),
    path("authors/<int:pk>/edit/", v_authors.author_update, name="author_update"),
    path("authors/<int:pk>/delete/", v_authors.author_delete, name="author_delete"),

    # Books
    path("books/", v_books.book_list, name="book_list"),
    path("books/new/", v_books.book_create, name="book_create"),
    path("books/<int:pk>/", v_books.book_detail, name="book_detail"),
    path("books/<int:pk>/edit/", v_books.book_update, name="book_update"),
    path("books/<int:pk>/delete/", v_books.book_delete, name="book_delete"),

    # Reviews
    path("reviews/", v_reviews.review_list, name="review_list"),
    path("reviews/new/", v_reviews.review_create, name="review_create"),
    path("reviews/<int:pk>/edit/", v_reviews.review_update, name="review_update"),
    path("reviews/<int:pk>/delete/", v_reviews.review_delete, name="review_delete"),

    # Yearly sales
    path("sales/", v_sales.sales_list, name="sales_list"),
    path("sales/new/", v_sales.sales_create, name="sales_create"),
    path("sales/<int:pk>/edit/", v_sales.sales_update, name="sales_update"),
    path("sales/<int:pk>/delete/", v_sales.sales_delete, name="sales_delete"),
]
