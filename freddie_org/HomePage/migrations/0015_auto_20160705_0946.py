# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0014_auto_20160705_0935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photoalbummodel',
            name='Photo_Album_Cover',
            field=models.FileField(upload_to=b'Photo/tmp/Cover'),
            preserve_default=True,
        ),
    ]
