
/* Calculadora */ /* Nota: donde pone [7], es porque en el index.html, ya habia más tagnames con input, entonces teniamos que poner 7, para que elija el correcto (el de calculadora)*/
function calcula(val){
	if(val == '=') { /*Cuando el usuario pulse =, se entra aqui, y se dara el resultado, a menos que el usuario haya introducido algo que no sea un numero, gracias a la funcion eval().*/
		document.getElementsByTagName('input')[5].value = eval(document.getElementsByTagName('input')[5].value);
	}
	else if(val == 'C'){/* Cuando el usuario pulse el boton C, se entra aqui, y el valor mostrado sera nada, es decir se borrara todo. */
		document.getElementsByTagName('input')[5].value = '';
	}
	else { /* Todo menos el = y la C pasaran aqui, se iran realizando las operaciones a medida que el usuario introduzca numeros. */
	  // i++ -> i= i + 1 -> i+=1
	  document.getElementsByTagName('input')[5].value = document.getElementsByTagName('input')[5].value+val;
	}
}
