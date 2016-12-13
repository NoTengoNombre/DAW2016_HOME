/** 
 @Created on : 09-dic-2016, 17:14:24
 @Author     : RVS
 @Pag        :
 @version    :
 */

//Captura por teclado
var digitos = parseInt(prompt("• Intro cantidad de numeros a comparar"));

//variable globales
var n, media = 0.0;

//Entrada por teclado de los datos
n = parseInt(prompt("• Introduce un numero : "));

//Inicializa los valores de entrada para establecer un rango
var mayor = n; // 6
var menor = n; // 6
media = n;

//variable global
var valores = " ";

//Vuelve a pedirlos 
for (var i = 1; i < digitos; i++) {
//Vuelve a pedir datos para comparar con los anteriores
  n = parseInt(prompt("Introduce un numero"));
  if (n > mayor) { // 6
    mayor = n; // nuevo valor
  } else if (n < menor) {
    n = menor; // nuevo valor
  }
// n = nuevo valor 
  media = media + n;
  valores = valores + n + " ";
}


alert("Numero de digitos : " + digitos + "\nValores");
alert(valores + "\nMedia: " + (media / digitos));
alert(valores + "\nValor Max : " + mayor);
alert(valores + "\nValor Min : " + menor);



