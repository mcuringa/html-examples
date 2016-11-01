
$( "#convert" ).click(function() 
{
    console.log("converting cups...");
    
    var cupToTbs = 16;
    var cupToTsp = 48;
    var cupToLit = 0.236588;


    // a default value for the result of our conversion;
    var result = 0;
    var unitMsg = "";

    // read a form value with jquery
    var cups = $("#cups").val();
    
    //read the value of the selected item from the dropdown
    var toUnits = $("#convertTo option:selected").val();

    if(toUnits == "tbs")
    {
        result = cups * cupToTbs;
        unitMsg = "tablespoons";
    }
    else if(toUnits == "tsp")
    {
        result = cups * cupToTsp;
        unitMsg = "taespoons";
    }
    else if(toUnits == "lit")
    {
        result = cups * cupToLit;
    }

    //now update the display with the result

    // 24 cups is 17 liters
    var msg = cups + " cups is " + result + " " + unitMsg;
    $("#result span").html(msg);

});
