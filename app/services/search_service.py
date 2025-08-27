from typing import Optional, Dict, Any
from django.conf import settings
from opensearchpy import OpenSearch, RequestsHttpConnection
from opensearchpy.exceptions import NotFoundError

_client: Optional[OpenSearch] = None

BOOKS_MAPPING = {
    "settings": {"index": {"number_of_shards": 1, "number_of_replicas": 0}},
    "mappings": {
        "properties": {
            "id": {"type": "keyword"},
            "name": {"type": "text"},
            "author_name": {"type": "text"},
            "author_id": {"type": "keyword"},
            "summary": {"type": "text"},
            "publication_date": {"type": "date", "format": "yyyy-MM-dd"},
            "total_sales": {"type": "integer"},
        }
    },
}

REVIEWS_MAPPING = {
    "settings": {"index": {"number_of_shards": 1, "number_of_replicas": 0}},
    "mappings": {
        "properties": {
            "id": {"type": "keyword"},
            "book_id": {"type": "keyword"},
            "book_name": {"type": "text"},
            "review": {"type": "text"},
            "score": {"type": "integer"},
            "upvotes": {"type": "integer"},
        }
    },
}

def is_enabled() -> bool:
    return bool(settings.SEARCH_ENABLED)

def client() -> Optional[OpenSearch]:
    if not is_enabled():
        return None
    global _client
    if _client is None:
        _client = OpenSearch(
            hosts=[{"host": settings.OPENSEARCH_HOST, "port": settings.OPENSEARCH_PORT}],
            http_auth=(settings.OPENSEARCH_USER, settings.OPENSEARCH_PASS) if settings.OPENSEARCH_USER else None,
            use_ssl=settings.OPENSEARCH_USE_TLS,
            verify_certs=settings.OPENSEARCH_VERIFY_TLS,
            connection_class=RequestsHttpConnection,
            timeout=10,
        )
    return _client

def ensure_indices() -> None:
    if not is_enabled():
        return
    c = client()
    if c is None:
        return
    if not c.indices.exists(index=settings.OS_INDEX_BOOKS):
        c.indices.create(index=settings.OS_INDEX_BOOKS, body=BOOKS_MAPPING)
    if not c.indices.exists(index=settings.OS_INDEX_REVIEWS):
        c.indices.create(index=settings.OS_INDEX_REVIEWS, body=REVIEWS_MAPPING)

def index_book(book) -> None:
    if not is_enabled():
        return
    c = client();  assert c
    body = {
        "id": str(book.id),
        "name": book.name,
        "author_name": book.author.name if book.author_id else "",
        "author_id": str(book.author_id) if book.author_id else None,
        "summary": book.summary or "",
        "publication_date": book.publication_date.isoformat() if book.publication_date else None,
        "total_sales": int(book.total_sales or 0),
    }
    c.index(index=settings.OS_INDEX_BOOKS, id=str(book.id), body=body, refresh="true")

def delete_book(book_id: int) -> None:
    if not is_enabled():
        return
    c = client();  assert c
    try:
        c.delete(index=settings.OS_INDEX_BOOKS, id=str(book_id), refresh="true")
    except NotFoundError:
        pass

def index_review(review) -> None:
    if not is_enabled():
        return
    c = client();  assert c
    body = {
        "id": str(review.id),
        "book_id": str(review.book_id),
        "book_name": review.book.name if review.book_id else "",
        "review": review.review or "",
        "score": int(review.score or 0),
        "upvotes": int(review.upvotes or 0),
    }
    c.index(index=settings.OS_INDEX_REVIEWS, id=str(review.id), body=body, refresh="true")

def delete_review(review_id: int) -> None:
    if not is_enabled():
        return
    c = client();  assert c
    try:
        c.delete(index=settings.OS_INDEX_REVIEWS, id=str(review_id), refresh="true")
    except NotFoundError:
        pass

def search_all(query: str, size: int, offset: int) -> Dict[str, Any]:
    """Devuelve hits de books y reviews con highlight (si aplica)."""
    if not is_enabled():
        return {"enabled": False, "books": [], "reviews": [], "total_books": 0, "total_reviews": 0}

    c = client();  assert c
    q_books = {
        "query": {"multi_match": {"query": query, "fields": ["name^2", "summary", "author_name"], "operator": "and"}},
        "from": offset, "size": size,
        "highlight": {"fields": {"name": {}, "summary": {}}},
    }
    q_reviews = {
        "query": {"multi_match": {"query": query, "fields": ["review^2", "book_name"], "operator": "and"}},
        "from": offset, "size": size,
        "highlight": {"fields": {"review": {}}},
    }
    br = c.search(index=settings.OS_INDEX_BOOKS, body=q_books)
    rr = c.search(index=settings.OS_INDEX_REVIEWS, body=q_reviews)
    return {
        "enabled": True,
        "books": br.get("hits", {}).get("hits", []),
        "reviews": rr.get("hits", {}).get("hits", []),
        "total_books": br.get("hits", {}).get("total", {}).get("value", 0),
        "total_reviews": rr.get("hits", {}).get("total", {}).get("value", 0),
    }
