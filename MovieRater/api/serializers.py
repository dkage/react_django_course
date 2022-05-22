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

    # def create(self, validated_data):
    #     id_movie = validated_data.pop('movie')
    #     id_user = validated_data.pop('user')
    #     movie = Movie.objects.get(id=id_movie)[0]
    #     user = User.objects.get(id=id_user)[0]
    #
    #     return Rating


