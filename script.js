var fetch = function (bookNumber) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + bookNumber,
      success: function(data) {
        var jsonObj = JSON.stringify(data);
        var obj = JSON.parse(jsonObj);
        renderBook(obj);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };
  var renderBook = function (book) {
      for (var i=0; i<book.items.length; i++) {
        var source = $('#book-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(book.items[i].volumeInfo);
        $('.book').append(newHTML);
      }
  }
  $('.add-ISBN').on('click', function () {
      var $ISBN = $('#book-number').val();
      fetch($ISBN);
  });