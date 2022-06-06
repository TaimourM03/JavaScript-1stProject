function hizoClick() {
  var nombre = document.getElementById("numero").value;
  /* obtenemos el valor que introduzca el usuario */
  var nombre_string = nombre.toString()
  /* convertimos el valor a string */
  var nombre_array = Array.from(nombre_string);
  /* añadimos el valor stringeado a un array */
  var num = nombre_array.reverse()
  /* invertimos el array */
  var num_al_reves = num.join("")
  /* pasamos el array a string, sin separador */
  alert(num_al_reves);
}
