# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0015_auto_20160705_0946'),
    ]

    operations = [
        migrations.AddField(
            model_name='photoalbummodel',
            name='Album_Url',
            field=models.CharField(default=2, max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='photoalbummodel',
            name='Photo_Album_Cover',
            field=models.FileField(upload_to=b'Photo/Cover'),
            preserve_default=True,
        ),
    ]
