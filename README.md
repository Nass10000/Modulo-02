# Proyecto Módulo 2 - Aplicación Web de Gestión de Películas

Este proyecto corresponde al **Módulo 2** y es una aplicación web completa que permite **gestionar una colección de películas**. Utiliza un stack **Node.js + Express + MongoDB** en el backend, y una interfaz web desarrollada con **HTML, CSS, Bootstrap y jQuery** en el frontend.

## 🎯 ¿De qué trata este proyecto?

La aplicación permite al usuario:

- Ver una lista de películas almacenadas.
- Crear nuevas entradas de películas con campos como título, director, año, género, duración, calificación y póster.
- Eliminar películas existentes.
- Navegar entre vistas como la página principal e información adicional (About Us).

Es ideal como práctica de integración entre frontend y backend usando rutas RESTful y bases de datos no relacionales.

## 🧠 Tecnologías utilizadas

### Backend:
- **Node.js** y **Express** para la API REST.
- **MongoDB** con **Mongoose** como base de datos.
- Middleware como `cors`, `morgan` y `express.json()` para configuración del servidor.
- **entre otras tecnologías**
### Frontend:
- **HTML5**, **CSS3**, **Bootstrap 5.3**, y **jQuery**.
- Páginas: `index.html` (página principal), `aboutus.html` (acerca de la app o el equipo).
  
## 🔌 Endpoints principales (API REST)

- `GET /movies` → Obtener todas las películas.
- `POST /movies` → Crear una nueva película.
- `DELETE /movies/:id` → Eliminar una película por su ID.

## 📁 Estructura del proyecto

