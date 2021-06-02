// this is used in all pages to change the color of the buttons
// for the three menu items:
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

// for the main header:
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