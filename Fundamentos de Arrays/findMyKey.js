/*Dado un array de strings tu reto es retornar la posición dentro del array 
en donde existe la palabra clave "myKey" y si no existe deberás retornar false, 
para solucionarlo vas a encontrar una función llamada findMyKey que recibe un parámetro de entrada:

array: Un array de strigs.
Dentro del cuerpo de la función findMyKey debes escribir tu solución.

Ejemplo 1:

Input: ["diamonds", "myKey", "spades", "AS"]
Output: 1

Ejemplo 2:

Input: ["diamonds", "hearts", "spades"]
Output: false
solution();

Ejemplo 3:

Input: ["myKey", "hearts", "spades"]
Output: 0 */

function findMyKey(array) {
    let index = array.findIndex(item => item === "myKey")
    return index !== -1 ? index : false;
  }
console.log(findMyKey(["myKey", "hearts", "spades"]))