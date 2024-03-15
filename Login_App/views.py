from django.shortcuts import render
from django.views.generic import View

from Login_App.models import User


# Create your views here.
def index(request):
    return render(request, 'index.html')


class Register(View):
    def get(self, request):
        return render(request, 'New.html')

    def post(self, request):
        name = request.POST.get('name')
        email = request.POST.get('email')
        age = int(request.POST.get('age'))
        dob = request.POST.get('dob')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        user = User.objects.create(name=name, email=email, age=age, dob=dob, password=password, confirm_password=confirm_password)
        return render(request, 'New.html', {'message': 'User created successfully.'})

class show(View):
    def get(self,request):
        details = User.objects.all()
        return render(request, 'showdetails.html',{'details':details})

def error(request):
    return render(request, 'error.html')

class CheckLogin(View):
    def get(self,request):
        return render(request,'index.html')
    def post(self,request):
        password = request.POST['pswd']
        mailid = request.POST['mailid']
        rec = User.objects.filter(password=password, mailid=mailid)

