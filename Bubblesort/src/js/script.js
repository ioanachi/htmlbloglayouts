var $ = require("jquery");

$("document").ready(function() {


  function sortX(arr2) {
    var z = false;
    for (var i = 0; i < (arr2.length - 1); i++) {
      if (arr2[i + 1] < arr2[i]) {
        var x = arr2[i];
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
  $(".button").click(function() {
    var vAl = $(".valoarea").val();
    var Yy = vAl.split(',')

    var Vw = sortX(Yy).toString();
$(".show").html(Vw);

  });

  console.log(sortX(Yy));
  var i = 0;
  console.log(i + 1 == i++);






});
