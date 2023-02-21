var header=document.querySelector('#main-header');
header.getElementsByClassName.borderBottom='solid 4px #000';

//var input=document.querySelector('input');
//input.value='hello world'

var item=document.getElementsByClassName('list-group-item-active');
console.log(item)
item[0].textContent="hello World!";
item[0].style.fontWeight='bold'
item[0].style.backgroundColor='red'

var item=document.getElementsByTagName('li');
console.log(item)
item[4].textContent="practise"