# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-02-06 18:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('About', '0004_auto_20170206_1743'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutForthComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_text', models.CharField(max_length=150)),
                ('second_text', models.CharField(max_length=200)),
                ('third_text', models.CharField(max_length=200)),
                ('Date_Added', models.DateTimeField(auto_now_add=True)),
                ('Last_Modified', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
