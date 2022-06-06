function mostrarInputEnP(){
  /* Las 4 variables son los valores introducidos en los textboxs */
  var z=document.getElementsByTagName('input')[1].value;
  var x=document.getElementsByTagName('input')[2].value;
  var c=document.getElementsByTagName('input')[3].value;
  var v=document.getElementsByTagName('input')[4].value;
  /* Si el primer valor es mayor al numero que pone abajo (forma de saber si es un numero o es una letra), se entra aqui */
  if (z > -999999999999999999999999999999999999999999999999999){
    var array = [z,x,c,v] /* creamos un array, con los 4 numeros introducidos */
    array.sort(function(a, b){return a - b}); /* esta funcion resta los numeros hasta comprobar cual es el mas pequeño, (encontrada en la pagina w3c) */
    var array2 = array.join(" ") /* Cambiamos el separador, de "," a " " */
    document.getElementById('myPInput').innerHTML=array2; /* El valor del <p>, sera el array ordenado sin comas y con espacios. */
  } /* Si no se a entrado dentro del if, quiere decir que se trata de una letra, y se entra aqui */
  else {
    var array = [z,x,c,v]  /* creamos un array, con las 4 letras introducidas */
    array.sort(); /* Hacemos un sort, (ordenar las palabras o letras alfabeticamente) */
    var array2 = array.join(" ") /* Cambiamos el separador, de "," a " " */
    document.getElementById("myPInput").innerHTML = array2; /* El valor del <p>, sera el array ordenado sin comas y con espacios. */
  }
}
