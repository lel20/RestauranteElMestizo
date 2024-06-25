# Generated by Django 4.1.13 on 2024-06-25 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entrantes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('imagen', models.URLField(blank=True)),
                ('disponibilidad', models.CharField(max_length=5)),
            ],
        ),
    ]