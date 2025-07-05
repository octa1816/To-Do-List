import './style.css';
import createProject from './tareas.js';
import setupAddProject from './addProject.js';

const inboxProject = createProject("Inbox");
const todayProject = createProject("Today");
const weekProject = createProject("This Week");
const proyectosPersonalizados = [];
let proyectoActual = inboxProject;
let tareaActual = null;

const content = document.getElementById('content');
const nav = document.createElement("nav");
nav.classList.add("header");

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");
const icon = document.createElement("i");
icon.classList.add('fas', 'fa-check-double');
const title = document.createElement("h1");
title.textContent = "Todo List";

logoContainer.appendChild(icon);
logoContainer.appendChild(title);
nav.appendChild(logoContainer);
content.appendChild(nav);

const maincontainer = document.createElement("div");
maincontainer.classList.add("mainfather");
const sidebar = document.createElement("aside");
sidebar.classList.add("side-bar");
const main = document.createElement("div");
main.classList.add("main-son");

maincontainer.appendChild(sidebar);
maincontainer.appendChild(main);
content.appendChild(maincontainer);

const staticontainer = document.createElement("div");
staticontainer.classList.add("static-container");

const inbox = document.createElement("div");
inbox.classList.add("inbox-cont");
inbox.textContent = "📥 Inbox";

const today = document.createElement("div");
today.classList.add("today-content");
today.textContent = "📅 Today";

const week = document.createElement("div");
week.classList.add("week-content");
week.textContent = "📆 This week";

staticontainer.appendChild(inbox);
staticontainer.appendChild(today);
staticontainer.appendChild(week);

const projectSection = document.createElement("div");
projectSection.classList.add("sidebar-projects");

const projectTitle = document.createElement("p");
projectTitle.textContent = "Projects";
projectTitle.style.fontWeight = "bold";

const projectList = document.createElement("div");
projectList.classList.add("project-list");

projectSection.appendChild(projectTitle);
projectSection.appendChild(projectList);
sidebar.appendChild(staticontainer);
sidebar.appendChild(projectSection);

const footer = document.createElement("footer");
footer.classList.add("footer");

const footerText = document.createElement("p");
footerText.innerHTML = `Copyright © 2025 Imanolsuarez 
  <a href="https://github.com/imanolsuarez" target="_blank">
    <i class="fab fa-github"></i>
  </a>`;
footer.appendChild(footerText);
content.appendChild(footer);

const form = document.createElement("form");
form.classList.add("form-tarea");

const inputTarea = document.createElement("input");
inputTarea.type = "text";
inputTarea.placeholder = "Nueva tarea";
inputTarea.required = true;

const botonAgregar = document.createElement("button");
botonAgregar.type = "submit";
botonAgregar.textContent = "Agregar";

form.appendChild(inputTarea);
form.appendChild(botonAgregar);
main.appendChild(form);

const divTareas = document.createElement("div");
divTareas.classList.add("divtareas");
main.appendChild(divTareas);

const modal = document.createElement("div");
modal.classList.add("modal");
modal.style.display = "none";

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

const inputEdit = document.createElement("input");
inputEdit.type = "text";

const completarBtn = document.createElement("button");
completarBtn.textContent = "✅ Completada";

const moverAtoday = document.createElement("button");
moverAtoday.textContent = "📅 Mover a Today";

const moverWeekBtn = document.createElement("button");
moverWeekBtn.textContent = "📆 Mover a Week";

const eliminarBtn = document.createElement("button");
eliminarBtn.textContent = "🗑️ Eliminar";

const cerrarBtn = document.createElement("button");
cerrarBtn.textContent = "Cerrar";
cerrarBtn.classList.add("btn-cerrar");
eliminarBtn.classList.add("btn-eliminar");


modalContent.appendChild(inputEdit);
modalContent.appendChild(completarBtn);
modalContent.appendChild(moverAtoday);
modalContent.appendChild(moverWeekBtn);
modalContent.appendChild(eliminarBtn);
modalContent.appendChild(cerrarBtn);
modal.appendChild(modalContent);
document.body.appendChild(modal);

cerrarBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titulo = inputTarea.value;
  const nuevaTarea = {
    title: titulo,
    completed: false,
  };
  if (proyectoActual) {
    proyectoActual.addTarea(nuevaTarea);
    inputTarea.value = '';
    mostrarTareas(proyectoActual);
  }
});

inbox.addEventListener('click', () => {
  proyectoActual = inboxProject;
  mostrarTareas(inboxProject);
});

today.addEventListener('click', () => {
  proyectoActual = todayProject;
  mostrarTareas(todayProject);
});

week.addEventListener('click', () => {
  proyectoActual = weekProject;
  mostrarTareas(weekProject);
});

function mostrarTareas(project) {
  proyectoActual = project;
  divTareas.innerHTML = '';
  main.querySelector("h2")?.remove();
  const titulo = document.createElement("h2");
  titulo.textContent = project.name;
  main.insertBefore(titulo, form);
  const tareas = project.getTareas();
  tareas.forEach((tarea, index) => {
    const tareaCard = document.createElement("div");
    tareaCard.classList.add("tarea-card");
    const titulo = document.createElement("p");
    titulo.textContent = tarea.title;
    if (tarea.completed) {
      titulo.style.textDecoration = "line-through";
    }
    tareaCard.appendChild(titulo);
    divTareas.appendChild(tareaCard);
    tareaCard.addEventListener('click', () => {
      tareaActual = tarea;
      inputEdit.value = tarea.title;
      modal.style.display = "block";
      completarBtn.onclick = () => {
        tarea.completed = !tarea.completed;
        modal.style.display = "none";
        mostrarTareas(project);
      };
      inputEdit.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          tarea.title = inputEdit.value;
          modal.style.display = "none";
          mostrarTareas(project);
        }
      });
      moverAtoday.onclick = () => {
        todayProject.addTarea(tarea);
        project.getTareas().splice(index, 1);
        modal.style.display = "none";
        mostrarTareas(project);
      };
      moverWeekBtn.onclick = () => {
        weekProject.addTarea(tarea);
        project.getTareas().splice(index, 1);
        modal.style.display = "none";
        mostrarTareas(project);
      };
      eliminarBtn.onclick = () => {
        project.getTareas().splice(index, 1);
        modal.style.display = "none";
        mostrarTareas(project);
      };
    });
  });
}

setupAddProject(projectList, main, mostrarTareas, (nuevoProyecto) => {
  proyectosPersonalizados.push(nuevoProyecto);
  proyectoActual = nuevoProyecto;
  mostrarTareas(proyectoActual);
});
