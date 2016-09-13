

// ----------------------------------------------------------- background images
//change the background images
//depending on which thumbnail is clicked


$( "#ponies" ).click(function() {
    console.log("ponies clicked");
    //set the background image
    $("body").css("background-image", "url('img/ponies.jpg')");

    //remove "active" borders around other background buttons
    $("#backgrounds button").removeClass("active");

    //make this thumbnail "active"
    $("#ponies").addClass("active");

});


$( "#banksy" ).click(function() {
    console.log("banksy clicked");
    //set the background image
    $("body").css("background-image", "url('img/banksy.png')");

    //remove "active" borders around other background buttons
    $("#backgrounds button").removeClass("active");

    //make this thumbnail "active"
    $("#banksy").addClass("active");

});

$( "#puppies" ).click(function() {
    console.log("puppies clicked");
    //set the background image
    $("body").css("background-image", "url('img/puppies.jpg')");

    //remove "active" borders around other background buttons
    $("#backgrounds button").removeClass("active");

    //make this thumbnail "active"
    $("#puppies").addClass("active");
});


// ----------------------------------------------------------- music
// play a song when they click a button

$( "#cliverpool_btn" ).click(function() {
    console.log("cliverpool_btn clicked");
    //pause any songs that are playing
    document.getElementById("night_owl").pause();

    //start the target song
    document.getElementById("cliverpool").play();

    $("#songs button").removeClass("active");
    $("#cliverpool_btn").addClass("active");
});


$( "#night_owls_btn" ).click(function() {
    console.log("night_owls_btn clicked");
    //pause any songs that are playing
    document.getElementById("cliverpool").pause();

    //start the target song
    document.getElementById("night_owl").play();

    $("#songs button").removeClass("active");
    $("#night_owls_btn").addClass("active");

});
