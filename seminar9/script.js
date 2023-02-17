// задание 1
// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
// 1 вариант
// function validateCheckbox() {
//     if (!document.getElementById('checkbox').checked) {
//         document.getElementById('error-message').innerHTML = 'Необходимо согласиться с условиями';
//     } else {
//         // Отправка данных на сервер...
//     }    
// }    

// 2 вариант
// const input = document.querySelector('.button');
// button.onclick = function () {
//     if (!button.parentElement.children[0].checked) {
//         const text = document.createElement('p');
//         text.textContent = 'необходимо согласиться с условиями';
//         button.parentElement.appendChild(text);
//     }
// }


// задание 2
// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”
// 1 вариант
// function checkDrink() {
//     if (document.querySelector('input[name=drink]:checked').value == 'tea') {
//       alert('Чай закончился');
//     } else if (document.querySelector('input[name=drink]:checked').value == 'coffee') {
//       alert('Кофе закончился');
//     } else {
//       alert('Выберите чай или кофе');
//     } 
//   }  

// 2 вариант
// const button = document.querySelector('.button');
// button.onclick = function () {
//     if (!button.parentElement.children[0].checked) {
//         alert ('чай закончился');
//         button.parentElement.appendChild(text);
//     } else if(!button.parentElement.children[1].checked) {
//         alert ('кофе закончился');
//     }
// }


// задание 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”
// 1 вариант
// let input = document.querySelector('input');

//   input.addEventListener('input', function() {
//     if (this.value === 'пароль') {
//       this.style.borderColor = 'green';
//     } else {
//       this.style.borderColor = 'red';
//       this.nextElementSibling.innerText = 'Пароль неверный';
//     }
//   });

// 2 вариант
// const buttonPass = document.querySelector('.btnPass');
// const pass = document.querySelector('.pass');
// const text = document.createElement('p');
// buttonPass.onclick = function () {
//     if (pass.value === 'пароль') {
//         pass.style.backgroundColor = 'green';
//     } else {
//         pass.style.borderColor = 'red';
//         buttonPass.parentElement.appendChild(text);
//         text.textContent = 'пароль неверный'
//     }
// }


// задание 4
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода
// 1 вариант
// let input = document.getElementById('input');

//     input.addEventListener('input', function() {
//         let header = document.getElementById('header');

//         header.innerHTML = input.value;
//     });

// 2 вариант

// const textTitle = document.querySelector('.text');
// const title = document.querySelector('.title');
// textTitle.addEventListener('keyup', () => title.textContent = textTitle.value);


// ДОМАШНЯЯ РАБОТА
// 1. При изменении значения в input с id="from", значение содержащееся в нем
//     должно моментально отображаться в span. То есть при печати в input'е тег span
//     также должен меняться.

const spanEl = document.querySelector('span');
document.querySelector('input').addEventListener('input', e => {
    spanEl.textContent = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом
// message:
// 1) добавить два класса: animate__animated и animate__fadeInLeftBig
// 2) поставить данному элементу стиль visibility в значение 'visible'.

const message = document.querySelector('.message');
document.querySelector('button').addEventListener('click', () => {
    message.style.visibility = 'visible';
    message.classList.add('animate__animated', 'animate__fadeInLeftBig');
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
//     форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
//     должны быть подсвечены незаполненные поля (необходимо поставить класс error
//     незаполненным полям).
//     Как только пользователь начинает заполнять какое-либо поле, необходимо,
//     при вводе в данное поле, произвести проверку:
//     Если поле пустое, необходимо данное поле подсветить (поставить класс error
//     данному полю).
//     Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const formControlEls = formEl.querySelectorAll('input, select');
formEl.addEventListener('submit', event => {
    formControlEls.forEach(formControlEl => {
        if (formControlEl.value === '') {
            formControlEl.classList.add('error');
            event.preventDefault();
        }
    });
});

formEl.addEventListener('input', event => {
    if (!event.target.classList.contains('form-control')) {
        return;
    }
    event.target.value === ''
    ? event.target.classList.add('error')
    : event.target.classList.remove('error');
});
