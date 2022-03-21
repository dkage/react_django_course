from django.shortcuts import render
from django.http import HttpResponse
from django.views import View


def first_function(request):
    return HttpResponse('View test.')


class SecondView(View):
    @staticmethod
    def get(self, request):
        return HttpResponse('Another view test.')