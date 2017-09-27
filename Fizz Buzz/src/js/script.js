var i = 0;
var ary = 10;
i++;
console.log(i + '.' + ary);
var saa = "10";
i++;
console.log(i + '.' + (ary = saa));
i++;
console.log(i + '.' + ary);
i++;
console.log(i + '.' + (ary == saa));
i++;
console.log(i + '.' + (ary === saa));



function myFunction(x) {
  x = (typeof x === 'undefined' ? 5 : x);
  var ary = 9;
  console.log('interiorul functiei');
  console.log(ary);
  console.log(x);

}
myFunction();
console.log('exteriorul functiei');
console.log(ary);
console.log('--------------------------------------------------1');
var arr = [1, 3, 5, 7, 11, 2];
console.log(arr);
var Jon = {
  'key': arr,
  'miau': 2,
  key2: 5,
};
console.log(Jon);
console.log(Jon.key[2]);
console.log('--------------------------------------------------2');
var JonComplex = {
  'key': {
    something: {
      else: {
        what: [78, 23, {
          'ce': Jon
        }]
      }
    }
  },
  'miau': 5,
  key2: 5,
};

console.log(JonComplex.key.something.else.what[2].ce.miau);
console.log('--------------------------------------------------3');
var JanX = {
  'key': arr,
  'miau': function(y) {
    return [1, 2, 3, y];
  },
  key2: 5,
};
console.log(JanX);

console.log(JanX.miau(4));
console.log('--------------------------------------------------4');
console.log(Math);
console.log('--------------------------------------------------5');

var functie = {
  a: function() {
    return 1;
  },
  b: function(y) {
    return y;
  },
  c: function() {
    console.log(this.a());
    console.log(this.b(5));

  },
};
functie.c();
console.log('--------------------------------------------------6');


var $ = require ("jquery");

$("document").ready(function(){


//json care intoarce  indexul si valoarea din elementul de lista pe care faci click
var arr = []
$(".myList li a").click(function(){
  $(".myList li a").removeClass("liStyle");
$(this).addClass("liStyle");
console.log($(this));

var ar = $(this).html();
arr.push(ar);
var inx = $(this).parent().index();
console.log(inx);

var jee = {
'index': inx,
'value': ar,

};
console.log(jee);
});

console.log('--------------------------------------------------7');



$('.button').click(function(){
var valre = $(".textbox").val();
console.log(valre);
if ((valre % 3 == 0) && (valre % 5 == 0)) {
  $('.rezult').html("FizzBuzz")
}
else if (valre % 5 == 0) {
  $('.rezult').html("Buzz")
}
else if (valre % 3 == 0) {
  $('.rezult').html("Fizz")
}
else {
  $('.rezult').html("Introduce a multiple of 3 or 5")

}

});











});
