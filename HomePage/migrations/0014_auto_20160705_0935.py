# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HomePage', '0013_auto_20160705_0913'),
    ]

    operations = [
        migrations.CreateModel(
            name='PhotoAlbumModel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=150)),
                ('Date_Added', models.DateTimeField(auto_now_add=True)),
                ('Last_Modified', models.DateTimeField(auto_now=True)),
                ('Photo_Album_Cover', models.FileField(upload_to=b'Photo/tmp')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.DeleteModel(
            name='PhotoAlbum',
        ),
    ]
