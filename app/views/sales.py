from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator
from ..models import YearlySales
from ..forms import YearlySalesForm

def sales_list(request):
    sales = YearlySales.objects.select_related("book").order_by("-year")
    page_obj = Paginator(sales, 50).get_page(request.GET.get("page"))
    return render(request, "app/sales/list.html", {"page_obj": page_obj})

def sales_create(request):
    if request.method == "POST":
        form = YearlySalesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("sales_list")
    else:
        form = YearlySalesForm()
    return render(request, "app/sales/form.html", {"form": form, "title": "New Yearly Sales"})

def sales_update(request, pk):
    s = get_object_or_404(YearlySales, pk=pk)
    if request.method == "POST":
        form = YearlySalesForm(request.POST, instance=s)
        if form.is_valid():
            form.save()
            return redirect("sales_list")
    else:
        form = YearlySalesForm(instance=s)
    return render(request, "app/sales/form.html", {"form": form, "title": "Edit Yearly Sales"})

def sales_delete(request, pk):
    s = get_object_or_404(YearlySales, pk=pk)
    if request.method == "POST":
        s.delete()
        return redirect("sales_list")
    return render(request, "app/sales/confirm_delete.html", {"object": s, "title": "Delete Yearly Sales"})
