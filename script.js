var togggleButton = document.querySelector(".fa-bars");
console.log(togggleButton);

togggleButton.addEventListener("click", (e) => {
    console.log("clicked");
    document.querySelector(".toggle-dropdown").style.top = "0%";
    document.querySelector(".toggle-dropdown").style.left = "0%";
    document.querySelector(".toggle-dropdown").style.transitionDuration = "left 3s ,top 3s ";
    document.querySelector(".toggle-dropdown").style.backgroundColor = "purple";
    document.querySelector(".toggle-dropdown").style.padding = "30px";

    document.querySelector(".toggle-dropdown").style.height = "max-content";
    document.querySelector(".toggle-dropdown").style.display = "block";


});

var cancelButton = document.querySelector(".faa-times");
cancelButton.addEventListener("click", (e) => {
    document.querySelector(".toggle-dropdown").style.display = "none";
    document.querySelector(".toggle-dropdown").style.transition = "2s ease-in-out";
})