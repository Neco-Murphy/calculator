// need to fix - (doesnt distinguish minus and deduct)
$(document).ready(function(){
  var cal = 0;
  var check = 0;

  var showFormula = function(){
    var current = $("#Result").text();
    var input = $(this).text();
    if(current === "0" && $(this).hasClass("number")){
      $("#Result").text(input);
    }else if(check === 1 && $(this).hasClass("number")){
      $("#Result").text(input);
    }else{
      $("#Result").text(current + input);
    };  
    check = 0;
  };

  var show_result = function(){
    var formula = $("#Result").text();
    var method = formula.match(/[^0123456789.]/)[0];
    formula = formula.split(method);
    var value_a = Number(formula[0]);
    var value_b = Number(formula[1]);
    var output = 0;
    if(method != ""){
      switch(method){
        case "/": output = value_a / value_b;
          break;
        case "*": output = value_a * value_b;
          break;
        case "-": output = value_a - value_b;
          break;
        case "+": output = value_a + value_b;
          break; 
        };
        $('#Result').text(output.toString().substr(0,10));
    };
  };

  //input numbers to the box
  $(".number, .period").on("click", function () {
    showFormula.apply(this);
  });

  //calculation
  $("#check").on("click", function(){
    show_result();
    check++;
    cal--;
  });

  //method
  $('.cal').on("click", function(){
    cal++;
    if(cal === 2){
      show_result();
      cal--;
    };
    showFormula.apply(this);
  });


    //clear
    $("#clear").on('click',function(){
      $('#Result').text("0");
      cal = 0;
    });  

});