function myFunction()
{
document.getElementById("click").innerHTML="<h1>Hava a good time!</h1>";
}



function myHide() {
    var x = document.getElementById("hidden");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}