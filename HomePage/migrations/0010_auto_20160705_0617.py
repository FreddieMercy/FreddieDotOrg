# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0009_auto_20160705_0613'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='HomeVideoModel',
            new_name='VideoModel',
        ),
    ]
