const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(e) {
    console.log('Problem:', e);
  })
