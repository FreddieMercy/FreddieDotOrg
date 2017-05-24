# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0012_photoalbum'),
    ]

    operations = [
        migrations.RenameField(
            model_name='photoalbum',
            old_name='Photo',
            new_name='Photo_Album_Cover',
        ),
    ]
