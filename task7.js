//parentElement
var itemList=document.querySelector('#items');
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//lastelementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello1'

//createChild
var newLi=document.createElement('li');
console.log(newLi);
newLi.className='hii';
newLi.id='hii';
newLi.setAttribute('title','hii',newLi);
var newLiText=document.createTextNode('hii world!');
newLi.appendChild(newLiText);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='welcome';

//firstChild
console.log(itemList.firstChild);

//nextSibling
console.log(itemList.nextSibling);
//nextSiblingElement
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green'

//createElement
var newDiv=document.createElement('div');
console.log(newDiv);
newDiv.className='hii';
newDiv.id='hii';
//setAttributes
newDiv.setAttribute('title','hii',newDiv);
//createtextNode
var newDivText=document.createTextNode('hii world!');
//appendChild
newDiv.appendChild(newDivText);
