from django.shortcuts import render
from django.http import HttpResponse
from django.views import View


class AnotherView(View):

    def get(self, request):
        return HttpResponse('View inside class')

    def test(self, request):
        return HttpResponse('Test inside class')


def first_function(request):
    print(request)
    return HttpResponse('View test.')



