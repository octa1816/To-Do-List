# To-do-list
# ✅ Todo List App

Una aplicación web de lista de tareas (To-Do List) construida con **JavaScript Vanilla**, utilizando **modularización ES6**, **WebPack**, y una interfaz intuitiva y moderna. Permite crear tareas, marcarlas como completadas, moverlas entre secciones, y organizarlas en proyectos personalizados.

---

## ✨ Características

- 📥 Bandeja de entrada (`Inbox`)
- 📅 Sección para tareas del día (`Today`)
- 📆 Sección para la semana (`This Week`)
- 🗂️ Creación ilimitada de proyectos personalizados
- ✅ Marcar tareas como completadas
- 🔁 Mover tareas entre secciones o proyectos
- 🗑️ Eliminar tareas
- 📝 Editar título de tareas con doble clic o modal
- 💡 Interfaz responsive y con diseño moderno

---

## 📁 Estructura del proyecto

```bash
src/
├── index.js               # Entry point principal
├── layout.js              # Construcción del DOM base (nav, main, footer)
├── tareas.js              # Lógica de proyectos y tareas
├── addProject.js          # Módulo para agregar proyectos personalizados
├── formularioTarea.js     # Formulario de creación de tareas
├── mostrarTareas.js       # Lógica para renderizar tareas
├── modal.js               # Modal para editar/mover/eliminar tareas
├── eventos.js             # Event listeners globales
├── style.css              # Estilos generales
└── index.html             # Archivo HTML base

🚀 Cómo usar

1. Clonar el repositorio

-git clone https://github.com/tu-usuario/todo-list.git
-cd todo-list

2. Instalar dependencias
-npm install

3. Levantar servidor de desarrollo
-npm run start


🛠️ Tecnologías utilizadas
-JavaScript ES6+

-Webpack

-HTML5 + CSS3 (Flexbox, diseño responsive)

-FontAwesome (iconos)

-Modularización por archivos

🎯 Próximas mejoras 
 -Guardado de datos con localStorage
 -Soporte para fechas y recordatorios
 -Filtro por tareas completadas/incompletas
- Dark Mode

👨‍💻 Autor
Imanolsuarez
📌 GitHub: @imanolsuarez

