const castmembers = document.querySelectorAll(".elem");

for(var i = 0; i < castmembers.length; i++)
{
    castmembers[i].addEventListener("mouseenter", function(e)
    {
        this.querySelector(".overlay").style.display = "block";
    });
    castmembers[i].addEventListener("mouseleave", function(e)
    {
        this.querySelector(".overlay").style.display = "none";
    });
}
