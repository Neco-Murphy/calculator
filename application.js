
$(document).ready(function(){
    // need to change the structure to show the formula
    var method = "";
    var value_a = "";
    var value_b = "";
    var first = 0;

    //input numbers to the box
    $(".number, .cal").on("click", function () {
      var current = $("#Result").text();
      var input = $(this).text();
      if(current === "0" & input === "."){
        $("#Result").text("0" + input);
      }else{
        $("#Result").text(current + input);
      };
    });

    var show_result = function(){
        value_b = Number($("#Result").text());
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
     
    //calculation
    $("#check").on("click", function(){
        show_result();
        method ="";

    });

    //method
    $('.cal').on("click", function(){
        show_result();
        method = $(this).text();
    });


    //clear
    $("#clear").on('click',function(){
        $('#Result').text("0");
        value_a = "";
        method = "";
    });  
});