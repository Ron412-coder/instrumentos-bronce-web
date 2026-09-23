# Implementación del Proyecto: Instrumentos de Bronce

## 1. Introducción
Este documento describe cómo se implementará el sitio web “Instrumentos de Bronce”, 
siguiendo la arquitectura y los requisitos definidos previamente. Se detallan las 
tecnologías utilizadas, la estructura del código y el proceso de desarrollo.

---

## 2. Tecnologías utilizadas

### Front-End
- **HTML5**: estructura del contenido.
- **CSS3**: diseño visual del sitio.
- **JavaScript**: interacción básica y funciones simples.

### Back-End
- **PHP**: procesamiento del formulario de contacto mediante método POST.

### Control de versiones
- **Git y GitHub**: repositorio, commits y control del proyecto.

### Entorno de desarrollo
- **GitHub Codespaces**: edición del código en la nube.

---

## 3. Estructura del código fuente

El código se encuentra en la carpeta `src/`:
src/
│── css/
│   └── style.css
│── js/
│   └── script.js
│── img/
│── php/
│   └── procesar-form.php
│── pages/
│   ├── historia.html
│   ├── instrumentos.html
│   ├── tecnica.html
│   └── contacto.html
└── index.html

---

## 4. Implementación de cada componente

### 4.1 index.html
- Contendrá el menú principal.
- Presentará una introducción al sitio.
- Enlazará a todas las páginas internas.

### 4.2 Páginas internas (pages/)
- **historia.html**: texto sobre el origen de los instrumentos de bronce.
- **instrumentos.html**: tarjetas con imágenes y descripciones.
- **tecnica.html**: técnicas de respiración, embocadura y mantenimiento.
- **contacto.html**: formulario con campos de nombre, correo y mensaje.

### 4.3 CSS (style.css)
- Implementará el diseño definido en `docs/diseño/estilos.css`.
- Colores dorado + negro.
- Menú horizontal.
- Tarjetas estilizadas.

### 4.4 JavaScript (script.js)
- Funciones simples:
  - mensajes en consola
  - interacción básica (opcional)

### 4.5 PHP (procesar-form.php)
- Recibirá los datos del formulario mediante POST.
- Validará los campos.
- Mostrará un mensaje de confirmación.

---

## 5. Flujo de implementación

1. Crear la estructura básica de `index.html`.
2. Implementar el menú de navegación.
3. Crear las páginas internas con contenido mínimo.
4. Aplicar estilos desde `style.css`.
5. Añadir imágenes en `img/`.
6. Crear el formulario en `contacto.html`.
7. Implementar `procesar-form.php`.
8. Probar navegación y envío de formulario.
9. Ajustar diseño y corregir errores.

---

## 6. Justificación de la implementación

La implementación sigue una estructura modular que facilita:

- mantenimiento  
- claridad del código  
- escalabilidad  
- cumplimiento de buenas prácticas  

El proyecto está diseñado para ser simple, educativo y funcional.


