let nums = document.querySelectorAll(".num")
let nums_container = document.querySelector(".nums")
let next = document.querySelector(".next")
let last = document.querySelector(".last")
let progress = document.querySelector(".progress")
let current_item = 0

function next_quation(isNext){
    if(isNext && current_item < nums.length-1){
        current_item += 1;
        nums[current_item].classList.add("active");
        let width = (nums_container.offsetWidth/(nums.length-1))* current_item + "px";
        progress.style.width = width; 
    }else if(current_item>0 && !isNext){
        nums[current_item].classList.remove("active");
        current_item -= 1;
        let width = (nums_container.offsetWidth/(nums.length-1))* current_item + "px";
        progress.style.width = width; 
    }
    
}

next.addEventListener("click", ()=> next_quation(true))
last.addEventListener("click", ()=> next_quation(false))