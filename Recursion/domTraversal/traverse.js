var header = document.querySelector('h1');
var headerParent = header.parentElement;

console.log(header);
console.log(headerParent);

var content = document.getElementById('letters');
var middle = document.getElementById('aaa');

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

var middlePrevNode = middle.previousSibling;
var middleNextNode = middle.nextSibling;
var middlePrevEl = middle.previousElementSibling;
var middleNextEl = middle.nextElementSibling;

console.log('PREV SIB', middlePrevNode);
console.log('NEXT SIB', middleNextNode);
console.log('PREV ELE', middlePrevEl);
console.log('NEXT ELE', middleNextEl);

