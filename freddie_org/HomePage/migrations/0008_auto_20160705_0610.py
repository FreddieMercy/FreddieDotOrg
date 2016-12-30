# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0007_auto_20160705_0528'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomeVideoModel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('Date_Added', models.DateTimeField(auto_now=True)),
                ('HomeVideo', models.FileField(upload_to=b'../video')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterField(
            model_name='homelogomodel',
            name='HomeLogo',
            field=models.FileField(upload_to=b'HomeLogo'),
            preserve_default=True,
        ),
    ]
