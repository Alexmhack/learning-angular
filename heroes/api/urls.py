from django.urls import path

from .views import HeroList

app_name = 'heroes-api'

urlpatterns = [
	path('list/', HeroList.as_view(), name='list'),
]
