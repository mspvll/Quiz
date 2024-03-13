let test_db = [
    {
        id: 1,
        title: "html,css"
    },
    {
        id: 2,
        title: "math"
    }
]
let tests = document.querySelector(".tests");
let modal  = document.querySelector(".modal");

test_db.map(test=> {
    let new_test = document.createElement("div"); 
    new_test.addEventListener("click", () => {
        let location = window.location.href;
        location =  location.replace("index.html",'test.html');
        localStorage.setItem("theme", test.title)

        window.location = location
        
    })
    new_test.classList.add("test");
    new_test.textContent = test.title;
    tests.appendChild(new_test);
})

function toggle_modal(is_show){
    if (is_show){
        modal.classList.remove("display_none");
    }else{
        modal.classList.add("display_none");
    }
}

