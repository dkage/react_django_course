from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book


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



def first_function(request):
    print(request)
    return HttpResponse('View test.')
