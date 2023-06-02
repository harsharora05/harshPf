from django.shortcuts import render,HttpResponse
from .models import contact,project
from django.contrib import messages


# Create your views here.

def Home(request):
    # contact fetching
    # messages.success(request,"hello!")
    if request.method == 'POST':
        name = str(request.POST['name'])
        email = str(request.POST['email'])
        number = str(request.POST['number'])
        subject = str(request.POST['subject'])
        message = str(request.POST['message'])
        if len(number) > 10  or  len(number) < 10:
            messages.warning(request, "Please! Enter Correct Number")
        else:
             con = contact(name=name,email=email,number=number,subject=subject,message=message)
             messages.success(request, "Your response have been submitted")
             con.save()

    #project's info sending
    projs = project.objects.all()

    context={'projs':projs}

    return render(request,'Home.html',context)