const quizData = [
    {
        id: '0',
        title: 'Какие основные теги используются для структурирования HTML-документа?',
        answers: [
            'header, main, footer',
            'div, span, p',
            'table, tr, td',
            'h1, h2, h3'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 5
    },
    {
        id: '1',
        title: 'Что такое CSS?',
        answers: [
            'Common Style Sheet',
            'Computer Style Sheet',
            'Cascading Style Sheet',
            'Colorful Style Sheet'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 30

    },
    {
        id: '2',
        title: 'Как изменить цвет текста в CSS?',
        answers: [
            'color: red;',
            'text-color: blue;',
            'font-color: green;',
            'background-color: yellow;'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 30

    },
    {
        id: '3',
        title: 'Как создать внешнюю таблицу стилей (external CSS)?',
        answers: [
            '<style> тег внутри HTML-документа',
            '<css> тег внутри HTML-документа',
            'Отдельный файл с расширением .css и подключение через <link>',
            'Встроенный стиль внутри тега <head>'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 30

    },
    {
        id: '4',
        title: 'Как установить полупрозрачность для элемента в CSS?',
        answers: [
            'opacity: 0.5;',
            'transparent: true;',
            'background: rgba(255, 0, 0, 0.5);',
            'filter: alpha(50);'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 30

    }
    
];
let nums_container = document.querySelector(".nums")
let next = document.querySelector(".next")
let last = document.querySelector(".last")
let progress = document.querySelector(".progress")
let time = document.querySelector(".time")
let task = document.querySelector(".question") 
let answers = document.querySelector(".answers")
let pass = document.querySelector(".pass")
let current_item = 0
let end = document.querySelector(".end")
let returnn = document.querySelector(".return")
let modal = document.querySelector(".modal")
let score = 0
let numb = document.querySelector(".numb")
console.log(history.state);

task.textContent = quizData[current_item].title; // меняется вопрос
answers.innerHTML = ""; // очистили прошлые ответы
quizData[current_item].answers.map((answ,i)=> add_answer(answ,i,quizData[current_item])) // добавили новые ответы
time.textContent = quizData[current_item].total_time

for(let i = 0; i < quizData.length; i++){
    let new_num = document.createElement("div"); 
    new_num.addEventListener("click", () => go_to(i))
    new_num.classList.add("num");
    new_num.textContent = i + 1;
    if(i === 0) new_num.classList.add("active");
    nums_container.appendChild(new_num);

}
let nums = document.querySelectorAll(".num")
nums_container = document.querySelector(".nums")

function go_to(index){
    current_item = index;
    task.textContent = quizData[current_item].title; // меняется вопрос
    answers.innerHTML = ""; // очистили прошлые ответы
    quizData[current_item].answers.map((answ,i)=> add_answer(answ,i,quizData[current_item])) // добавили новые ответы
    time.textContent = quizData[current_item].total_time;
    for(let num of nums){
        if(+num.textContent <= index+1){
            num.classList.add("active");
        } else{
            num.classList.remove("active");
        }
    }
    let width = (nums_container.offsetWidth / (nums.length - 1)) * index + "px"; // определяет длину заливки палки 
        progress.style.width = width; // меняет длину заливки цветом
}


function next_quation(isNext) {
    if (isNext && current_item < nums.length - 1) { // если нажатый вопрос меньше кол-ва вопросов
        current_item += 1;
        change_btns(current_item);
        nums[current_item].classList.add("active"); // кружок обводится желтым
        let width = (nums_container.offsetWidth / (nums.length - 1)) * current_item + "px"; // определяет длину заливки палки 
        progress.style.width = width; // меняет длину заливки цветом
        task.textContent = quizData[current_item].title // меняется вопрос
        answers.innerHTML = ""; // очистили прошлые ответы
        quizData[current_item].answers.map((a,i)=> add_answer(a,i,quizData[current_item])) // добавили новые ответы

    } else if (current_item > 0 && !isNext) { // если счетчик больше 0 и не равен нажатому вопросу
        nums[current_item].classList.remove("active"); // обводка убирается
        current_item -= 1;
        change_btns(current_item);
        let width = (nums_container.offsetWidth / (nums.length - 1)) * current_item + "px";
        progress.style.width = width; // меняет длину заливки цветом
        task.textContent = quizData[current_item].title // меняется вопрос
        answers.innerHTML = "";
        quizData[current_item].answers.map((a,i)=> add_answer(a,i,quizData[current_item]))

    }

}

function change_btns(current_item){
    if (current_item === nums.length - 1){
        next.classList.add("display_none")
        pass.classList.add("display_none")
        end.classList.remove("display_none");

    }else{
        next.classList.remove("display_none")
        pass.classList.remove("display_none")
        end.classList.add("display_none");

    }
    
}


next.addEventListener("click", () => {
    if (quizData[current_item].user_answer_i !== null){
        next_quation(true)
    }
    else{
        alert("Выберете вариант ответа или нажмите 'Пропустить'.")
    }
    
    
})
pass.addEventListener("click", () => next_quation(true))
last.addEventListener("click", () => next_quation(false))

function min() {
    if (quizData[current_item].total_time == -1){
        time.textContent = 0;
        return
    }
    let total_count_item = quizData[current_item].total_time;
    quizData[current_item].total_time -= 1;
    time.textContent = total_count_item;
}

let interval = setInterval(() => min(), 1000)  // функция времени


function add_answer(answer,id, task){
    let input = document.createElement("input"); 
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'answer'); // создается вопрос
    input.setAttribute('id', `a${task.id}${id}`); 
    input.checked = task.user_answer_i === id; // выбирается вопрос 

    let label = document.createElement("label");
    label.setAttribute('for', `a${task.id}${id}`);
    label.setAttribute('class', 'answer');
    label.textContent = answer; // создается вопрос
    label.addEventListener("click", ()=> set_user_answer_id(task.id,id)); // по клику запоминается ответ

    answers.appendChild(input); 
    answers.appendChild(label); // в список ответов добавляется ответ

}

function set_user_answer_id(q_id, answ_id){
    quizData[q_id].user_answer_i = answ_id; // пустому значению user_answer_i присваивается выбранный ответ
    
}

end.addEventListener("click", () => {
    modal.classList.remove("display_none");
    for(let i = 0; i < quizData.length; i++){
        if(quizData[i].user_answer_i === quizData[i].currentAnswerId){
            score += 1;
        }
    }
    numb.textContent = score
})

function return_to_main(){
    let location = window.location.href;
    location =  location.replace("test.html",'index.html');
    window.location = location

}

returnn.addEventListener("click", () => return_to_main())

// найти ошибку (время)  