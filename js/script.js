const sliderElm = Array.from(document.querySelectorAll(".item"));
const prevElm = document.querySelector(".prev");
const nextElm = document.querySelector(".next");
let count = 0;
sliderElm.map((item, index) => {
   item.style.left = `${index * 100}%`;
})
prevElm.addEventListener("click",()=>{
   count--;
   slider();
})
nextElm.addEventListener("click",()=>{
   count++;
   slider();
})
function slider (){
    sliderElm.map((item, index) => {
        item.style.transform = `translateX(-${count*100}%)`;
        item.style.transition = ".4s";
     })
     
}