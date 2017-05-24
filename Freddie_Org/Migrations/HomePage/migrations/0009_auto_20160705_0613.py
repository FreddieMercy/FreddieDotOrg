# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0008_auto_20160705_0610'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homevideomodel',
            name='HomeVideo',
            field=models.FileField(upload_to=b'video'),
            preserve_default=True,
        ),
    ]
