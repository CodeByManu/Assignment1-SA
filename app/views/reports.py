from django.shortcuts import render
from django.core.paginator import Paginator
from django.db.models import (
    Avg,
    Count,
    Sum,
    Subquery,
    OuterRef,
    Q,
    F,
    BooleanField,
    Case,
    When,
)
from django.db.models.functions import ExtractYear, Coalesce
from ..models import Author, Book, Review, YearlySales
from ..services import search_service
import logging
logger = logging.getLogger(__name__)

def authors_table(request):
    qs = Author.objects.all().annotate(
        book_count=Count("books", distinct=True),
        avg_score=Avg("books__reviews__score"),
        total_sales=Coalesce(Sum("books__total_sales"), 0),
    )

    name = request.GET.get("name")
    books_min = request.GET.get("books_min")
    books_max = request.GET.get("books_max")
    avg_min = request.GET.get("avg_min")
    avg_max = request.GET.get("avg_max")
    sales_min = request.GET.get("sales_min")
    sales_max = request.GET.get("sales_max")

    if name:
        qs = qs.filter(name__icontains=name)
    if books_min:
        qs = qs.filter(book_count__gte=int(books_min))
    if books_max:
        qs = qs.filter(book_count__lte=int(books_max))
    if avg_min:
        qs = qs.filter(avg_score__gte=float(avg_min))
    if avg_max:
        qs = qs.filter(avg_score__lte=float(avg_max))
    if sales_min:
        qs = qs.filter(total_sales__gte=int(sales_min))
    if sales_max:
        qs = qs.filter(total_sales__lte=int(sales_max))

    sort = request.GET.get("sort", "name")
    allowed = {
        "name",
        "-name",
        "book_count",
        "-book_count",
        "avg_score",
        "-avg_score",
        "total_sales",
        "-total_sales",
    }
    if sort not in allowed:
        sort = "name"
    qs = qs.order_by(sort)

    page_obj = Paginator(qs, 25).get_page(request.GET.get("page"))

    params = request.GET.copy()
    params.pop("page", None)
    params.pop("sort", None)
    base_qs = params.urlencode()
    return render(
        request,
        "app/reports/authors_table.html",
        {"page_obj": page_obj, "sort": sort, "querystring": base_qs},
    )


def top_rated_books(request):
    high_review_sq = (
        Review.objects.filter(book=OuterRef("pk"))
        .order_by("-score", "-upvotes", "-pk")
        .values("pk")[:1]
    )
    low_review_sq = (
        Review.objects.filter(book=OuterRef("pk"))
        .order_by("score", "-upvotes", "-pk")
        .values("pk")[:1]
    )

    books_qs = Book.objects.select_related("author").annotate(
        avg_score=Avg("reviews__score"),
        review_count=Count("reviews"),
        high_review_id=Subquery(high_review_sq),
        low_review_id=Subquery(low_review_sq),
    )

    sort = request.GET.get("sort", "-avg_score")
    mapping = {
        "name": ["name"],
        "-name": ["-name"],
        "author": ["author__name", "name"],
        "-author": ["-author__name", "name"],
        "avg_score": ["avg_score", "name"],
        "-avg_score": ["-avg_score", "-review_count", "name"],
        "review_count": ["review_count", "name"],
        "-review_count": ["-review_count", "name"],
    }
    order = mapping.get(sort, mapping["-avg_score"])
    books = books_qs.order_by(*order)[:10]

    review_ids = set()
    for b in books:
        if b.high_review_id:
            review_ids.add(b.high_review_id)
        if b.low_review_id:
            review_ids.add(b.low_review_id)
    reviews_map = {r.pk: r for r in Review.objects.filter(pk__in=review_ids)}
    for b in books:
        b.high_review = reviews_map.get(b.high_review_id)
        b.low_review = reviews_map.get(b.low_review_id)

    params = request.GET.copy()
    params.pop("page", None)
    params.pop("sort", None)
    base_qs = params.urlencode()

    return render(
        request,
        "app/reports/top_rated_books.html",
        {"books": books, "sort": sort, "querystring": base_qs},
    )


def top_selling_books(request):
    publication_year = ExtractYear("publication_date")
    pub_year_units_sq = YearlySales.objects.filter(
        book=OuterRef("pk"), year=OuterRef("publication_year")
    ).values("units")[:1]
    top5_threshold_sq = (
        YearlySales.objects.filter(year=OuterRef("publication_year"))
        .order_by("-units")
        .values("units")[4:5]
    )

    books_qs = (
        Book.objects.select_related("author")
        .annotate(
            publication_year=publication_year,
            author_total_sales=Coalesce(Sum("author__books__total_sales"), 0),
            pub_year_units=Subquery(pub_year_units_sq),
            top5_threshold=Subquery(top5_threshold_sq),
        )
        .annotate(
            on_top5_publication_year=Case(
                When(
                    Q(pub_year_units__isnull=False)
                    & Q(top5_threshold__isnull=True),
                    then=True,
                ),
                When(
                    Q(pub_year_units__gte=F("top5_threshold")),
                    then=True,
                ),
                default=False,
                output_field=BooleanField(),
            )
        )
    )

    sort = request.GET.get("sort", "-total_sales")
    mapping = {
        "name": ["name"],
        "-name": ["-name"],
        "author": ["author__name", "name"],
        "-author": ["-author__name", "name"],
        "total_sales": ["total_sales", "name"],
        "-total_sales": ["-total_sales", "name"],
        "author_total_sales": ["author_total_sales", "name"],
        "-author_total_sales": ["-author_total_sales", "name"],
        "publication_year": ["publication_year", "name"],
        "-publication_year": ["-publication_year", "name"],
        "on_top5_publication_year": ["on_top5_publication_year", "name"],
        "-on_top5_publication_year": ["-on_top5_publication_year", "name"],
    }
    order = mapping.get(sort, mapping["-total_sales"])
    books = books_qs.order_by(*order)[:50]

    params = request.GET.copy()
    params.pop("page", None)
    params.pop("sort", None)
    base_qs = params.urlencode()

    return render(
        request,
        "app/reports/top_selling_books.html",
        {"books": books, "sort": sort, "querystring": base_qs},
    )

def search(request):
    q = (request.GET.get("q") or "").strip()
    page = int(request.GET.get("page") or 1)
    page_size = 25
    offset = (page - 1) * page_size
    print(f"[SEARCH] mode={'OS' if search_service.is_enabled() else 'DB'} q='{q}'")
    logger.info("[SEARCH] mode=%s q='%s'", "OS" if search_service.is_enabled() else "DB", q)

    context = {"q": q, "os_enabled": search_service.is_enabled()}

    if not q:
        # sin consulta: no mostramos nada
        context.update({"page_obj": None, "os_books": [], "os_reviews": [], "page": page, "has_next": False, "has_prev": False})
        return render(request, "app/reports/search.html", context)

    if search_service.is_enabled():
        # --- OpenSearch ---
        search_service.ensure_indices()
        res = search_service.search_all(q, size=page_size, offset=offset)

        def _norm_book(hit):
            src = hit.get("_source", {}) or {}
            hl = hit.get("highlight", {}) or {}
            return {
                "id": src.get("id"),
                "name": src.get("name"),
                "author_name": src.get("author_name"),
                "summary": src.get("summary") or "",
                "highlight_summary": (hl.get("summary") or [None])[0],
            }

        def _norm_review(hit):
            src = hit.get("_source", {}) or {}
            hl = hit.get("highlight", {}) or {}
            return {
                "book_name": src.get("book_name"),
                "review": src.get("review") or "",
                "score": src.get("score"),
                "upvotes": src.get("upvotes"),
                "highlight_review": (hl.get("review") or [None])[0],
            }

        os_books = [_norm_book(h) for h in res.get("books", [])]
        os_reviews = [_norm_review(h) for h in res.get("reviews", [])]
        total = max(res.get("total_books", 0), res.get("total_reviews", 0))

        context.update({
            "os_books": os_books,
            "os_reviews": os_reviews,
            "page": page,
            "has_prev": page > 1,
            "has_next": (page * page_size) < total,
        })
        return render(request, "app/reports/search.html", context)

    else:
        # --- Fallback DB (tu lógica previa) ---
        words = [w for w in q.split() if w]
        books = Book.objects.none()
        if words:
            query = Q()
            for w in words:
                query |= Q(summary__icontains=w) | Q(name__icontains=w) | Q(author__name__icontains=w)
            books = Book.objects.select_related("author").filter(query).order_by("name")
        page_obj = Paginator(books, page_size).get_page(page)
        context.update({"page_obj": page_obj})
        return render(request, "app/reports/search.html", context)
