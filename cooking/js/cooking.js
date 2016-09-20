
$( "#convert" ).click(function() 
{
    console.log("converting cups...");
    var cupToTbs = 16;
    var cupToTsp = 48;
    // a default value for the result of our conversion;
    var result = 0;

    

    // read a form value with jquery
    var cups = $("#cups").val();
    //read the value of the selected item from the dropdown
    var toUnits = $("#convertTo option:selected").val();

    if(toUnits == "tbs")
    {
        result = cups * cupToTbs;
    }
    else if(toUnits == "tsp")
    {
        result = cups * cupToTsp;
    }

    //now update the display with the result

    $("#result span").html(result);

});
