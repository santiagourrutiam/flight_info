# Generated by Django 4.2.1 on 2023-08-06 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dronelog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DroneModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model_name', models.CharField(max_length=50)),
            ],
        ),
    ]
