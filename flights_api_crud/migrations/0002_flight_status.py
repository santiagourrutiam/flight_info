# Generated by Django 4.2.1 on 2023-05-16 02:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('flights_api_crud', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='flight',
            name='status',
            field=models.CharField(default='Wx hold', max_length=15),
            preserve_default=False,
        ),
    ]