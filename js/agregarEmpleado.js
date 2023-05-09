export function agregarEmpleado(){
    async function agregarOpciones() {
    let miSelector = document.getElementById('empleado');
  
    // Obtener las opciones del JSON con async await
    let response = await fetch('http://localhost:4000/empleados');
    let opciones = await response.json();
  
    // Iterar sobre las opciones y agregarlas al selector
    opciones.forEach(opcion => {
      let optionElement = document.createElement('option');
      optionElement.value = opcion.nombre;
      optionElement.text = opcion.nombre;
  
      miSelector.appendChild(optionElement);
    });
  }
  
  // Llamar a la función para agregar las opciones al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    agregarOpciones();
  });
}