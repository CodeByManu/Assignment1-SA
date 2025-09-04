from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from django.core.cache import cache
from django.conf import settings
from ..models import Book
from ..forms import BookForm

def book_list(request):
    books = Book.objects.select_related("author").order_by("name")
    page_obj = Paginator(books, 25).get_page(request.GET.get("page"))
    return render(request, "app/books/list.html", {"page_obj": page_obj})

def book_detail(request, pk):
    cache_key = f"book_detail_{pk}"
    context = cache.get(cache_key)
    if context is None:
        book = get_object_or_404(Book.objects.select_related("author"), pk=pk)
        reviews = list(book.reviews.order_by("-upvotes", "-score"))
        yearly = list(book.yearly_sales.order_by("year"))
        context = {"book": book, "reviews": reviews, "yearly": yearly}
        cache.set(cache_key, context, settings.CACHE_TTL)
    return render(request, "app/books/detail.html", context)

def book_create(request):
    if request.method == "POST":
        form = BookForm(request.POST, request.FILES) 
        if form.is_valid():
            form.save()
            return redirect("book_list")
    else:
        form = BookForm()
    return render(request, "app/books/form.html", {"form": form, "title": "New Book"})

def book_update(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == "POST":
        form = BookForm(request.POST, request.FILES, instance=book)  
        if form.is_valid():
            form.save()
            return redirect("book_list")
    else:
        form = BookForm(instance=book)
    return render(request, "app/books/form.html", {"form": form, "title": "Edit Book"})

def book_delete(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == "POST":
        book.delete()
        return redirect("book_list")
    return render(request, "app/books/confirm_delete.html", {"object": book, "title": "Delete Book"})
