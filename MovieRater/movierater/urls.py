from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('', lambda request: HttpResponse('INDEX basic string return test.')),
    path('admin/', admin.site.urls),
    path('test/', lambda request: HttpResponse('test string as http response instead of view')),
    path('api/v1/', include('api.urls')),
    path('auth/', obtain_auth_token),
]
