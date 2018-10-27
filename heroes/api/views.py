from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .serializers import HeroSerializer
from heroes.models import Hero

class HeroList(generics.ListCreateAPIView):
	queryset = Hero.objects.all()
	serializer_class = HeroSerializer


class HeroDetailAPI(generics.RetrieveAPIView):
	queryset = Hero.objects.all()
	serializer_class = HeroSerializer


class HeroUpdateAPI(generics.UpdateAPIView):
	queryset = Hero.objects.all()
	serializer_class = HeroSerializer


class HeroCreateAPI(generics.CreateAPIView):
	queryset = Hero.objects.all()
	serializer_class = HeroSerializer
