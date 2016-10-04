# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0003_auto_20160705_0229'),
    ]

    operations = [
        migrations.RenameField(
            model_name='homelogomodel',
            old_name='Pic',
            new_name='HomeLogo',
        ),
        migrations.AddField(
            model_name='homelogomodel',
            name='title',
            field=models.CharField(max_length=150, null=True, blank=True),
            preserve_default=True,
        ),
    ]
