# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0006_auto_20160705_0527'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homelogomodel',
            name='HomeLogo',
            field=models.FileField(upload_to=b'/HomePage/static/img/media/HomeLogo'),
            preserve_default=True,
        ),
    ]
