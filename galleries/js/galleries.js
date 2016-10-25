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


function makeThumbs()
{
    var gal =$("#thumbnails");
    
    for(var i=0;i<photos.length;i++)
    {
        var thumb = $("<div></div>");
        var img = $("<img/>").attr("src", "./gallery/" + photos[i].filename);
        var title = $("<h3></h3>").html(photos[i].title);

        thumb.append(img);
        thumb.append(title);
        gal.append(thumb);
    }
}


makeThumbs();