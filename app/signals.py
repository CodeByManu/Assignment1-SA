from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Sum
from .models import YearlySales, Book

def _recalc_total_sales(book_id: int):
    total = YearlySales.objects.filter(book_id=book_id).aggregate(s=Sum("units"))["s"] or 0
    Book.objects.filter(id=book_id).update(total_sales=total)

@receiver(post_save, sender=YearlySales)
def on_sales_save(sender, instance, **kwargs):
    _recalc_total_sales(instance.book_id)

@receiver(post_delete, sender=YearlySales)
def on_sales_delete(sender, instance, **kwargs):
    _recalc_total_sales(instance.book_id)
