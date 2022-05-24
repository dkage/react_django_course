from django.contrib import admin
from .models import *


@admin.register(Movie)
class Movie(admin.ModelAdmin):
    list_display = ['title', 'synopsis']
    readonly_fields = ('id',)


@admin.register(Rating)
class Rating(admin.ModelAdmin):
    list_display = ['id', 'user', 'movie', 'stars']


# Custom User class to enable ID to be shown, or any other modifications done to the User class
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'password', 'first_name', 'last_name')
    readonly_fields = ('id',)


# The old User class needs to be "removed" from admin page
admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)


