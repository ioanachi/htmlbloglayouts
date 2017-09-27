var $ = require("jquery");
$("document").ready(function() {

  $(".button").click(function() {
    var combin = $(".textB1").val();

    var cate = $(".textB2").val();

    var rest = combin - cate;

    var nN = 1;
    for (var i = combin; i > 0; i--) {
      nN = i * nN;
    }
    console.log(nN);

    var rR = 1;
    for (var i = cate; i > 0; i--) {
      rR = i * rR;
    }
    console.log(rR);

    var nr = 1;
    for (var i = rest; i > 0; i--) {
      nr = i * nr;
    }
    console.log(nr);

    var reZult = nN / (nr * rR);
    $(".rezult").html(reZult);
    console.log(reZult);
  });
});
