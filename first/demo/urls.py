from django.urls import path
from .views import *

urlpatterns = [
    path('', first_function),
    path('another', AnotherView.as_view()),
    path('first_template', template_test)
]