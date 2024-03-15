const quiz_html_css = [
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
        total_time: 20

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
        total_time: 20

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
        total_time: 20

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
        total_time: 20

    }
    
];

const quiz_math = [
    {
        id: '0',
        title: 'Что такое периметр?',
        answers: [
            'Длинна прямоугольника умноженное на ширину',
            'Длинна одной сторны',
            'Сумма длин всех сторн'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 20
    },
    {
        id: '1',
        title: 'График функции у=кх+b',
        answers: [
            'Прямая',
            'Двухстороняя',
            'Кривая',
            'Парабола'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 20
    },
    {
        id: '2',
        title: 'Утверждение не требующее доказательства - это',
        answers: [
            'Теорема',
            'Аксиома',
            'Правило',
            'Формула'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 20
    },
    {
        id: '3',
        title: 'Как найти площадь круга',
        answers: [
            'S = ah/2',
            'S = Pr/2',
            'S = 2πR',
            'S = πR²'
        ],
        currentAnswerId: 3,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '4',
        title: 'Какое арифметическое действие используется для показателей степеней при умножении целых чисел?',
        answers: [
            'Деление',
            'Вычитание',
            'Сложение',
            'Умножение'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '5',
        title: ' Какая десятичная дробь получится при преобразовании числа 10⁻²',
        answers: [
            '0,1',
            '-100',
            '-0,001',
            '0,01'
        ],
        currentAnswerId: 3,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '6',
        title: 'Чему равен старший коэффициент у квадратного уравнения x² + 8x + 15 = 0',
        answers: [
            '8',
            '1',
            '15',
            '0'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '7',
        title: 'Сколько корней имеет квадратный трехчлен, если D<0?',
        answers: [
            'Ни одного',
            '1',
            '2'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 20
    },
];

const quiz_rus = [
    {
        id: '0',
        title: 'Где ударение стоит неправильно?',
        answers: [
            'Свёкла',
            'Творо́г',
            'Обеспе́чение',
            'Ква́ртал'
        ],
        currentAnswerId: 3,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '1',
        title: 'Какая форма множественного числа у слова «дно»',
        answers: [
            'Днища',
            'Дны',
            'Донья',
            'Дни'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 20
    },
    {
        id: '2',
        title: 'Раздел языкознания, изучающий происхождение слов',
        answers: [
            'Лексика',
            'Этимология',
            'Лексографика'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 20
    },
    {
        id: '3',
        title: 'Какой частью речи может быть выражено обращение?',
        answers: [
            'Существительное',
            'Прилагательное',
            'Причастие',
            'Возможны все варианты'
        ],
        currentAnswerId: 3,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '4',
        title: 'Слова, употребляемые в той или иной местности',
        answers: [
            'Общепринятые',
            'Граничные',
            'Диалектные'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 20
    }
];

const quiz_biology = [
    {
        id: '0',
        title: 'Одноклеточная зелёная водоросль с двумя жгутиками',
        answers: [
            'Хламидомонада',
            'Хлорелла',
            'цианобактерия'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '1',
        title: 'Древняя группа высших травянистых растений. Распространены во влажных лесах',
        answers: [
            'Мхи',
            'Плауны',
            'Папоротники',
            'Водоросли'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '2',
        title: 'У птиц хорошо развиты органы чувств:',
        answers: [
            'Обоняние',
            'Осязание',
            'Слух и зрение'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '3',
        title: 'К насекомоядным млекопитающим относят...',
        answers: [
            'Бурозубок',
            'Тюленей',
            'Китов',
            'Медведей'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '4',
        title: 'Наука изучающая закономерности наследственности и изменчивости?',
        answers: [
            'Биология',
            'Генетика',
            'Палеонтология'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '5',
        title: 'Продолжительность пребывания на солнце...',
        answers: [
            'Можно не ограничивать',
            'Должна быть не более пяти минут',
            'Не превышать 30-40 минут'
        ],
        currentAnswerId: 2,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '6',
        title: 'Дыхательная система включает:',
        answers: [
            'Лёгкие и дыхательные пути',
            'Кожу и дыхательные пути',
            'Лрудную клетку и лёгкие'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 30
    }
];

const quiz_geogr = [
    {
        id: '0',
        title: 'Столица Швеции?',
        answers: [
            'Копенгаген',
            'Стокгольм',
            'Дублин'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '1',
        title: 'Сколько стран насчитывается сегодня в мире?',
        answers: [
            '150',
            '230',
            '200',
            '350'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '2',
        title: 'С каким государством граничит Индия на западе?',
        answers: [
            'Пакистаном',
            'Бангладешем',
            'Россией'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 25
    },
    {
        id: '3',
        title: 'Укажите самую крупную по населению страну Африки:',
        answers: [
            'Нигерия',
            'ЮАР',
            'Марокко'
        ],
        currentAnswerId: 0,
        user_answer_i: null,
        total_time: 30
    },
    {
        id: '4',
        title: 'Укажите в предложенном списке стран Европы крупнейшую по численности населения страну:',
        answers: [
            'Дания',
            'Испания',
            'Швеция',
            'Нидерланды'
        ],
        currentAnswerId: 1,
        user_answer_i: null,
        total_time: 25
    }
];

let themes = {
    "html,css": quiz_html_css,
    "Математика": quiz_math,
    "Русский язык": quiz_rus,
    "Биология": quiz_biology,
    "География": quiz_geogr

}
let theme = localStorage.getItem("theme")

let quizData = themes[theme]

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


task.textContent = quizData[current_item].title; // меняется вопрос
answers.innerHTML = ""; // очистили прошлые ответы
quizData[current_item].answers.map((answ,i)=> add_answer(answ,i,quizData[current_item])) // добавили новые ответы
time.textContent = quizData[current_item].total_time
min()

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
    if (quizData[current_item].user_answer_i !== null || quizData[current_item].total_time == -1){
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
        for(let i of document.querySelectorAll(".answer_input")){
            i.disabled = true;
        }
        return
    }

    let total_count_item = quizData[current_item].total_time;
    quizData[current_item].total_time -= 1;
    time.textContent = total_count_item;
}

let interval = setInterval(() => min(), 1000)  // функция времени

function add_answer(answer,id, task){
    let input = document.createElement("input"); 
    input.classList.add('answer_input')
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
    if (quizData[current_item].total_time != -1){
        quizData[q_id].user_answer_i = answ_id; // пустому значению user_answer_i присваивается выбранный ответ
    }
    
    
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
