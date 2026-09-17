from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializer import CustomerSerializer
from .models import Customer


# GET ALL + CREATE
@api_view(['GET', 'POST'])
def customer_list(request):

    if request.method == 'GET':
        customers = Customer.objects.all().order_by('-id')
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# GET ONE + UPDATE
@api_view(['GET', 'PUT'])
def customer_detail(request, pk):
    customer = Customer.objects.filter(pk=pk).first()

    if not customer:
        return Response({"error": "Not found"}, status=404)

    if request.method == "GET":
        return Response(CustomerSerializer(customer).data)

    serializer = CustomerSerializer(customer, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)
# DELETE
@api_view(['DELETE'])
def customer_delete(request, pk):

    try:
        customer = Customer.objects.get(pk=pk)
        customer.delete()
        return Response({"message": "Deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

    except Customer.DoesNotExist:
        return Response({"error": "Customer not found"}, status=status.HTTP_404_NOT_FOUND)