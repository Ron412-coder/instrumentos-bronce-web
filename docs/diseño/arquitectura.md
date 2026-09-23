# Arquitectura del Proyecto: Instrumentos de Bronce

## 1. Estructura general del proyecto

El proyecto está organizado en dos grandes bloques:

- **docs/** → Documentación completa del proyecto.
- **src/** → Código fuente del sitio web.

Esta separación permite mantener un orden claro entre la parte técnica y la parte documental.

---

## 2. Estructura de carpetas

instrumentos-bronce-web/
│
├── docs/                      # Documentación
│   ├── README.md
│   ├── analisis.md
│   ├── especificacion/
│   │   ├── casos-de-uso.md
│   │   └── requisitos.md
│   ├── diseño/
│   │   ├── arquitectura.md
│   │   ├── diagramas/
│   │   └── estilos.css
│   ├── implementacion.md
│   ├── pruebas.md
│   └── mantenimiento.md
│
└── src/                       # Código fuente
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
├── php/
│   └── procesar-form.php
├── pages/
│   ├── historia.html
│   ├── instrumentos.html
│   ├── tecnica.html
│   └── contacto.html
└── index.html

---

## 3. Arquitectura del sitio web

El sitio sigue una arquitectura **multicapa simple**:

### ✔ Capa de presentación (Front-End)
- HTML → estructura del contenido.
- CSS → diseño visual.
- JS → interacción básica.

### ✔ Capa de lógica (Back-End)
- PHP → procesamiento del formulario de contacto.

### ✔ Capa de recursos
- Imágenes de instrumentos.
- Archivos estáticos.

---

## 4. Flujo de navegación
index.html
|
|-- historia.html
|
|-- instrumentos.html
|
|-- tecnica.html
|
|-- contacto.html --> procesar-form.php

---

## 5. Descripción de cada componente

### **index.html**
Página principal. Presenta el sitio y contiene el menú de navegación.

### **pages/**
Contiene las páginas internas del sitio:
- historia  
- instrumentos  
- técnica  
- contacto  

### **css/style.css**
Define los estilos globales del sitio:
- colores  
- tipografías  
- diseño del menú  
- estructura visual  

### **js/script.js**
Funciones simples:
- mensajes en consola  
- interacción básica  

### **php/procesar-form.php**
Recibe los datos del formulario mediante POST y muestra un mensaje de confirmación.

---

## 6. Justificación de la arquitectura

La arquitectura es simple, modular y adecuada para un proyecto educativo:

- Fácil de mantener.  
- Código separado por responsabilidades.  
- Documentación clara y completa.  
- Estructura profesional como en proyectos reales.


