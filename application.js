
$(document).ready(function(){
  var method = "";
  var value_a = "";
  var value_b = "";
  var cal = 0;
  var check = 0;

  var showFormula = function(){
    var current = $("#Result").text();
    var input = $(this).text();
    if(current === "0" && $(this).hasClass("number")){
      $("#Result").text(input);
    }else if(check === 1){
      $("#Result").text(input);
    }else{
      $("#Result").text(current + input);
    };  
    check = 0;
  };

  var show_result = function(){
    var formula = $("#Result").text();
    formula = formula.split(formula.match(/\D/)[0]);
    value_a = formula[0];
    value_b = formula[1];
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
        $('#Result').text(output);
    };
    value_a = Number($('#Result').text());
  };

  //input numbers to the box
  $(".number, .period").on("click", function () {
    showFormula.apply(this);
  });

  //calculation
  $("#check").on("click", function(){
    show_result();
    method ="";
    cal = 0;
    check ++;
  });

  //method
  $('.cal').on("click", function(){
    cal++;
    if(cal === 2){
      show_result();
      cal--;
    };
    // show_result();
    method = $(this).text();
    showFormula.apply(this);
  });


    //clear
    $("#clear").on('click',function(){
        $('#Result').text("0");
        value_a = "";
        method = "";
    });  

});