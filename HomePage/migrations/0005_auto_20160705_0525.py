# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0004_auto_20160705_0309'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homelogomodel',
            name='HomeLogo',
            field=models.FileField(upload_to=b'/home/junhao/workspace/java-neon/freddie_org/HomePage/static/img/mediaHomeLogo'),
            preserve_default=True,
        ),
    ]
