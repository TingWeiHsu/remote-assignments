function myFunction()
{
document.getElementById("click").innerHTML="<h1>Hava a good time!</h1>";
}



function myHide() {
    var x = document.getElementById("hidden");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}