# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomeModel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, null=True, blank=True)),
                ('Date_Added', models.DateTimeField()),
                ('Last_time_modified', models.DateTimeField()),
                ('Pic', models.FileField(upload_to=b'')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
