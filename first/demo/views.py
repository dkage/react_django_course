from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book
from django.shortcuts import render


class AnotherView(View):
    # books = Book.objects.all()
    # books = Book.objects.filter(is_published=True)

    single_book = ''
    single_book = Book.objects.get(id=1)

    quantity = ''
    # quantity = f"We have {len(books)} books in the DB <br><br>"

    book_list = ""
    # for book in books:
    #     book_list += f"We have the {book.title} book stored in DB. This version was published at {book.published}. <br>"

    if single_book:
        single_book = single_book.title

    output = quantity + book_list + single_book

    def get(self, request):
        return HttpResponse(self.output)


def template_test(request):
    books = Book.objects.all()

    return render(request, 'first_template.html', {'data': 'this is a test string from urls', 'books': books})


def first_function(request):
    print(request)
    return HttpResponse('View test.')
