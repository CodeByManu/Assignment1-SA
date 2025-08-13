from django.core.management.base import BaseCommand
from django.utils import timezone
from app.models import Author, Book, Review, YearlySales
from faker import Faker
import random
from datetime import date

fake = Faker(["es_ES", "en_US", "es_CL"])

class Command(BaseCommand):
    help = (
        "Seed database using Faker: 50 authors, 300 books, 1-10 reviews per book, "
        "and 5 years of sales per book. Use --force to reset; counts are overridable."
    )

    def add_arguments(self, parser):
        parser.add_argument(
            "--force",
            action="store_true",
            help="Delete existing data and re-seed from scratch.",
        )
        parser.add_argument("--authors", type=int, default=50, help="Authors to create (default: 50)")
        parser.add_argument("--books", type=int, default=300, help="Books to create (default: 300)")
        parser.add_argument(
            "--min-reviews",
            type=int,
            default=1,
            help="Minimum reviews per book (default: 1)",
        )
        parser.add_argument(
            "--max-reviews",
            type=int,
            default=10,
            help="Maximum reviews per book (default: 10)",
        )
        parser.add_argument(
            "--sales-years",
            type=int,
            default=5,
            help="Number of recent years of sales per book (default: 5)",
        )

    def handle(self, *args, **options):
        force: bool = options.get("force", False)
        n_authors: int = options.get("authors", 50)
        n_books: int = options.get("books", 300)
        min_reviews: int = options.get("min_reviews", 1)
        max_reviews: int = options.get("max_reviews", 10)
        sales_years: int = options.get("sales_years", 5)

        if Author.objects.exists() and not force:
            self.stdout.write(self.style.WARNING("Data already exists. Use --force to reset."))
            return

        if force:
            self.stdout.write("Resetting existing data…")
            Review.objects.all().delete()
            YearlySales.objects.all().delete()
            Book.objects.all().delete()
            Author.objects.all().delete()

        max_reviews = max(min_reviews, max_reviews)

        authors = []
        for _ in range(n_authors):
            birthdate = fake.date_between(start_date="-90y", end_date="-20y")
            author = Author.objects.create(
                name=fake.name(),
                birthdate=birthdate,
                country=fake.country(),
                description=fake.paragraph(nb_sentences=3),
            )
            authors.append(author)

        books = []
        for _ in range(n_books):
            author = random.choice(authors)
            pub_date = fake.date_between(start_date=date(1950, 1, 1), end_date=date.today())
            book = Book.objects.create(
                name=fake.sentence(nb_words=5).rstrip("."),
                summary=fake.paragraph(nb_sentences=5),
                publication_date=pub_date,
                author=author,
            )
            books.append(book)

        current_year = timezone.now().year
        years = list(range(current_year - sales_years + 1, current_year + 1))
        for book in books:
            base = random.randint(5_000, 200_000)
            for y in years:
                units = max(0, int(random.gauss(mu=base, sigma=base * 0.35)))
                YearlySales.objects.create(book=book, year=y, units=units)

        for book in books:
            k = random.randint(min_reviews, max_reviews)
            for _ in range(k):
                Review.objects.create(
                    book=book,
                    review=fake.paragraph(nb_sentences=random.randint(2, 6)),
                    score=random.randint(1, 5),
                    upvotes=random.randint(0, 5000),
                )

        total_authors = Author.objects.count()
        total_books = Book.objects.count()
        total_reviews = Review.objects.count()
        total_sales_rows = YearlySales.objects.count()

        self.stdout.write(
            self.style.SUCCESS(
                f"Seed complete: {total_authors} authors, {total_books} books, "
                f"{total_reviews} reviews, {total_sales_rows} yearly sales rows."
            )
        )
