from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView
from django.http import JsonResponse
from app.settings.common import MEDIA_URL
from .models import *
from .serializers import *


def RetrieveBackgroundImage(request):
    image = BackgroundImage.objects.get()
    response = {"url": f"{MEDIA_URL}{image.image}"}
    return JsonResponse(response)


def MainEndpoint(request):
    backgroundImage = BackgroundImage.objects.get()

    bio = Bio.objects.get()

    gallery = Gallery.objects.get()
    galleryImages = gallery.image_set.all()
    galleryVideos = gallery.video_set.all()

    releasesSection = Releases.objects.get()
    releases = releasesSection.release_set.all()

    socialMediaSection = Social_Media.objects.get()

    footer = Footer.objects.get()

    response = {
        'backgroundImage': f"{MEDIA_URL}{backgroundImage.image}",
        # 'gallery': {
        #     'title': gallery.title,
        #     'images': [*galleryImages],
        #     'videos': [*galleryVideos]
        # },
        'bio': BioSerializer(bio).data,

        'gallery': GallerySerializer(gallery).data,
        # 'releases': {
        #     'title': releasesSection.title,
        #     'releases': [*releases]
        # },
        'releases': ReleasesSerializer(releasesSection).data,
        # 'socialMedia': {
        #     'title': socialMediaSection.title,
        #     'facebook': socialMediaSection.facebook,
        #     'instagram': socialMediaSection.instagram,
        #     'soundcloud': socialMediaSection.soundcloud,
        #     'spotify': socialMediaSection.spotify,
        # },
        'socialMedia': SocialMediaSerializer(socialMediaSection).data,
        # 'footer': {
        #     'text_left': footer.text_left,
        #     'text_right': footer.text_right
        # }
        'footer': FooterSerializer(footer).data
    }

    print(response)
    return JsonResponse(response)
