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
        currentAnswerId: 0,
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
            'Грудную клетку и лёгкие'
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

for(let [key, value] of Object.entries(themes)){
    localStorage.setItem(key, JSON.stringify(value))
}

let local_storage_keys = Object.keys(localStorage)
console.log(local_storage_keys);
let test_db = local_storage_keys.map((theme, i)=>({
    id: i,
    title: theme
}))

let tests = document.querySelector(".tests");
let modal  = document.querySelector(".modal");

test_db.map(test=> {
    if(test.title == 'theme') return 
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