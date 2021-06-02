const pics = document.querySelectorAll(".pic");

for(var i = 0; i < pics.length; i++)
{
    pics[i].addEventListener("mouseenter", function(e)
    {
        this.querySelector(".overlay").style.display = "block";
    });
    pics[i].addEventListener("mouseleave", function(e)
    {
        this.querySelector(".overlay").style.display = "none";
    });
}