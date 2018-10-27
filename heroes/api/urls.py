from django.urls import path

from .views import (
	HeroList, HeroDetailAPI, HeroUpdateAPI, HeroCreateAPI, HeroDeleteAPI
)

app_name = 'heroes-api'

urlpatterns = [
	path('list/', HeroList.as_view(), name='list'),
	path('<int:pk>/detail/', HeroDetailAPI.as_view(), name='detail'),
	path('<int:pk>/update/', HeroUpdateAPI.as_view(), name='update'),
	path('create/', HeroCreateAPI.as_view(), name='create'),
	path('<int:pk>/delete/', HeroDeleteAPI.as_view(), name='delete'),
]
