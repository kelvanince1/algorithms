var xhr = new XMLHttpRequest();
xhr.open('POST', 'ENDPOINT');
xhr.onreadystatechange = function (event) {
  console.log(event.target.response);
}

xhr.setRequestHeader('Content-Type', 'application/json');
//xhr.send(JSON.stringify({city: "Tokyo", country: "Japan", attractions: [{ "S": "Tokyo Skytree" }]}));