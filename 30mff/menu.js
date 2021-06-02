const buttons = document.querySelector(".header").querySelectorAll(".blueclickable");
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("mouseenter", function(e)
    {
        this.style.color = "black";
    }
    )
    buttons[i].addEventListener("mouseleave", function(e)
    {
        this.style.color = "#4B9CD9";
    });
}
const title = document.querySelector(".header").querySelector("h1");
title.addEventListener("mouseenter", function(e)
{
    this.style.color = "#4B9CD9";
}
)
title.addEventListener("mouseleave", function(e)
{
    this.style.color = "black";
});