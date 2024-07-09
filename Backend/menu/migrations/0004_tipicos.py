# Generated by Django 4.1.13 on 2024-07-09 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_caldos'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tipicos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('imagen', models.URLField(blank=True)),
                ('descripcion', models.CharField(max_length=100)),
                ('disponibilidad', models.CharField(max_length=5)),
                ('nota', models.CharField(max_length=50)),
            ],
        ),
    ]
