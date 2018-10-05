'use strict';

let money, time;

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10) );

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};

let exps1, exps2, z = 0;
// for (let i=0; i<2; i++){
//   exps1 = prompt('Введите обязательную статью расходов в этом месяце', '');
//   exps2 = parseInt( prompt('Во сколько обойдется?', '') );
//
//   if ( (exps1 !== null && exps1 !== undefined && exps1 !== '') && !isNaN(exps2) ){
//     appData.expenses[exps1] = exps2;
//   } else {
//     i--;
//   }
// }

// while (z < 2){
//   z++;
//
//   exps1 = prompt('Введите обязательную статью расходов в этом месяце', '');
//   exps2 = parseInt( prompt('Во сколько обойдется?', '') );
//
//   if ( (exps1 !== null && exps1 !== undefined && exps1 !== '') && !isNaN(exps2) ){
//     appData.expenses[exps1] = exps2;
//   } else {
//     z--;
//   }
// }

do {  z++;
  
  exps1 = prompt('Введите обязательную статью расходов в этом месяце', '');
  exps2 = parseInt( prompt('Во сколько обойдется?', '') );

  if ( (exps1 !== null && exps1 !== undefined && exps1 !== '') && !isNaN(exps2) ){
    appData.expenses[exps1] = exps2;
  } else {
    z--;
  }
} while (z < 2);
  
  console.log(appData.expenses);

// alert(`Вам понадобится ${appData.expenses[exps1]/30} рублей в день для ${exps1}\n
//  и ${appData.expenses[exps2]/30} рублей в день для ${exps2}` );