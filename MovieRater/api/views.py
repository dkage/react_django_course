from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from django.db import IntegrityError
from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny, )
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # This methods rewrite were made to restrict the access to methods listing users and showing password on
    # UserSerializer, but using the 'writeOnly':True property solves the password on GET problem.
    def list(self, request, **kwargs):
        response = {'message': 'List GET function is not offered in this endpoint.'}
        return Response(response, status=status.HTTP_403_FORBIDDEN)

    def retrieve(self, request, **kwargs):
        response = {'message': 'Retrieve GET function is not offered in this endpoint.'}
        return Response(response, status=status.HTTP_403_FORBIDDEN)


class MovieViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticatedOrReadOnly,)

    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):

        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            user = request.user

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
    authentication_classes = (TokenAuthentication,)

    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    def create(self, request, **kwargs):
        if 'movie' not in request.data or 'stars' not in request.data or 'user' not in request.data:
            return Response('Request missing data', status=status.HTTP_400_BAD_REQUEST)

        try:
            movie = Movie.objects.get(id=request.data['movie'])
            user = request.user
        except Movie.DoesNotExist:
            return Response('Movie ID not found on database', status=status.HTTP_404_NOT_FOUND)

        rating = Rating(stars=request.data['stars'], movie_id=movie.id, user_id=user.id)
        try:
            rating.save()
        except IntegrityError:
            return Response('Unique constraint error.', status=status.HTTP_400_BAD_REQUEST)

        serializer = RatingSerializer(rating)

        return Response({'message': 'Rating created', 'result': serializer.data},
                        status=status.HTTP_201_CREATED)

    def update(self, request, **kwargs):
        user = request.user

        if 'pk' not in kwargs:
            return Response('No PK on url request', status=status.HTTP_400_BAD_REQUEST)
        try:
            rating = Rating.objects.get(id=kwargs['pk'], user=user.id)
        except Rating.DoesNotExist:
            return Response('Rating ID invalid', status=status.HTTP_404_NOT_FOUND)

        # TODO this needs to check if user on rating is the same as the one trying to update it
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
