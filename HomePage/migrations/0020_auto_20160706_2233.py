# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0019_auto_20160706_2228'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homemodel',
            name='HomeBGP',
            field=models.FileField(null=True, upload_to=b'HomeFront'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='homemodel',
            name='HomeLogo',
            field=models.FileField(upload_to=b'HomeFront'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='homemodel',
            name='HomeVideo',
            field=models.FileField(upload_to=b'HomeFront'),
            preserve_default=True,
        ),
    ]
