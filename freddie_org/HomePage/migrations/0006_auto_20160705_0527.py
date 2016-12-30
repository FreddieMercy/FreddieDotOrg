# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0005_auto_20160705_0525'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homelogomodel',
            name='HomeLogo',
            field=models.FileField(upload_to=b'[]'),
            preserve_default=True,
        ),
    ]
