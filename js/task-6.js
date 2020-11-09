let input = '';
let total = 0;
let message;

// ========== do while ================

// do {
//      input = prompt('Введите число', '');
//     if (input === null) {
//         message = `Сумма равна ${total}`;        
//         break;
//     } else if (Number.isNaN(parseInt(input))) {
//         alert('Вы ввели не число, попробуйте еще раз');
//         input = 0;
//     } else {
//         total += parseInt(input);
//          message = `Сумма равна ${total}`;        
//     }
// } while (input !== null);

// =============== while =================

// while (2 + 2 == 4) {
//      input = prompt('Введите число', '');
//     if (input === null) {
//         message = `Сумма равна ${total}`;        
//         break;
//     } else if (Number.isNaN(parseInt(input))) {
//         alert('Вы ввели не число, попробуйте еще раз');
//         input = 0;
//     } else {
//         total += parseInt(input);
//          message = `Сумма равна ${total}`;
        
//     }
// } 

// =============== for =====================
for (let i = 0; i < 10; i++) {
     input = prompt('Введите число', '');
    if (input === null) {
        message = `Сумма равна ${total}`;
        i = 0;
        break;
    } else if (Number.isNaN(parseInt(input))) {
        alert('Вы ввели не число, попробуйте еще раз');
        input = 0;
        i = 0;
    } else {
        total += parseInt(input);
        i = 0;
         message = `Сумма равна ${total}`;
        
    }
} 

console.log(message);
