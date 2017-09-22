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



  //
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
  $(".lista li a").click(function() {
    var index = $(this).index();
    if ($(this).html() == slide) {
      $(this).html(originale[index]);
    } else {
      $(this).html(slide);
    }
  });
  // functie sageata go to top
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

  // $(".lista li a").click(function() {
  //   $(this).addClass("rosu");
  // $(this).animate({
  //   paddingLeft:'50px',
  // }, 200);

  // added a random class to the tag cloud

  var cloud = ["small", "tiny", "large", "huge", "medium"]
  var maxim = cloud.length - 1;
  console.log(maxim);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
$(".whatever li a").click(function() {
    $(this).removeClass();

    var numar = Math.round(getRandomArbitrary(0, maxim));
    var valoare = cloud[numar];
    console.log(valoare);
    $(this).addClass(valoare);


  });


function nrRandom(min,max){
  var numar = Math.round(getRandomArbitrary(min, max));
  return numar;
}
  //dinamic add classes
  var whateverA = $('.whatever li a');
  console.log(whateverA[0]);
  $.each(whateverA, function(key,value) {
    var varO = cloud[nrRandom(0,cloud.length-1)];
    $(value).addClass(varO);
    console.log(value);
  });


  //function that delets the paragraph when the paragraph is clicked
$("p").click(function(){
  $(this).remove()





})




});
