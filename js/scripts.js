//scripts to convert user input into phrases if not then give range of numbers.

  var userInput = 0;
  var initialArray=[];



  $(document).ready(function() {
    $("#formOne").submit(function(event) {
      userInput = parseInt($("#userInput").val());



        for(var i=0; i<=userInput; i++){
          var stringNumber=i.toString();
          var oneIndex=stringNumber.indexOf("1");
          var zeroIndex=stringNumber.indexOf("0");


          if (i===0) {
            initialArray.push("Beep!");
          }
          else if (i%3===0) {
            initialArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
          }
          else if (oneIndex!=-1) {
            initialArray.push("Boop!");
          }
          else if (zeroIndex!=-1) {
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
