# Generated by Django 5.2.3 on 2025-06-25 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entrantes',
            name='precio',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]
