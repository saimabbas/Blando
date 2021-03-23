from django.contrib import admin
from django.contrib.auth.models import Group
from django.utils.html import format_html

from solo.admin import SingletonModelAdmin

from .models import *

# Galeria


class display_videos_inline(admin.TabularInline):
    model = Video
    # form = video_form
    extra = 0
    fields = ['embed', 'priority']


class display_images_inline(admin.TabularInline):
    model = Image
    #form = image_form
    # verbose_name = "Imagem da Galeria"
    # verbose_name_plural = "Imagens da Galeria"
    extra = 0

    fields = ['image', 'priority', "thumbnail"]

    readonly_fields = ['thumbnail']

    def thumbnail(self, obj):
        return format_html(u'<img style="width:100px;" src="%s" />' % obj.image.url)


class galeria_admin(SingletonModelAdmin):
    inlines = [
        display_images_inline,
        display_videos_inline
    ]


# Releases

class display_releases_inline(admin.TabularInline):
    model = Release

    extra = 0
    fields = ["title", "image", "link_spotify", "thumbnail"]

    readonly_fields = ['thumbnail']

    def thumbnail(self, obj):
        return format_html(u'<img style="width:100px;" src="%s" />' % obj.image.url)


class releases_admin(SingletonModelAdmin):
    inlines = [
        display_releases_inline
    ]


# Register your models here.
admin.site.unregister(Group)


admin.site.register(BackgroundImage, SingletonModelAdmin)
admin.site.register(Bio, SingletonModelAdmin)
admin.site.register(Gallery, galeria_admin)
# admin.site.register(Image)
# admin.site.register(Video)
admin.site.register(Releases, releases_admin)
admin.site.register(Social_Media, SingletonModelAdmin)
admin.site.register(Memo, SingletonModelAdmin)
admin.site.register(Footer, SingletonModelAdmin)
