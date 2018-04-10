// business logic
  var userInput = 0;
  var initialArray=[];


// user interface logic
  $(document).ready(function() {
    $("#formOne").submit(function(event) {
      userInput = parseInt($("#userInput").val());
        for(var i=0; i<=userInput; i++){
          var stringNumber=i.toString();
          var one=stringNumber.indexOf("1");
          var zero=stringNumber.indexOf("0");
          if (i===0) {
            initialArray.push("Beep!");
          }
          else if (i%3===0) {
            initialArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
          }
          else if (one!=-1) {
            initialArray.push("Boop!");
          }
          else if (zero!=-1) {
            initialArray.push("Beep!");
          }
          else {
            initialArray.push(i);
          }
        }
        console.log(initialArray);
        event.preventDefault();
      $("#result").text(initialArray);
      $("#result").show();
    });
  });
