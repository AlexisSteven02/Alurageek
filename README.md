# Alurageek
Desafío Alura Geek
Proyecto: Colección de Libros
Descripción del Proyecto: Colección de Libros con JSON Server
Este proyecto consiste en una aplicación web para gestionar una colección de libros utilizando JSON Server como simulador de una API REST. Permite a los usuarios ver una lista de libros disponibles, agregar nuevos libros mediante un formulario, y eliminar libros existentes. La interfaz de usuario está diseñada para ser intuitiva y amigable, facilitando la exploración de libros y la gestión de la colección personal.

Funcionamiento
Simulación de API con JSON Server:

Utiliza JSON Server para simular una API REST que gestiona datos de libros.
El archivo db.json contiene los datos de libros, incluyendo detalles como título, autor, precio y una URL de imagen.
Listado de Libros:

Al cargar la página, se realiza una solicitud GET a la API simulada (JSON Server) que devuelve una lista de libros con detalles como título, autor, precio y una URL de imagen.
Estos libros se muestran dinámicamente en la sección "Mis Libros" de la página principal.
Agregar Libros:

Un formulario permite a los usuarios ingresar detalles de un nuevo libro, incluyendo título, autor, precio y URL de imagen.
Al enviar el formulario, se envía una solicitud POST a la API simulada (JSON Server) para agregar el nuevo libro.
El libro agregado se muestra automáticamente en la lista de libros sin necesidad de recargar la página.
Eliminar Libros:

Cada libro en la lista tiene un botón de eliminar asociado.
Al hacer clic en este botón, se envía una solicitud DELETE a la API simulada (JSON Server) para eliminar el libro correspondiente.
El libro desaparece de la lista de libros sin necesidad de recargar la página, proporcionando una experiencia fluida al usuario.
Tecnologías Utilizadas
HTML y CSS: Para la estructura y el diseño visual de la página web.
JavaScript (ES6+): Para la lógica de la aplicación, manipulación del DOM, y manejo de eventos.
Fetch API: Para realizar solicitudes HTTP (GET, POST, DELETE) a la API simulada (JSON Server) y manejar las respuestas en formato JSON.
JSON Server: Utilizado para simular una API REST a partir del archivo db.json, permitiendo el almacenamiento y manipulación de datos de libros como si estuviera interactuando con una API real.
Responsive Design: Utilizando media queries en CSS para asegurar una buena experiencia de usuario en diferentes dispositivos y tamaños de pantalla.
Estructura del Proyecto
HTML: Define la estructura de la página web, incluyendo secciones para visualizar libros y un formulario para agregar nuevos libros.
CSS: Establece estilos visuales, incluyendo colores, fuentes y disposición de elementos.
JavaScript (main.js): Implementa la interactividad de la página, gestionando eventos del usuario y comunicándose con la API simulada (JSON Server) mediante las funciones exportadas desde productos.js.
JSON Server (db.json): Contiene los datos simulados de libros y gestiona las solicitudes HTTP GET, POST y DELETE como si fuera una API REST real.
Este proyecto proporciona una plataforma básica pero funcional para gestionar una colección de libros de manera práctica y eficiente en un entorno web moderno, utilizando JSON Server para simular el backend de una aplicación de gestión de libros.
