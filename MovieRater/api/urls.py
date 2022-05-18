from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.response import Response
from rest_framework import routers
from django.http import HttpResponse

router = routers.DefaultRouter()

urlpatterns = [
    path('new', lambda request: HttpResponse('test api include route')),
    path('', include(router.urls))
]
