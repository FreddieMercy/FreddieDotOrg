# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0017_auto_20160705_1553'),
    ]

    operations = [
        migrations.AddField(
            model_name='homemodel',
            name='HomeBGP',
            field=models.FileField(null=True, upload_to=b'Background'),
            preserve_default=True,
        ),
    ]
