# Generated by Django 3.1.12 on 2025-01-20 22:43

from django.db import migrations, models
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Batidos',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('imagen', models.URLField(blank=True)),
                ('descripcion', models.CharField(max_length=100)),
                ('disponibilidad', models.CharField(max_length=5)),
                ('nota', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Caldos',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('descripcion', models.Field(max_length=100)),
                ('disponibilidad', models.CharField(max_length=5)),
                ('imagen', models.URLField(blank=True)),
                ('nota', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Entrantes',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('descripcion', models.CharField(max_length=100)),
                ('disponibilidad', models.CharField(max_length=5)),
                ('imagen', models.URLField(blank=True)),
                ('nota', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Raciones',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('imagen', models.URLField(blank=True)),
                ('disponibilidad', models.CharField(max_length=5)),
            ],
        ),
        migrations.CreateModel(
            name='Tipicos',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=5)),
                ('imagen', models.URLField(blank=True)),
                ('descripcion', models.CharField(max_length=100)),
                ('disponibilidad', models.CharField(max_length=5)),
                ('nota', models.CharField(max_length=50)),
            ],
        ),
    ]
