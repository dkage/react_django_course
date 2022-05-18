from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title', 'synopsis')


class RatingSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(many=False)
    user = UserSerializer(many=False)

    class Meta:
        model = Rating
        fields = ('id', 'user', 'movie', 'stars')

