from django.contrib import admin

# Register your models here.
from .models import Question, Choice

admin.site.site_header = "Neural API Admin" # Header displayed at the top of the admin page
admin.site.site_title = "Neural API Admin Portal" # Title displayed in the tab of the admin page
admin.site.index_title = "Welcome to Neural API Admin Portal" # Title displayed in the tab for the main page

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3

class QuestionAdmin(admin.ModelAdmin):
    fieldsets =  [(None, {'fields': ['question_text']}),
    ('Date Information', {'fields': ['pub_date'], 'classes': ['collapse']})]
    inlines = [ChoiceInline]

admin.site.register(Question, QuestionAdmin)
