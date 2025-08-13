TODOS:

1. CRUD
- Autores ✅
- Libros ✅
- Resenas ✅ (Faltaria agergar un upvote directo desde una resena)
- Ventas ✅

2. Tabla on autores, Ordenar y filterar por cada columna
    - numero de libros
    - promedio de ventas  
    - ventas totales

3. Tabla con 10 libros mejores rateados, con su review mas popular positiva y negativa

4. Top 50 libros de todos los tiempos
    - Ventas totales
    - Ventas totales del autor
    - Si el libro estuvo o no en el top 5 de su ano

5. Ventana de busqueda con input de texto y retorna lista pagina con libros cuya descripcion tenga palabras de la busqueda.


Usar la app:

1.Windows:

``` bash 
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -U pip
pip install -r requirements.txt
```

1.1 Linux/mac (todos ustedes xd)

``` bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip
pip install -r requirements.txt
```

2. Cambio modelos

``` bash
python manage.py makemigrations
python manage.py migrate
```

3. Poblar bbdd

```bash
python manage.py seed
```

4. Usuario vista admin (aca crean su propio usuario y en la url hacen /admin y pueden ver desde ahi, creo q es unico por consola no viaja en git (creo, sino es user=nico,psw=nico))

```bash
python manage.py createsuperuser
```

5. Ejecutar app ahora si

```bash
python manage.py runserver
```



# Importante para la paginacion 

Este metodo wea de paginacion la verdad no lo conocia y me lo dio chatgpt, aca esta la explicacion de que es y como se usa para que tamb lo usen con los reports (basicamente se hace include el _pagination y si tiene el atributo paginator lo sabe usar por deirlo de una forma)

Ahi ver en las views que tienen un "atributo" en el list de paginator, basicamente esto de las views:

page_obj = Paginator(authors, 25).get_page(request.GET.get("page"))

Crea un paginador de 25 ítems por página para el queryset authors.
Lee el parámetro ?page= de la URL.
Devuelve un objeto Page listo para el template.
Maneja errores: si page es inválido o no existe, no crashea; te da la primera/última página automáticamente.
Si en cada view de listado haces lo mismo (como lo tienes), y en el template incluyes el bloque de paginación, sí: cuando haya más de 25 filas, se separa en páginas y podrás navegar con “Prev/Next”.


Y esto de los html:

- page_obj es un Page de Django.
- has_other_pages → muestra el bloque solo si hay más de una página.
- has_previous / previous_page_number → link “Prev”.
- number → número de la página actual.
- paginator.num_pages → total de páginas.
- has_next / next_page_number → link “Next”.
- Es suficiente incluir este bloque (o tu partial _pagination.html) en cada template de listado donde pases page_obj.

## Atributos útiles del objeto Page y Paginator que estás usando:

- page_obj.object_list, page_obj.number, page_obj.has_previous(), page_obj.previous_page_number(), page_obj.has_next(), page_obj.next_page_number().

- page_obj.paginator.count (total ítems), page_obj.paginator.num_pages (total páginas), page_obj.paginator.per_page (items por página).