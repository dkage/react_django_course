from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True,
                                     'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'title', 'synopsis', 'ratings_counter', 'average_rating')


class RatingSerializer(serializers.ModelSerializer):
    movie = MovieSerializer(many=False)
    user = UserDataSerializer(many=False)

    class Meta:
        model = Rating
        fields = ('id', 'user', 'movie', 'stars')
