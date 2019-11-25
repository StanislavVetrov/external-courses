function toggleList(){    
    var x = document.getElementById("dropdown");
if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
} else {
    x.style.visibility = "hidden";
}
    let y = document.getElementById("arrow");
    if(x.style.visibility === "visible"){
        y.style.transform = "rotate(180deg)";
    } else {
        y.style.transform = "rotate(0deg)";
    }        
} 