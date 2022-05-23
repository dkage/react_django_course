from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Movie(models.Model):
    title = models.CharField(max_length=50)
    synopsis = models.TextField(max_length=360)

    def __str__(self):
        return f"{self.title}"

    def ratings_counter(self):
        num_ratings = Rating.objects.filter(movie=self)
        return len(num_ratings)

    def average_rating(self):
        stars_sum = 0
        ratings = Rating.objects.filter(movie=self)

        for rating in ratings:
            stars_sum += rating.stars

        if len(ratings) > 0:
            return stars_sum / len(ratings)
        else:
            return 0


class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        unique_together = ('user', 'movie')
        index_together = ('user', 'movie')
