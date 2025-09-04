from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from django.core.cache import cache
from django.conf import settings
from ..models import Review
from ..forms import ReviewForm


def review_list(request):
    page = request.GET.get("page") or "1"
    cache_key = f"reviews_page_{page}"
    page_obj = cache.get(cache_key)
    if page_obj is None:
        reviews = Review.objects.select_related("book").order_by("-upvotes")
        page_obj = Paginator(reviews, 50).get_page(page)
        cache.set(cache_key, page_obj, settings.CACHE_TTL)
    return render(request, "app/reviews/list.html", {"page_obj": page_obj})


def review_create(request):
    if request.method == "POST":
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("review_list")
    else:
        form = ReviewForm()
    return render(
        request, "app/reviews/form.html", {"form": form, "title": "New Review"}
    )


def review_update(request, pk):
    review = get_object_or_404(Review, pk=pk)
    if request.method == "POST":
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect("review_list")
    else:
        form = ReviewForm(instance=review)
    return render(
        request, "app/reviews/form.html", {"form": form, "title": "Edit Review"}
    )


def review_delete(request, pk):
    review = get_object_or_404(Review, pk=pk)
    if request.method == "POST":
        review.delete()
        return redirect("review_list")
    return render(
        request,
        "app/reviews/confirm_delete.html",
        {"object": review, "title": "Delete Review"},
    )
