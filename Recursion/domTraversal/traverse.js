var header = document.querySelector('h1');
var headerParent = header.parentElement;

console.log(header);
console.log(headerParent);

var content = document.getElementById('letters');
var middle = document.getElementsByClassName('aaa');

var contentChildren = content.children;
var contentChildNodes = content.childNodes;
var contentFirstChild = content.firstChild;
var contentLastChild = content.lastChild;
var contentLastChildEl = content.lastElementChild;
var contentFirstChildEl = content.firstElementChild;

console.log('CHILDREN!!', contentChildren);
console.log('CHILD NODES!!', contentChildNodes);
console.log('FIRST CHILD!!', contentFirstChild);
console.log('LAST CHILD!!!', contentLastChild);
console.log('LAST CHILD ELE!!!', contentLastChildEl);
console.log('FIRST CHILD ELE', contentFirstChildEl);

console.log(middle);

var contentPrevNode = content.previousSibling;
var contentNextNode = content.nextSibling;
var contentPrevEl = content.previousElementSibling;
var contentNextEl = content.nextElementSibling;

console.log('PREV SIB', contentPrevNode);
console.log('NEXT SIB', contentNextNode);
console.log('PREV ELE', contentPrevEl);
console.log('NEXT ELE', contentNextEl);

