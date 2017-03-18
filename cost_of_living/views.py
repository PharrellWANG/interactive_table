from django.shortcuts import render


# Create your views here.


def cost_of_living(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    content = {

    }
    return render(request, 'main.html', content)
