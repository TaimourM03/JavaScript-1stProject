function canviestil(){ /* Creamos  una  funcion del con el nombre del boton */
  /* En cada parafro cambiaremos a un estilo correspondiente */
  document.getElementById('p1').style.border='8px solid';
  document.getElementById('p2').style.textTransform='uppercase'; 
  document.getElementById('p3').style.color='blue';
  document.getElementById('p4').style.font='40px monospace';
  document.getElementById('p5').style.letterSpacing='20px'
  document.getElementById('p6').style.fontFamily='futura';
  document.getElementById('p7').style.backgroundColor='cyan';
/* Primero creamos una variable del boton, luego con if cambiaremos la condicion, dependiendo si hemos dado clic, para que vuelva a su estilo incial.
si se cumple la condicion (que hayamos dado clic al boton) el boton cambiara de nombre, y los parafos vovleran a su estilo inicial. */
  var ce=document.getElementById('ce');
  if (ce.innerText == 'Estil inicial'){
                ce.innerText = "Canvi d'estil";
              document.getElementById('p1').style.border='';
                document.getElementById('p2').style.textTransform='';
                document.getElementById('p3').style.color='';
                document.getElementById('p4').style.font='';
                document.getElementById('p5').style.letterSpacing=''
                document.getElementById('p6').style.fontFamily='';
                document.getElementById('p7').style.backgroundColor='';
              }
  else { ce.innerText = 'Estil inicial';
  }

}
