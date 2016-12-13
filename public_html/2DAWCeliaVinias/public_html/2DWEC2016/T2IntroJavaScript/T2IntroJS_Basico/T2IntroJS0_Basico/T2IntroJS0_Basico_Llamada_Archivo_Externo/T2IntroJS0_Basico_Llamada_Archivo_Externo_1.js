
var digitos = parseInt(prompt("Introduce numero de numeros"));
var n, media = 0.0;
n = parseInt(prompt("Introduce un numero"));
var mayor = n;
var menor = n;

media = n;
var valores = " ";

for (var i = 1; i < digitos; i++) {
  n = parseInt(prompt("Introduce un numero"));
  if (n > mayor) {
    mayor = n;
  } else if (n < menor) {
    menor = n;
  }
  media = media + n;
  valores = valores + n + " ";
}

alert("Numero de digitos: "
        + digitos +
        "\nValores" + valores +
        "\nMedia: " + (media / digitos) +
        "\nValor Max: " + mayor +
        "\nValor Min: " + menor);