// задание 1
// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
// 1 вариант
// window.onload = () => console.log('страница загрузилась');
// document.getElementById('btn').onclick = () => console.log('событие onclick');
// document.getElementById('btn').addEventListener('click', () => console.log('событие addEventListener'));

// 2 вариант
// window.addEventListener('load', function(e) {
//     console.log('страница загрузилась');
// })

// const button = document.querySelector('.button');
// button.onclick = function() {
//     console.log('событие onclick');
// }

// document.addEventListener('click', function(){
//     console.log('событие addEventListener');
// })

// задание 2
// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий 
// на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на 
// “Вы нажали на эту кнопку”
// 1 вариант
// let count = 0;

// function clickButton(num) {
//     console.log('You clicked button ' + num);

//     if (num == 4) {
//         count++;
//         console.log('You clicked button 4 ' + count + ' times');  
//     }

//     if (num == 5) {
//         document.getElementById('btn5').innerHTML = 'You clicked this button'; 
//     }  

// }

// 2 вариант
// document.addEventListener('click', function(e) {
//     console.log(e.target.className);
// })
// const button4 = document.querySelector('.button4');
// let counter = 0;
// button4.onclick = function () {
//     counter++;
//     console.log(`количество нажатий ${counter}`);
// }

// const button5 = document.querySelector('.button5');
// button5.onclick = function () {
//     button5,this.textContent = '/Ds нажали на эту кнопку';
// }

// задание 3
// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент 
// нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться 
// текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли 
// должен появиться текст “Наведения на кнопку больше нет”
// 1 вариант
// function addHeading(){
//     let heading = document.createElement('h1');
//     heading.innerText = 'New Heading';
  
//     document.body.appendChild(heading);
//   }
//   function removeHeading(){
//     let heading = document.querySelector('h1');
  
//     if(heading){
//       document.body.removeChild(heading);  
//     }  
//   }  

// 2 вариант
// const button = document.querySelector('.button');
// const text = document.createElement('h1');
// button.parentElement.appendChild(text);
// button.onclick = function () {
//     text.textContent = 'новый заголовок';
// }

// const button1 = document.querySelector('.button1');
// button1.onclick = function () {
//     button.parentElement.removeChild(text);
// }

// const button2 = document.querySelector('.button2');
// document.addEventListener('mouseover', function() {
//     console.log('вы навели на данную кнопку');
// })
// button2.addEventListener('mouseout', function() {
//     console.log('наведения на кнопку больше нет');
// })

// задание 4
// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”
// const button = document.querySelector('.button');
// const list = document.querySelector('ul')
// button.onclick = function() {
//     list.appendChild(document.createElement('li'));
//     list.children[list.children.length -1].textContent = 'новый элемент списка';
// }

// const button1 = document.querySelector('.button1');
// button1.onclick = function() {
//     list.removeChild(list.children[0]);
// }

// const button2 = document.querySelector('.button2');
// button2.onclick = function() {
//     button2.className = 'click';
// }


// задание 5
// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const button = document.createElement('button');
// button.textContent = 'отправить';
// const div = document.querySelector('.content');
// div.appendChild(button);

// button.onclick = function() {
//     button.textContent = 'Текст отправлен';
// }


// <!-- ДОМАШНЯЯ РАБОТА -->

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => console.log('все теги прогрузились'));

// или

document.addEventListener = () => console.log('все теги прогрузились');

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', () => console.log('страница загрузилась'));

// или

window.onload = () => console.log('страница загрузилась');

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', event => {
    const superClass = event.target.classList.contains('super_element')
        ? 'присутствует' : 'отсутствует';
    console.log(`Класс "super_element" ${superClass} в элементе "${event.target.tagName.toLowerCase()}".`);
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

document.querySelector('textarea').addEventListener('mouseover', () => console.log("Вы навели на textarea."));

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, 
// который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то 
// ничего выводить не нужно. Необходимо использовать делегирование.

document.querySelector('ul').addEventListener('click', event => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    console.log(event.target.textContent);
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, 
// если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

Это происходит потому, что в 5 задание событие click работает только для элементов ul и у нас есть внутри if, 
который проверяет, является ли свойство .target.tagName, которое возвращает строку, содержащую имя тега элемента, 
на который был сделан клик -> "BUTTON". В связи с этим, 3-e задание, в котором есть document.addEventListener, 
удовлетворяет всем click'ам.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

document.querySelectorAll('li:nth-child(2n)').forEach(el => el.style.backgroundColor = 'red');