/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
      const prevNumber1 = result[i - 1];
      const prevNumber2 = result[i - 2];
      result.push(prevNumber1 + prevNumber2);
  }
  return result[n - 1];
}
   /* let mas = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    mas[n-1]=mas[n-3] + mas [n-2]
    console.log(mas[n-1])
    return mas[n-1]*/

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)