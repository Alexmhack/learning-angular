from django.contrib import admin

from .models import Hero

@admin.register(Hero)
class HeroModelAdmin(admin.ModelAdmin):
	list_display = ('id', 'name')
	list_editable_links = ('name',)
	search_fields = ('id', 'name')
