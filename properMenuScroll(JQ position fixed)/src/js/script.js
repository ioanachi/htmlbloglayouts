var $ = require("jquery");

console.log($(document));

$(document).ready(function() {

  var menu = $(".menu");
  var position = menu.offset();
  var menuTop = position.top;
  console.log(menuTop);


  $(document).scroll(function() {
    var doc = $(document).scrollTop();
    console.log(doc);
    if (doc >= 100) {
      menu.addClass("atTop");

    }
  })









});
