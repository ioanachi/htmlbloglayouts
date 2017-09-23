var $ = require("jquery");


$(document).ready(function() {

  var menu = $(".menu");
  var position = menu.offset();
  var menuTop = position.top;


  $(document).scroll(function() {
    var doc = $(document).scrollTop();
    if (doc >= 100) {
      menu.addClass("atTop");
    } else {
      menu.removeClass("atTop");
    }
  })
  $(".menu a").click(function() {
    $(".menu a").removeClass("active");
    $(this).addClass("active");
  });

  /*
  -------
  // click pe liste
  -------
  */

  //modificat calendarul cand se da click de o data

  //
  $(".table tr th").click(function() {
    $(".table tr th").removeClass("cell")
    $(this).addClass("cell");
  });


  // modificat titlul cand se da click

  $(".mouse h3").click(function() {
    $(this).html("You clicked this title. Why did you do that?");
  });


  //modificat tabelul cu submenu sa arate la al 2 lea click acelasi valoare
  // ia copii din lista adica li
  var copii = $(".lista").children();
  // creaza un array gol
  var originale = [];
  // baga in array valorile initiale din lista cu push
  $.each(copii, function(index, element) {
    var a_uri = $(element).children();
    var itemHTML = a_uri.html();
    originale.push(itemHTML);
  });


  // modifica textul la primul click
  var slide = "This was clicked! Please click again";

  // verif daca textul e modificat si daca e inl schimba in original
  $(".lista li").click(function() {
    var index = $(this).index();
    var aHref = $(this).children();
    console.log(aHref);
    if (aHref.html() == slide) {
      aHref.html(originale[index]);
    } else {
      aHref.html(slide);
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

  var cloud = ["small", "tiny", "large", "huge", "medium"];
  var maxim = cloud.length - 1;

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


  function nrRandom(min, max) {
    var numar = Math.round(getRandomArbitrary(min, max));
    return numar;
  }
  //dinamic add classes
  var whateverA = $('.whatever li a');
  $.each(whateverA, function(key, value) {
    var varO = cloud[nrRandom(0, cloud.length - 1)];
    $(value).addClass(varO);
  });


  //function that delets the paragraph when the paragraph is clicked
  $("p").click(function() {
    $(this).remove()
  });
  //function that delets one of the paragraphs when the button is clicked



  var lis = $(".lista li");
  console.log(lis);

  var i = 0;
  var y = 0;

  $(".button").click(function() {
    lis[i].remove();
    i++;
  console.log(originale);
  });

  $(".buttonTwo").click(function() {
    console.log(originale[y]);
    $('.lista').append("<li><a href=\"#\">" + originale[y] + "</a></li>");
    y++;
  });

var text = "Ok";
$(".buttonThree").click(function(){
$(".special").html(text);


});

});
