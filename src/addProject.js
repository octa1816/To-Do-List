import createProject from './tareas.js';

const proyectosPersonalizados = [];

export default function setupAddProject(projectList, main, mostrarTareas) {
  const addButton = document.createElement("button");
  addButton.textContent = "+ Add Project";
  addButton.classList.add("anadirprojecto");
  projectList.parentElement.appendChild(addButton);

  let inputVisible = false;
  let input;

  addButton.addEventListener("click", () => {
    if (inputVisible) return;

    input = document.createElement("input");
    input.placeholder = "Nombre del proyecto";
    input.style.marginTop = "10px";
    input.style.padding = "5px";
    input.style.width = "100%";

    projectList.parentElement.insertBefore(input, addButton);
    input.focus();
    inputVisible = true;

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && input.value.trim() !== "") {
        const nombreProyecto = input.value.trim();
        const nuevoProyecto = createProject(nombreProyecto);
        proyectosPersonalizados.push(nuevoProyecto);

        const nuevoElemento = document.createElement("div");
        nuevoElemento.textContent = "📁 " + nombreProyecto;
        nuevoElemento.style.cursor = "pointer";
        nuevoElemento.style.padding = "5px 0";

        projectList.appendChild(nuevoElemento);

        nuevoElemento.addEventListener("click", () => {
          mostrarTareas(nuevoProyecto);
        });

        input.remove();
        inputVisible = false;
      } else if (e.key === "Escape") {
        input.remove();
        inputVisible = false;
      }
    });
  });
}
