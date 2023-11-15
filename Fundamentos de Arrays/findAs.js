/*Tu reto es retornar Tienes el AS si dentro de array de strings tienes la palabra 
AS y si no tienes el AS entonces deberás retornar un No, tienes el AS, para solucionarlo 
vas a encontrar una función llamada findAs que recibe un parámetro de entrada:

numbers: Un array de strigs con nombres de cartas de Poker.
Dentro del cuerpo de la función findAs debes escribir tu solución.

Ejemplo 1:

Input: ['diamonds', 'hearts', 'spades', 'AS']
Output: 'Tienes el AS'

Ejemplo 2:

Input: ['diamonds', 'hearts', 'spades']
Output:'No, tienes el AS'
 */
function findAs(deck) {
    return deck.includes('AS') ? 'Tienes el AS':'No, tienes el AS';
  }
console.log(findAs(['diamonds', 'AS', 'spades']))