let test_db = [
    {
        id: 1,
        title: "html,css"
    },
    {
        id: 2,
        title: "Математика"
    },
    {
        id: 3,
        title: "Русский язык"
    },
    {
        id: 4,
        title: "Биология"
    },
    {
        id: 5,
        title: "География"
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

let create = document.querySelector(".create")

function create_test(){
    let location = window.location.href;
    location =  location.replace("index.html",'create.html');
    window.location = location

}

create.addEventListener("click", () => create_test())