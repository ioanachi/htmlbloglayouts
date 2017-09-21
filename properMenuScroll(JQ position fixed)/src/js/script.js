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
    } else {
      menu.removeClass("atTop");
    }
    console.log("test");
  })
  $(".menu a").click(function() {
    $(".menu a").removeClass("active");
    $(this).addClass("active");
  });

  $(".table tr th").click(function() {
    $(".table tr th").removeClass("cell")
    $(this).addClass("cell");
  });

  $(".mouse h3").click(function() {
    $(this).html("You clicked this title. Why did you do that?");
  });

  var copii = $(".lista").children();
  // console.log(typeof copii);
  var originale = [];
  $.each(copii, function(index, element) {
    var itemHTML = $(element).children().html();
    originale.push(itemHTML);
  });
  console.log(originale);
  var slide = "This was clicked! Please click again";
  $(".lista li").click(function() {
    var index = $(this).index();
    if ($(this).html() == slide) {
      $(this).html(originale[index]);
    } else {
      $(this).html(slide);
    }
  });
  $(".goToTop").click(function() {
    $("html, body").animate({
      scrollTop: '0px'
    }, 2000);
  });
  // $("th").click(function() {
  //   $(this).animate({
  //     padding: '10px'
  //   }, 2000);
  // });

$(".lista li").click(function(){
  console.log("test");
$(this).stop().animate({
  paddingLeft:'50px',
  backgroundColor:'#4E1402'
}, 200);

})
});
