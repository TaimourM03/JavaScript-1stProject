
function disco(){ /* Al poner el cursos dentro de la circumferencia, se entra a esta funcion */
  document.getElementById("circumferencia_disco").style.background = "red"; /* Cambiamos el color de fondo de la circumferencia a rojo (el mismo que el de el contorno). */
  document.getElementById("circumferencia_disco_2").style.background = "white"; /* El otro circulo, mas pequeño y en medio de el primero, tendra color blanco. */
}


function circumferencia(){ /* Esta función se activa cuando el cursor este fuera de la circumferencia, y lo que hace es volver al estado normal de las circumeferencias */
  document.getElementById("circumferencia_disco").style.background = ""; /*(eliminar el color de fondo de la primera circumferencia)*/
  document.getElementById("circumferencia_disco_2").style.background = "";/*(eliminar el color de fondo de la segunda circumferencia)*/
}
