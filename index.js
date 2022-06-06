var navactual=0;

/* Funció que fa el canvi del nav */
function canviNav(nav) {
  //  alert("Funciona?"); // console.log("")
  // VERSION 1
  // 'Eliminem' els row previs
/*document.getElementsByClassName('row')[0].style.display='none';
document.getElementsByClassName('row')[1].style.display='none';
document.getElementsByClassName('row')[2].style.display='none';
document.getElementsByClassName('row')[3].style.display='none';
document.getElementsByClassName('row')[4].style.display='none';
document.getElementsByClassName('row')[5].style.display='none';

  //'Mostrem' el row seleccionat
document.getElementsByClassName('row')[nav].style.display='flex';


/*VERSION 2 **/
/*var array= document.getElementsByClassName('row');
for (var i = 0; i < array.length; i++){
    array[i].style.display='none';
}
//'Mostrem' el row seleccionat
document.getElementsByClassName('row')[nav].style.display='flex';

/*VERSION 3 **/
/*var array= document.getElementsByClassName('row');
var i = 0;
while (i<array.length) {
  array[i].style.display='none';
  i++;
}
// 'Mostrem' el row seleccionat
document.getElementsByClassName('row')[nav].style.display='flex';
*/

//'Mostrem' el row seleccionat
//document.getElementsByClassName('row')[nav].style.display='flex';

//VERSION 4
if(nav != window.navactual){
  // 'Eliminem' els row seleccionat
document.getElementsByClassName('row')[window.navactual].style.display='none';
// 'Mostrem' els row previs
document.getElementsByClassName('row')[nav].style.display='flex';
window.navactual = nav ;
}
}
