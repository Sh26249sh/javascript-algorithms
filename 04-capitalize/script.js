/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    /*mas=str.split(' ')
        for(i=0;i<=mas.length-1;i++){
            word=mas[i].split('');
             
            word[0]=word[0].toUpperCase();
            
            mas[i]=word.join('');
             
        }
         return result=mas.join(' ')*/
      
 return str.split(' ').map((word) => {
    word = word.trim();
    if (word !== '') {
        return word[0].toUpperCase() + word.slice(1);
    }
}).join(' ');
    }


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
