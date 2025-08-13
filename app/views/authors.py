from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from ..models import Author
from ..forms import AuthorForm

def author_list(request):
    authors = Author.objects.all().order_by("name")
    page_obj = Paginator(authors, 25).get_page(request.GET.get("page"))
    return render(request, "app/authors/list.html", {"page_obj": page_obj})

def author_create(request):
    if request.method == "POST":
        form = AuthorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("author_list")
    else:
        form = AuthorForm()
    return render(request, "app/authors/form.html", {"form": form, "title": "New Author"})

def author_update(request, pk):
    author = get_object_or_404(Author, pk=pk)
    if request.method == "POST":
        form = AuthorForm(request.POST, instance=author)
        if form.is_valid():
            form.save()
            return redirect("author_list")
    else:
        form = AuthorForm(instance=author)
    return render(request, "app/authors/form.html", {"form": form, "title": "Edit Author"})

def author_delete(request, pk):
    author = get_object_or_404(Author, pk=pk)
    if request.method == "POST":
        author.delete()
        return redirect("author_list")
    return render(request, "app/authors/confirm_delete.html", {"object": author, "title": "Delete Author"})
