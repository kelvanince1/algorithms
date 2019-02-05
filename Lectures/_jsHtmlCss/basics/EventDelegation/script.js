// document.addEventListener('DOMContentLoaded', function() {
//
//   let app = document.getElementById('todo-app');
//   let items = app.getElementsByClassName('item');
//
//   // attach event listener to each item
//   for (let item of items) {
//     item.addEventListener('click', function() {
//       alert('you clicked on item: ' + item.innerHTML);
//     });
//   }
//
// });

// If the list will be very long (100+), use this following function instead

document.addEventListener('DOMContentLoaded', function() {

  let app = document.getElementById('todo-app');

  // attach event listener to whole container
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });

});
