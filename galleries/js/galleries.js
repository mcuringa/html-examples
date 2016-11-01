var photos = [
    {
        filename: "chiapas.jpg",
        title: "Policia Afuera",
        desc: "Cynthia, Diego, and Fiona relaxing in San Cristobol de las Casas",
        location: "San Cristobol, Chiapas"
    },
    {
        filename: "park.jpg",
        title: "Schools out",
        desc: "Diego and Fiona enjoying a beautiful fall day",
        location: "Prospect Park"
    },
    {
        filename: "magic.jpg",
        title: "Vintage Magic Cards",
        desc: "Diego checking out Mo's 1994 Magic the Gathering deck",
        location: "Joyce Bakeshop, Brooklyn"
    },    {
        filename: "zeroday.jpg",
        title: "Zero Day Camp",
        desc: "The Zero Day Camp crew, summer 2016",
        location: "Crown Heights, Brooklyn"
    },
    {
        filename: "ent.jpg",
        title: "Treebeard",
        desc: "Diego trying on his Ent costume for Halloween",
        location: "Brooklyn"
    },
    {
        filename: "enderman.jpg",
        title: "Like an Enderman",
        desc: "Fiona teleports onto our balcony",
        location: "Brooklyn"
    }
];


function showDetail(index)
{

    var photo = photos[index];
    $("#detail").data("index", index);
    $("#detail figure").addClass("fade");
    var update = function() 
    {
        $("#detail h2").html(photo.title);
        $("#detail figcaption").html(photo.desc);
        $("#detail img").attr("src", "./gallery/" + photo.filename);
        $("#detail figure").removeClass("fade");

    };
    var delay = $("#detail figure").css("transition-duration");
    delay = Number(delay.slice(0,-1))*1000; //read the css delay and convert to millis
    
    //don't call the update until our fade-out has finished
    setTimeout(update, delay);
}

function makeThumbs()
{
    var gal =$("#thumbnails");
    
    for(var i=0;i<photos.length;i++)
    {
        var thumb = $("<div></div>");
        var img = $("<img/>").attr("src", "./gallery/" + photos[i].filename);
        img.attr("data-index", i);

        var title = $("<h3></h3>").html(photos[i].title);

        thumb.append(img);
        thumb.append(title);
        
        gal.append(thumb);
    }
}


makeThumbs();
showDetail(0, 0);

$("#next").click(function()
{
    var currentIndex = Number($("#detail").data("index"));
    var nextIndex = currentIndex + 1;
    
    if(nextIndex >= photos.length)
        nextIndex = 0;

    showDetail(nextIndex);

});

$("#prev").click(function()
{
    var currentIndex = Number($("#detail").data("index"));
    var nextIndex = currentIndex - 1;
    
    if(nextIndex < 0)
        nextIndex = photos.length -1;

    showDetail(nextIndex);

});



$("#thumbnails img").click(function(event)
{
    console.log("clicking an image");
    var img = event.target;
    console.log(img);
    var index = Number( $(img).data("index") );

    showDetail(index);

});
