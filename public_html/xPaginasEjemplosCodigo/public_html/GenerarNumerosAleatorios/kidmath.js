/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function myFunction() {
  var number1;
  var number2;

  number1 = document.getElementById('num1').innerHTML;
  number2 = document.getElementById('num2').innerHTML;

  var sum = parseInt(number1) + parseInt(number2);
  document.getElementById('ans').textContent = "The sum of the numbers : " + sum;

}