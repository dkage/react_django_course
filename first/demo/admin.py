from django.contrib import admin
from .models import *

# # Register your models here.
# admin.site.register(Book)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'description']
    search_fields = ['title']


@admin.register(BookNumber)
class BookNumber(admin.ModelAdmin):
    list_display = ['id', 'isbn_10', 'isbn_13']


@admin.register(Character)
class Character(admin.ModelAdmin):
    list_display = ['id', 'name', 'book']


@admin.register(Author)
class Character(admin.ModelAdmin):
    list_display = ['id', 'name', 'surname']
