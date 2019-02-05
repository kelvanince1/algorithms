let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let li = document.querySelectorAll("li");

h1.addEventListener("click", function() {
  h1.style.background = getRandomColor();
});

button.addEventListener("click", function() {
  console.log('Clicked')
});

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    this.style.color = getRandomColor();
  })
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
