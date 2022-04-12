from django.db import models


# class BaseModel(models.Model): # workaround for django highlight without pycharm professional
#     objects = models.Manager()
#
#     class Meta:
#         abstract = True


class Book(models.Model):
    title = models.CharField(max_length=36, blank=False, unique=True)
    description = models.TextField(max_length=256, blank=True)

    price = models.DecimalField(default=0, decimal_places=2, max_digits=3)

    published = models.DateField(blank=True, null=True)
    is_published = models.BooleanField(default=False)

    cover = models.ImageField(upload_to='covers/', blank=True)

    def __str__(self):
        return f"{str(self.id)} - {self.title}"
