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
        currentAnswerId: 0
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
        currentAnswerId: 2
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
        currentAnswerId: 0
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
        currentAnswerId: 2
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
        currentAnswerId: 2
    }
];

let nums = document.querySelectorAll(".num")
let nums_container = document.querySelector(".nums")
let next = document.querySelector(".next")
let last = document.querySelector(".last")
let progress = document.querySelector(".progress")
let time = document.querySelector(".time")
let task = document.querySelector(".question") 
let current_item = 0

task.textContent = quizData[current_item].title

function next_quation(isNext) {
    if (isNext && current_item < nums.length - 1) {
        current_item += 1;
        nums[current_item].classList.add("active");
        let width = (nums_container.offsetWidth / (nums.length - 1)) * current_item + "px";
        progress.style.width = width;
        task.textContent = quizData[current_item].title
        quizData[current_item].answers.map(a=> add_answer(a))
    } else if (current_item > 0 && !isNext) {
        nums[current_item].classList.remove("active");
        current_item -= 1;
        let width = (nums_container.offsetWidth / (nums.length - 1)) * current_item + "px";
        progress.style.width = width;
        task.textContent = quizData[current_item].title
    }

}

next.addEventListener("click", () => next_quation(true))
last.addEventListener("click", () => next_quation(false))

function min() {
        if (time.textContent == 1){
            clearInterval(interval);
        }
        time.textContent -= 1
}

let interval = setInterval(() => min(), 1000)


function add_answer(answer){
    let id = Math.random()
    let answers = document.querySelector(".answers")
    let input = document.createElement("input");
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'answer');
    input.setAttribute('id', `a${id}`);

    let label = document.createElement("label");
    label.setAttribute('for', `a${id}`);
    label.setAttribute('class', 'answer');
    label.textContent = answer

    console.log(input);
    console.log(label);




}

// из консоли в разметку (ответы) и чтобы изменялись по нажатию (следующий)