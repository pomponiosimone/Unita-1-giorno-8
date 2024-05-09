/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("----------------------primo esercizio--------------------------")
function area(l1,l2) 
{
return l1 * l2
}
console.log(area(10,20))
/* ESERCIZIO 2

 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----------------------secondo esercizio--------------------------")

function crazySum (numero1,numero2) {
    if (numero1 === numero2)
    return (numero1+numero2 )* 3
else
 return (numero1+numero2)

 
}
console.log("Esempio con due parametri uguali ossia 10 e 10:" , crazySum(10,10,))
console.log("Esempio con due parametri differenti ossia 20 e 10:", crazySum (20,10))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----------------------terzo esercizio--------------------------")

let numeroCostante = 19
function crazyDiff (numero1,numeroCostante)
{if (numero1 > 19)
    return (numero1 - numeroCostante ) *3
    else 
    return(numero1 - numeroCostante)
}
console.log("esempio con numero minore di 19",crazyDiff (10,numeroCostante))
console.log("esempio ccon numero maggiore di 19", crazyDiff(30,numeroCostante))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----------------------quarto esercizio--------------------------")

function boundary(n)
{ 
    if (n >= 20 && n <= 100)
return "true"
    else if (n === 400)
        return "true"
    else
    return "false"
}

console.log("il numero è compreso?",boundary(20))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----------------------quinto esercizio--------------------------")

function epify(stringa)
{if (stringa != "EPICODE")
   return stringa.concat(" EPICODE")

return stringa
}
console.log("Esempio con parola diversa da epicode: ",epify('LAZIO'))
console.log("Esempio con parola EPICODE:",epify('EPICODE'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----------------------sesto esercizio--------------------------")

function check3and7(n)
{if (n<=0)
return "false"
if (n % 3 === 0|| n % 7 === 0)
return ("multiplo di 3 o di 7")
else return ("non sono multipli di 3 o di 7")}

console.log(check3and7(7))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----------------------settimo esercizio--------------------------")

function reverseString(stringaInver)
{ let nuovoArray = stringaInver.split ("")
let arrayInverso = nuovoArray.reverse()
    let joinArray = arrayInverso.join("")
    return joinArray
}

console.log(reverseString("Simone"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----------------------ottavo esercizio--------------------------")

function upperFirst(DiverseParole)
{let primaParola = DiverseParole.charAt(0) 
     return primaParola.toUpperCase() + DiverseParole.slice(1) // con slice(1) ho elimanto la prima lettera.
}
console.log(upperFirst('professore di nome Matteo'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("----------------------nono esercizio--------------------------")

function cutString(stringa)
{   primoCarattere = stringa.slice(1) && stringa.slice(-1)
return NuovaStringa = primoCarattere 
}
console.log(cutString("CIAO"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("----------------------decimo esercizio--------------------------")

function giveMeRandom(n)
{
    let NuovoArray= [],
    {for (let i = 0, i < n , i++) {

    
 let NuovoArray(Math.floor(Math.random() *11) )
NuovoArray.push(NuovoArray)
    return NuovoArray
}}
console.log(giveMeRandom(1))