jQuery("document").ready(function($){

$ ("button").click(function(){
var textul = $ ("#text").val();







  // initialize and show QR code
   var qrcode = new QRCode("QRCode", {
       text: textul,
       width: 300,
       height: 300,
       colorDark: "#000000",
       colorLight: "#ffffff",
       correctLevel: QRCode.CorrectLevel.H
       });
   });

});
