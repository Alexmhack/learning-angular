from rest_framework import serializers

from heroes.models import Hero

class HeroSerializer(serializers.ModelSerializer):
	class Meta:
		model = Hero
		fields = ('id', 'name')
