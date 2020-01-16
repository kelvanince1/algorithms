var divParent = document.getElementById('aaaaa');

var divEl = document.createElement('div');
var docFrag = document.createDocumentFragment();
var p1Text = document.createTextNode('Lorem');
var p1El = document.createElement('p');
var p2Text = document.createTextNode('Ipsum');
var p2El = document.createElement('p');
var p3Text = document.createTextNode('Max');
var p3El = document.createElement('p');

p1El.appendChild(p1Text);
p2El.appendChild(p2Text);
p3El.appendChild(p3Text);

docFrag.appendChild(p1El);
docFrag.appendChild(p2El);
docFrag.appendChild(p3El);

divParent.appendChild(docFrag);

var divParent2 = document.getElementById('aaa');

var firstP = divParent2[0];
var pText = document.createTextNode('Newum');
var pEl = document.createElement('p');
var divEl1 = document.createElement('div');

pEl.appendChild(pText);
divParent2.insertBefore(pEl, firstP);
