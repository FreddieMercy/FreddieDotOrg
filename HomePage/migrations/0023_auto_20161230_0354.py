# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-12-30 03:54
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0022_auto_20160722_1851'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homemodel',
            name='HomePicLeftArrow',
        ),
        migrations.RemoveField(
            model_name='homemodel',
            name='HomePicRighArrow',
        ),
    ]