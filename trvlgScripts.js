// global vars

var xhr;
// load event listeners
window.addEventListener("load", setupListeners, false);

//set the event listeners
function setupListeners(){
    console.log("9 - loading setupListeners");

    //element Ids
    const cap1 = document.getElementById("caption1");
    const cap2 = document.getElementById("caption2");
    const cap3 = document.getElementById("caption3");
    const cap4 = document.getElementById("caption4");

    //caption 1
    cap1.addEventListener("mouseover", function () { showPhoto("Mia2.html");}, false);
    cap1.addEventListener("mouseout", resetImg, false);
    
    //caption 2
    cap2.addEventListener("mouseover", function () { showPhoto("Teddy1.html");}, false);
    cap2.addEventListener("mouseout", resetImg, false);
    
    //caption 3
    cap3.addEventListener("mouseover", function () { showPhoto("Mia1.html");}, false);
    cap3.addEventListener("mouseout", resetImg, false);
    
    //caption 4
    cap4.addEventListener("mouseover", function () { showPhoto("Teddy2.html");}, false);
    cap4.addEventListener("mouseout", resetImg, false);
    
    
    
}


//function
function showPhoto(captionSelected){
    console.log("21 - loading showPhoto with " + captionSelected);
    //Step 1 - create XHR object + console log it
    xhr = new XMLHttpRequest();
    console.log(xhr);
    
    //Step 2 - initialize.open
    xhr.open("GET", captionSelected,true);
    
    //Step 3 - 
    
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show-image").innerHTML = xhr.responseText;
        }
    };
    
    
    //Step 4 - Send
    xhr.send();
    
}

function resetImg(){
    console.log("44 - loading resetImg")
    document.getElementById("show-image").innerHTML ="";
}