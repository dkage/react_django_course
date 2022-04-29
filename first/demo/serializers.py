from rest_framework import serializers
from .models import Book, BookNumber


class BookNumberSerializar(serializers.ModelSerializer):
    class Meta:
        model = BookNumber
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):
    number = BookNumberSerializar(many=False)

    class Meta:
        model = Book
        fields = '__all__'