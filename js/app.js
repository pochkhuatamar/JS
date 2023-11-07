
const openPopupBtn = document.querySelector("#open-popup-btn");
const closePopupBtn = document.querySelector(".popup-close-btn");

openPopupBtn.addEventListener("click", function(){
    document.body.classList.add("popup-active");
});
closePopupBtn.addEventListener("click", function(){
    document.body.classList.remove("popup-active");
});


 const hamburger = document.querySelector(".hamburger");
 const nav_itmes = document.querySelector("nav_itmes");

 hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_itmes.classList.toggle("active");
 })




