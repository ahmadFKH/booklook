var fetch = function (bookNumber) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + bookNumber,
      success: function(data) {
        var jsonObj = JSON.stringify(data);
        var obj = JSON.parse(jsonObj);
        renderBook(obj.items[0].volumeInfo);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };
  var renderBook = function (book) {
    /*var title = book.items[0].volumeInfo.title;
    var image = book.items[0].volumeInfo.imageLinks;
    var description = book.items[0].volumeInfo.description;
    var author = book.items[0].volumeInfo.authors;
    for (var i = 0; i<4; i++) {
        var source = $('#book-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template({item: "bread", price: "15"});
        $('.items').append(newHTML);
    }*/
    var source = $('#book-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(book);
    $('.book').append(newHTML);
  }
  $('.add-ISBN').on('click', function () {
      var $ISBN = $('#book-number').val();
      fetch($ISBN);
  });