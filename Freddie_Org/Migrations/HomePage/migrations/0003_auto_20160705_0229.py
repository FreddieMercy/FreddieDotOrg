# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0002_auto_20160705_0228'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homelogomodel',
            name='Date_Added',
            field=models.DateTimeField(auto_now=True),
            preserve_default=True,
        ),
    ]
