# Generated by Django 4.2.1 on 2023-05-16 02:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('aircraft', models.CharField(max_length=6)),
                ('origin', models.CharField(max_length=6)),
                ('destin', models.CharField(max_length=6)),
                ('etd', models.CharField(max_length=5)),
                ('eta', models.CharField(max_length=5)),
                ('program_onb', models.CharField(max_length=20)),
            ],
        ),
    ]
