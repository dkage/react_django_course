from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.exceptions import ObjectDoesNotExist
from .serializers import *
from django.shortcuts import render


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request):
        response = {'message': "It's working."}
        return Response(response, status=status.HTTP_201_CREATED)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    def create(self, request, **kwargs):

        try:
            movie = Movie.objects.get(id=request.data['movie'])
        except Movie.DoesNotExist:
            return Response('Movie ID invalid', status=401)
        try:
            user = User.objects.get(id=request.data['user'])
        except User.DoesNotExist:
            return Response('Movie ID invalid', status=401)

        rating = Rating(stars=request.data['stars'], movie_id=movie.id, user_id=user.id)
        rating.save()

        serializer = RatingSerializer(rating)

        return Response(serializer.data, status=status.HTTP_201_CREATED)


