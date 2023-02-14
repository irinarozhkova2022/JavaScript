// задание 1
// const block = document.querySelector('.block');
// const item = document.createElement('div');
// item.className = 'item';
// item.textContent = 'элемент внутри';
// item.style.color = 'blue'
// item.style.border = '1px solid black';
// item.style.backgroundColor = '#f8f8f8';
// item.style.padding = '16px';
// block.setAttribute('class', 'item_1');
// block.appendChild(item);

// задание 2
// const text = document.querySelector('.text');
// console.log(text.previousElementSibling);
// console.log(text.parentElement);
// console.log(text.parentElement.previousElementSibling);
// console.log(text.parentElement.parentElement);

// задание 3
// const h2 = document.querySelector('.subtitle');
// let parent = h2.parentElement;
// while(parent.className) {
//     console.log(parent.className);
//     parent = parent.parentElement;
// }


// задание 4
// const form = document.querySelector('form');
// const input = form.children[0];
// const btn = form.children[1];

// const text = document.createElement('h2');
// text.textContent = "";
// form.appendChild(text);
// btn.onclick = function () {
    
//     if (input.value.length == 0) {
//         text.textContent = 'Вы не заполнили поле ввода!';

//     } else {
//         text.textContent = "";
//     }
// }


// задание 5
// let div = document.querySelector('.content');
// let btn = document.createElement('button');
// btn.textContent = 'Отправить';
// div.appendChild(btn);

// btn.addEventListener('click', function(){
//     btn.textContent = 'Текст отправлен';
// });


// домашняя работа
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще 
// один класс "super-dropdown", необходимо использовать методы forEach 
// и querySelectorAll и свойство classList у элементов.
let dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function (item) {
    item.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", 
// если он присутствует у этого элемента, либо добавить, если такого 
// класса у элемента не было.
let btn = document.querySelector('.btn');
if (btn.classList.contains('btn-secondary')) {
    btn.classList.remove('btn-secondary');
} else {
    btn.classList.add('btn-secondary');
} 

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого 
// присутствует класс "menu".


// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".


// 5. Добавьте атрибут data-dd со значением 3 элементу у которого 
// существует атрибут "aria-labelledby" равный "dropdownMenuButton" 
// используя dataset.


// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".
