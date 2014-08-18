
$(document).ready(function(){
    var method = "";
    var value_a = "";
    var value_b = "";
    var first = 0;

    //input numbers to the box
    $(".number").on("click", function () {
        if(method != ""){
            $("#Result").text("0");
        };    
        var current = $("#Result").text();
        var num = $(this).val();
        if(current === "0" && num != "."){
            $("#Result").text(num);
        }else{
            $("#Result").text(current+num);
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