# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0010_auto_20160705_0617'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomeModel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, null=True, blank=True)),
                ('Date_Added', models.DateTimeField(auto_now=True)),
                ('HomeLogo', models.FileField(upload_to=b'HomeLogo')),
                ('HomeVideo', models.FileField(upload_to=b'video')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.DeleteModel(
            name='HomeLogoModel',
        ),
        migrations.DeleteModel(
            name='VideoModel',
        ),
    ]
