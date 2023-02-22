from django.http import JsonResponse
from .models import *
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def AddQuestionView(request):
    print(request)
    if request.method == "POST":
        title_ = json.loads(request.body)["title"]
        print("title : " , title_)
        if title_ == None:
            return JsonResponse({"message": "Title is needed"}, status=404)
        text_ = json.loads(request.body)["text"]
        print("text : " , text_)
        if text_ == None:
            return JsonResponse({"message": "Text is needed"}, status=404)
        question = Question(title=title_, text=text_)
        question.save()
        return JsonResponse({"message": "success"}, status=200)
    else:
        return JsonResponse({"Method Not Allowed"}, status=404)

@csrf_exempt
def ListQuestionsView(request):
    if request.method == "GET":
        questions = Question.objects.all()
        ans = []
        for question in questions:
            ans.append({"title": question.title, "text": question.text})
        # print("ans : " , ans)
        return JsonResponse({"questions": ans}, status=200)
    else:
        return JsonResponse({"Method Not Allowed"}, status=404)
