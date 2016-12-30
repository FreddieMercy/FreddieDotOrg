# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0020_auto_20160706_2233'),
    ]

    operations = [
        migrations.AddField(
            model_name='homemodel',
            name='HomePicLeftArrow',
            field=models.FileField(null=True, upload_to=b'HomeFront'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='homemodel',
            name='HomePicRighArrow',
            field=models.FileField(null=True, upload_to=b'HomeFront'),
            preserve_default=True,
        ),
    ]
