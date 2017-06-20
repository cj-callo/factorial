
var factorial = function(number) {
  var myNum = 1
  for (var i = number; i > 1; i--) {
      myNum = myNum * i;
      console.log(myNum);
  }
return myNum;
}





$(document).ready(function () {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = factorial(number)




    $(".answer").text(result);
    $("#result").show();
  });
});
