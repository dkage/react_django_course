from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.response import Response
from rest_framework import routers
from django.http import HttpResponse
from .views import *

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('movies', MovieViewSet)
router.register('ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('new', lambda request: HttpResponse('test api include route')),
]
