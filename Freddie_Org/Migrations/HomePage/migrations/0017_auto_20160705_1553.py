# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0016_auto_20160705_1035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photoalbummodel',
            name='Photo_Album_Cover',
            field=models.ImageField(upload_to=b'Photo/Cover'),
            preserve_default=True,
        ),
    ]
