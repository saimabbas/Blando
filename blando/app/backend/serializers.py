from rest_framework import serializers
from .models import *


class GallerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Gallery
        fields = ["title", "image_set", "video_set"]
        depth = 1


class ReleasesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Releases
        fields = ["title", "release_set"]
        depth = 1


class SocialMediaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Social_Media
        fields = "__all__"


class FooterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Footer

        fields = "__all__"


class BioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bio
        fields = "__all__"
