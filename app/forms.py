from django import forms
from .models import Author, Book, Review, YearlySales

class AuthorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ["name", "birthdate", "country", "description", "photo"]
        widgets = {
            "name": forms.TextInput(attrs={"class": "form-control"}),
            "birthdate": forms.DateInput(attrs={"type": "date", "class": "form-control"}),
            "country": forms.TextInput(attrs={"class": "form-control"}),
            "description": forms.Textarea(attrs={"class": "form-control", "rows": 3}),
            "photo": forms.FileInput(attrs={"class": "form-control", "accept": "image/*"}),
        }

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ["name", "summary", "publication_date", "author", "cover"]
        widgets = {
            "name": forms.TextInput(attrs={"class": "form-control"}),
            "summary": forms.Textarea(attrs={"class": "form-control", "rows": 4}),
            "publication_date": forms.DateInput(attrs={"type": "date", "class": "form-control"}),
            "author": forms.Select(attrs={"class": "form-select"}),
            "cover": forms.FileInput(attrs={"class": "form-control", "accept": "image/*"}),
        }

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ["book", "review", "score", "upvotes"]
        widgets = {
            "book": forms.Select(attrs={"class": "form-select"}),
            "review": forms.Textarea(attrs={"class": "form-control", "rows": 4}),
            "score": forms.NumberInput(attrs={"class": "form-control", "min": 1, "max": 5, "step": 1}),
            "upvotes": forms.NumberInput(attrs={"class": "form-control", "min": 0, "step": 1}),
        }

class YearlySalesForm(forms.ModelForm):
    class Meta:
        model = YearlySales
        fields = ["book", "year", "units"]
        widgets = {
            "book": forms.Select(attrs={"class": "form-select"}),
            "year": forms.NumberInput(attrs={"class": "form-control", "min": 1900, "max": 2100, "step": 1}),
            "units": forms.NumberInput(attrs={"class": "form-control", "min": 0, "step": 1}),
        }
