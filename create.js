let cross = document.querySelector(".cross");
let containers = document.querySelector(".containers");
let counter = 2;

let form_data_object = {}

function submit_form() {
    let form = document.querySelector("#create_form")
    let form_data = new FormData(form)

    for (let pair of form_data.entries()) {
        form_data_object[pair[0]] = pair[1];
    }

    console.log(form_data_object);

    let test = create_test(form_data_object)
    localStorage.setItem(form_data_object.title, JSON.stringify(test))
}

function create_test(form) {
    let q = `quation`
    let a = `answer`
    let test = []
    for (let i = 1; i < counter; i++) {
        let question = {
            id: i,
            title: undefined,
            answers: [],
            currentAnswerId: 0,
            user_answer_i: null,
            total_time: 25
        }
        // console.log(q + i);  
        if (form[q + i]) question['title'] = form[q + i]
        for (let j = 1; j < 5; j++) {
            // console.log(a + i + '_' + j);
            if (form[a + i + '_' + j]) question['answers'].push(form[a + i + '_' + j])
        }
        test.push(question)
    }
    console.log(test);
    return test 
}


function add_new_question() {
    const container = document.createElement('div');
    container.classList.add('container')

    const question = `
            <div class="cross" onclick="remove_question(this.parentNode)">✖</div>
            <input class="inp_q" name="quation${counter}" placeholder="Впишите вопрос...">
            <div class="quations">
                <label class="quation">1. <input name="answer${counter}_1" placeholder="Впишите вариант ответа..."></label>
                <label class="quation">2. <input name="answer${counter}_2" placeholder="Впишите вариант ответа..."></label>
                <label class="quation">3. <input name="answer${counter}_3" placeholder="Впишите вариант ответа..."></label>
                <label class="quation">4. <input name="answer${counter}_4" placeholder="Впишите вариант ответа..."></label>
            </div>
    `

    container.innerHTML = question

    containers.appendChild(container)
    counter += 1;
}

function remove_question(container) {
    containers.removeChild(container);
}
