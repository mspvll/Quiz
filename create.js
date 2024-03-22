let cross = document.querySelector(".cross")


function submit_form(){
    let form = document.querySelector("#create_form")
    let form_data = new FormData(form)
    let form_data_object = {}
    for(let pair of form_data.entries()){
        form_data_object[pair[0]] = pair[1];
    }
    console.log(form_data_object);
}