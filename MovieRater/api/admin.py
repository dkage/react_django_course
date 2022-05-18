from django.contrib import admin
from .models import *


@admin.register(Movie)
class Movie(admin.ModelAdmin):
    list_display = ['id', 'title', 'synopsis']


@admin.register(Rating)
class Rating(admin.ModelAdmin):
    list_display = ['id', 'user', 'movie', 'stars']
