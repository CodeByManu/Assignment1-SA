from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Sum
from django.core.cache import cache
from .models import YearlySales, Book, Review, Author
from .services import search_service

def _recalc_total_sales(book_id: int):
    total = YearlySales.objects.filter(book_id=book_id).aggregate(s=Sum("units"))["s"] or 0
    Book.objects.filter(id=book_id).update(total_sales=total)

@receiver(post_save, sender=YearlySales)
def on_sales_save(sender, instance, **kwargs):
    _recalc_total_sales(instance.book_id)

@receiver(post_delete, sender=YearlySales)
def on_sales_delete(sender, instance, **kwargs):
    _recalc_total_sales(instance.book_id)

@receiver(post_save, sender=Book)
def _book_index_after_save(sender, instance, **kwargs):
    if search_service.is_enabled():
        try:
            search_service.ensure_indices()
            search_service.index_book(instance)
        except Exception:
            pass

@receiver(post_delete, sender=Book)
def _book_index_after_delete(sender, instance, **kwargs):
    if search_service.is_enabled():
        try:
            search_service.delete_book(instance.id)
        except Exception:
            pass

@receiver(post_save, sender=Review)
def _review_index_after_save(sender, instance, **kwargs):
    if search_service.is_enabled():
        try:
            search_service.ensure_indices()
            search_service.index_review(instance)
        except Exception:
            pass

@receiver(post_delete, sender=Review)
def _review_index_after_delete(sender, instance, **kwargs):
    if search_service.is_enabled():
        try:
            search_service.delete_review(instance.id)
        except Exception:
            pass

@receiver(post_save, sender=Author)
@receiver(post_delete, sender=Author)
@receiver(post_save, sender=Book)
@receiver(post_delete, sender=Book)
@receiver(post_save, sender=Review)
@receiver(post_delete, sender=Review)
@receiver(post_save, sender=YearlySales)
@receiver(post_delete, sender=YearlySales)
def _clear_cache_on_change(sender, **kwargs):
    cache.clear()