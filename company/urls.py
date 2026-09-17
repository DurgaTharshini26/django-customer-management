from django.urls import path
from .views import customer_list, customer_detail, customer_delete

urlpatterns = [
    path('customers/', customer_list),
    path('customers/<int:pk>/', customer_detail),
    path('customers/delete/<int:pk>/', customer_delete),
]