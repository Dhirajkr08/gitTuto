//examine the document object
//console.dir(document);
//console.log(HeaderTitle.textcontent)
//selector
//console.log(document.getElementById("header-title"));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle)
//headerTitle.textContent='hello world!'
//headerTitle.innerText='goodbye!'

//headerTitle.innerHTML='<h3>hii</h3>';

var header=document.getElementsByClassName('title');
console.log(header)

header[0].style.fontWeight='bold';
header[0].style.color='green'

var item=document.getElementsByTagName('li');
console.log(item)
item[3].style.backgroundColor='green';
item[3].style.fontWeight='bold';
item[0].style.fontWeight='bold';
item[1].style.fontWeight='bold';
item[2].style.fontWeight='bold';




