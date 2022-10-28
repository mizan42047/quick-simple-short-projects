const card = document.querySelector('.card');
const panel = document.querySelectorAll(".card__panel");

card.addEventListener('click',(event) => {
    panel.forEach((element,index)=>{
        element.classList.remove("card__panel--active");
    })
    event.target.classList.add("card__panel--active")
})
