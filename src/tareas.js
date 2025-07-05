export default createProject;

function createProject(name) {
    const tareas = [];
    
    function addTarea(tarea) {
      tareas.push(tarea);
    }
  
    function getTareas() {
      return tareas;
    }
  
    return {
      name,
      addTarea,
      getTareas,
    };
  }
  
  
  
 
  