from django.urls import path, include

app_name = 'heroes'

urlpatterns = [
	path('', include('heroes.api.urls', namespace='heroes-api')),
]

