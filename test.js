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
        user_answer_i: null

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
        user_answer_i: null
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
        user_answer_i: null
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
        user_answer_i: null
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
        user_answer_i: null
    }
];

let nums = document.querySelectorAll(".num")
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

task.textContent = quizData[current_item].title; // меняется вопрос
answers.innerHTML = ""; // очистили прошлые ответы
quizData[current_item].answers.map((answ,i)=> add_answer(answ,i,quizData[current_item])) // добавили новые ответы

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
        if (time.textContent == 1){
            clearInterval(interval);
        }
        time.textContent -= 1
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


// если это последний вопрос, display_none убрать у end, и добавить к next pass