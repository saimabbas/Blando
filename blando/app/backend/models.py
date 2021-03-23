from django.db import models
from solo.models import SingletonModel

# Create your models here.


class BackgroundImage(SingletonModel):

    image = models.ImageField(upload_to="background_image")
    alternative_text = models.CharField(
        max_length=50, verbose_name="Alternative Text (for blind people using text based browsers)")


class Bio(SingletonModel):

    title = models.CharField(max_length=50)
    text = models.TextField()


class Gallery(SingletonModel):
    title = models.CharField(max_length=50)


class Image(models.Model):
    image = models.ImageField(upload_to="gallery_images/")
    priority = models.IntegerField()

    galery = models.ForeignKey('Gallery', on_delete=models.CASCADE)


class Video(models.Model):
    embed = models.CharField(max_length=300)
    priority = models.IntegerField()

    galery = models.ForeignKey('Gallery', on_delete=models.CASCADE)


class Releases(SingletonModel):
    title = models.CharField(
        max_length=150, default='Releases')

    # embed_soundcloud = models.TextField()
    # embed_spotify = models.TextField()


class Release(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="release_images")

    link_spotify = models.CharField(max_length=150)

    releases = models.ForeignKey("Releases", on_delete=models.CASCADE)


class Social_Media(SingletonModel):
    title = models.CharField(max_length=150, default='Mídias Sociais')

    facebook = models.CharField(max_length=200, null=True, blank=True)

    instagram = models.CharField(max_length=200, null=True, blank=True)

    soundcloud = models.CharField(max_length=200, null=True, blank=True)
    spotify = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name = 'Social Media'


class Memo(SingletonModel):
    title = models.CharField(max_length=100, default='Agenda')
    tourbox_widget = models.TextField()


class Footer(SingletonModel):
    text_left = models.TextField()
    text_right = models.TextField()
