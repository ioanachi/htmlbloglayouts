var $ = require("jquery");
$ ("document").ready(function(){

$ ("button").click(function(){
var textul = $ ("input").html();







  // initialize and show QR code
   var qrcode = new QRCode("QRCode", {
       text: 'test',
       width: 300,
       height: 300,
       colorDark: "#000000",
       colorLight: "#ffffff",
       correctLevel: QRCode.CorrectLevel.H
       });
   });

});
