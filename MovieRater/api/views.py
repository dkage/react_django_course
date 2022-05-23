from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db import IntegrityError
from .serializers import *


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):

        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            user = User.objects.get(id=1)

            try:
                rating = Rating.objects.get(user=user, movie=movie)
                rating.stars = request.data['stars']
                return Response({'message': 'Rating updated', 'result': RatingSerializer(rating).data},
                                status=status.HTTP_201_CREATED)
            except Rating.DoesNotExist:
                rating = Rating.objects.create(stars=request.data['stars'], user=user, movie=movie)
            rating.save()
            return Response({'message': 'Rating created', 'result': RatingSerializer(rating).data},
                            status=status.HTTP_201_CREATED)
        else:
            return Response('Missing stars', status=status.HTTP_400_BAD_REQUEST)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    def create(self, request, **kwargs):
        if 'movie' not in request.data or 'stars' not in request.data or 'user' not in request.data:
            return Response('Request missing data', status=status.HTTP_400_BAD_REQUEST)

        try:
            movie = Movie.objects.get(id=request.data['movie'])
        except Movie.DoesNotExist:
            return Response('Movie ID invalid', status=status.HTTP_404_NOT_FOUND)
        try:
            user = User.objects.get(id=request.data['user'])
        except User.DoesNotExist:
            return Response('User ID invalid', status=status.HTTP_404_NOT_FOUND)

        rating = Rating(stars=request.data['stars'], movie_id=movie.id, user_id=user.id)
        try:
            rating.save()
        except IntegrityError:
            return Response('Unique constraint error.', status=status.HTTP_400_BAD_REQUEST)

        serializer = RatingSerializer(rating)

        return Response({'message': 'Rating created', 'result': serializer.data},
                        status=status.HTTP_201_CREATED)

    def update(self, request, **kwargs):

        if 'pk' not in kwargs:
            return Response('No PK on url request', status=status.HTTP_400_BAD_REQUEST)
        try:
            rating = Rating.objects.get(id=kwargs['pk'])
            print(rating.stars)
        except Rating.DoesNotExist:
            return Response('Rating ID invalid', status=status.HTTP_404_NOT_FOUND)

        if 'movie' in request.data:
            print('inside this shit')
            try:
                movie = Movie.objects.get(id=request.data['movie'])
            except Movie.DoesNotExist:
                return Response('Movie ID invalid', status=status.HTTP_404_NOT_FOUND)
            rating.movie = movie
        if 'stars' in request.data:
            rating.stars = request.data['stars']
        rating.save()

        return Response({'message': 'Rating updated', 'result': RatingSerializer(rating).data},
                        status=status.HTTP_200_OK)
