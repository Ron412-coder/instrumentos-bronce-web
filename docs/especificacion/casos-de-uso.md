# Casos de Uso del Proyecto: Instrumentos de Bronce

## Introducción
Los casos de uso describen las interacciones principales entre el usuario y el sistema. 
Permiten entender qué acciones puede realizar el usuario dentro del sitio web y cómo 
responde el sistema ante esas acciones.

---

## CU01 – Navegar por el sitio web
**Actor:** Usuario  
**Descripción:** El usuario accede al sitio y utiliza el menú para moverse entre las diferentes páginas.  
**Flujo principal:**
1. El usuario abre la página principal (index.html).
2. El usuario selecciona una opción del menú.
3. El sistema carga la página correspondiente.

---

## CU02 – Consultar la historia de los instrumentos de bronce
**Actor:** Usuario  
**Descripción:** El usuario accede a la sección de historia para leer información sobre el origen y evolución de los instrumentos.  
**Flujo principal:**
1. El usuario selecciona “Historia” en el menú.
2. El sistema muestra la página historia.html.
3. El usuario lee el contenido.

---

## CU03 – Ver la lista de instrumentos de bronce
**Actor:** Usuario  
**Descripción:** El usuario accede a la sección de instrumentos para ver una lista con sus características.  
**Flujo principal:**
1. El usuario selecciona “Instrumentos”.
2. El sistema muestra instrumentos.html.
3. El usuario consulta la información de cada instrumento.

---

## CU04 – Consultar técnicas de interpretación
**Actor:** Usuario  
**Descripción:** El usuario accede a la sección de técnicas para aprender sobre respiración, embocadura y mantenimiento.  
**Flujo principal:**
1. El usuario selecciona “Técnica”.
2. El sistema muestra tecnica.html.
3. El usuario lee la información.

---

## CU05 – Enviar formulario de contacto
**Actor:** Usuario  
**Descripción:** El usuario completa un formulario y envía sus datos.  
**Flujo principal:**
1. El usuario abre contacto.html.
2. El usuario completa los campos del formulario.
3. El usuario presiona “Enviar”.
4. El sistema envía los datos mediante POST a procesar-form.php.
5. El sistema muestra un mensaje de confirmación.

---

## CU06 – Recibir mensaje del usuario (PHP)
**Actor:** Sistema  
**Descripción:** El sistema procesa los datos enviados por el usuario.  
**Flujo principal:**
1. El archivo procesar-form.php recibe los datos.
2. El sistema valida la información.
3. El sistema muestra un mensaje de éxito o error.

