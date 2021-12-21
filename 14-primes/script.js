/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    let mas=[]
    for (i=2;i<=num;i++){

         if (i===2 || i===3 || i===5){
            mas.push(i)
        }
        else if (i%2!==0 && i%3!==0 && i%5!==0){
        
          mas.push(i) 
            
        }
    
    }
    return mas
    console.log(mas)
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
console.log(primes(25));