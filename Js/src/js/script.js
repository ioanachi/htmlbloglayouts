var $ = require("jquery");

$(document).ready(function(){
  var a = 5;
  $('.type1').html(typeof a);
  var a = '5';
  $('.type2').html(typeof a);

var a = true;
$('.type3').html(typeof a);

var array = [1, 2, 3];
$('.type4').html(typeof array);

var Jx = {
  'key':'value'
};
$('.type5').html(typeof Jx);

var d = null;
$('.type6').html(typeof d);

});
