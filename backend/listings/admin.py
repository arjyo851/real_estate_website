from django.contrib import admin
from listings.models import Listing
from listings.models import Poi
from .forms import PoisForm
# from .forms import ListingForm
# Register your models here.
# class ListingAdmin(admin.ModelAdmin):
#     form = ListingForm

class PoiAdmin(admin.ModelAdmin):
    form = PoisForm


admin.site.register(Listing)
admin.site.register(Poi, PoiAdmin)