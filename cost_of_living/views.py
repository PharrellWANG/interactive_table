from django.shortcuts import render


# Create your views here.


def predictor(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    content = {

    }
    return render(request, 'predictor.html', content)

def good_map(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    content = {

    }
    return render(request, 'map.html', content)
