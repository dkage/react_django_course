from django.urls import path, include
from rest_framework import routers

from .api_views import BookViewSet
from .views import *

router = routers.DefaultRouter()
router.register('books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('another', AnotherView.as_view()),
    path('first_template', template_test),
]