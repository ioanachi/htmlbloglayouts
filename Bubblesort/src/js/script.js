var $ = require("jquery");

$("document").ready(function() {

var arr2 = [1,34,3,2,87,7]
  function sortX(arr2) {
    var z = false;
    for (var i = 0; i < (arr2.length - 1); i++) {
      if (arr2[i + 1] < arr2[i]) {
        var x = arr2[i];
        console.log(x);

        console.log("test2");
        arr2[i] = arr2[i + 1];
        arr2[i + 1] = x;
        z = true;
      }
    }
    if (z) {
      return sortX(arr2);
    } else {
      return arr2;
    }
  }
var arrange = sortX(arr2);
console.log(arr2);

  $(".button").click(function() {
    var vAl = $(".valoare").val();
    console.log(vAl);
var Yy= 0;
    Yy = vAl.split(',');
    console.log(Yy);
    console.log("test");

    var Vw = sortX(Yy)
    var final = Vw.toString();
    console.log(final);

$(".show").html(final);

  });
//
//   // console.log(sortX(Yy));
  // var i = 0;
  // console.log(i + 1 == i++);






});
