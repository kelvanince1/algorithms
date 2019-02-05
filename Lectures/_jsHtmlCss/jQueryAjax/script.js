$("button").click(function() {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
  .done(function (response) {
        var trHTML = '';
        $.each(response, function (i, item) {
            trHTML += '<tr><td>' + item.userId + '</td><td>' + item.title + '</td><td>' + item.id + '</td></tr>';
        });
        $('#records_table').append(trHTML);
    })
});
