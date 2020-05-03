$(document).ready(function(){
    function getIMG(){
        var URL = 'https://api.nasa.gov/planetary/apod?api_key=hiMC9IGUtE07MdQFkpEcdSIgoAvtKJWhaLbNfEpm'
        $.getJSON(URL, function(data){
            console.log(data)
            updateDOM(data)
        });
    }
    function updateDOM(data){
        var img = data.hdurl;
        var cssconvert = 'url("' + img + '")'
        var title = data.title;
        var desc = data.explanation;
        console.log(cssconvert)
        console.log(img)
        document.getElementById("APOD").src = img;
        document.getElementById("APOD").style.width = "";
        document.getElementById("APOD").style.height = "100%";
        document.getElementById("APOD").style.zIndex = "0";
        document.getElementById("APOD").style.backgroundSize = "100% 100%";
        document.getElementById("APOD").style.backgroundAttachment = "fixed";
        document.getElementById("APOD-title").innerHTML = title;
        document.getElementById("APOD-description").innerHTML = desc;


    }
    
    getIMG()
});