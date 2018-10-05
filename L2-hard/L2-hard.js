'use strict';

let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

let content = '';

for (let i=0; i<7; i++){
  let tmp = week[i];
  if (i+1 === new Date().getDay()){
    tmp = '<em>' + tmp + '</em>';
  }
  if ( i === 5 || i === 6 ){
    tmp = '<strong>' + tmp + '</strong>';
  }
  
  content += tmp + '<br>';
}

document.write(content);


let arr = ['234765', '782367889', '542327', '3567578', '123434', '75452354', '354518765'];

for (let i=0; i<arr.length; i++){
  if (arr[i][0] === '3' || arr[i][0] === '7'){
    console.log(arr[i]);
  }
}
