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


var x = 5;
$('.type7').html(typeof x);
x = x.toString();
$('.type8').html(typeof x);

var z = '5';
$('.type9').html(typeof z);
z = parseInt(z);
$('type10').html(typeof z);






//exercisess



function reverseString (n){

n = n+"";
return n.split("").reverse().join("");
};
console.log(reverseString("nurse"))



function checkString(strin){


  var low = strin.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  var count = 0;
  if (low ===""){
    alert("Nothing found");
    return false;
  }
if ((low.length)%2 ===0){
count = low.length /2;
}
else{
  if(low.length === 1){
alert("Entry is a polidrome");
return true;
  } else{
    count = (low.length-1)/2;
  }
}
for (var x = 0; x<count; x++){

  if(low[x] != low.slice(-1-x)[0]){
    alert ("Entry is not a palindrome.");
    return false;
  }
}
alert("The entry is a palindrome.");
	return true;

}
checkString('madam')
checkString('nurse')








});
