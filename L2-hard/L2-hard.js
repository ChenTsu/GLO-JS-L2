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

