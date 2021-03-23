from django.urls import path
from .views import RetrieveBackgroundImage, MainEndpoint

urlpatterns = [
    path('background-image', RetrieveBackgroundImage),
    path('main', MainEndpoint)
]
