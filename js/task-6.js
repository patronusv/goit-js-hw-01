let input;
let total = 0;
let message;

// do {
//         input = prompt('Введите число', '');
//     total += Number.parseInt(input);
//     console.log(total);
// } while (input != null);


// for (let i = 0, i += 1) {
//     input = prompt('Введите число', '');
//     if (input === null) {
//         message = `Сумма равна ${total}`;
//         break;
//     } else if (typeof input != 'number') {
//         alert('попробуйте еще раз');
//     } else {
//         total += parseInt(input);
//     }

// }

do {
     input = prompt('Введите число', '');
    if (input === null) {
        message = `Сумма равна ${total}`;        
        break;
    } else if (Number.isNaN(parseInt(input))) {
        alert('Вы ввели не число, попробуйте еще раз');
        input = 0;
    } else {
        total += parseInt(input);
         message = `Сумма равна ${total}`;
        
    }
} while (input != null);

console.log(message);
