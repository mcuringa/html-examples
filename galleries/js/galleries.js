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
    }
];

function showDetail(index)
{

    var photo = photos[index];
    $("#detail").data("index", index);
    $("#detail h2").html(photo.title);
    $("#detail figcaption").html(photo.desc);
    $("#detail img").attr("src", "./gallery/" + photo.filename);


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
showDetail(0);

$("#next").click(function()
{
    var currentIndex = Number($("#detail").data("index"));
    var nextIndex = currentIndex + 1;
    
    if(nextIndex >= photos.length)
        nextIndex = 0;

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
