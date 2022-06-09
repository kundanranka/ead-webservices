from django.urls import path
from .views import *
from rest_framework import routers


urlpatterns = [
    path('product', ProductView.as_view({
        'get': 'list',
        'put': 'update',
        'post': 'create',
        'patch': 'partial_update',
        'delete': 'destroy'
    })),
    path('product/<int:pk>', ProductView.as_view({
        'get': 'list',
        'put': 'update',
        'post': 'create',
        'patch': 'partial_update',
        'delete': 'destroy'
    })),
]
