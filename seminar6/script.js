// Получите ссылку на первый абзац из дива с id, равным block, 
// выведите его в консоль
// const link = document.querySelectorAll('p');
// console.log(link[0].textContent);

// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// const link2 = document.querySelector('.www');
// console.log(link2[0].textContent);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 
// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const linkEl = document.querySelector('.link');
// linkEl.textContent = 'link text js';
// linkEl.href = 'https://developer.mozilla.org/ru/';
// console.log(linkEl);
// const imgEl = document.querySelector('.photo');
// imgEl.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG';

// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// const content = document.querySelector('.content');
// const newContent = document.createElement('p');
// newContent.textContent = 'новый текстовый элемент';
// content.appendChild(newContent);


// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 
// const content = document.querySelector('.content');
// const newContent = document.createElement('p');
// newContent.textContent = 'новый текстовый элемент';
// content.appendChild(newContent);
// content.removeChild(newContent);

// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button

// const button1 = document.createElement('button');
// const button2 = document.createElement('button');
// const counterText = document.createElement('p');

// button1.textContent = 'нажми меня';
// button2.textContent = 'обнули счетчик';

// const content = document.querySelector('.content');

// content.appendChild(counterText)
// content.appendChild(button1);
// content.appendChild(button2);

// let counter = 0;
// counterText.textContent = (`совершено ${counter} нажатий`);

// button1.onclick = function() {
//     counter++;
//     counterText.textContent = (`совершено ${counter} нажатий`);   
// }

// button2.onclick = function() {
//     counter = 0;
//     counterText.textContent = (`совершено ${counter} нажатий`);
// }

// ДОМАШНЯЯ РАБОТА

// 1. Найти по id, используя getElementById, элемент с id равным 
// "super_link" и вывести этот элемент в консоль.

let superLink = document.getElementById('super_link');
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", 
// поменяйте текст внутри элемента на "ссылка".

const cardLinks = document.querySelectorAll('.card-link');
for (let i = 0; i < cardLinks.length; i++) {
    cardLinks[i].textContent = 'ссылка';
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с 
// классом "card-body" и вывести полученную коллекцию в консоль.

let cardLinks = document.querySelectorAll('.card-body .card-link');
console.log(cardLinks);

// // 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number 
// со значением 50 и вывести его в консоль.

let element = document.querySelector('[data-number="50"]');
console.log(element);

// 5. Выведите содержимое тега title в консоль.

let title = document.querySelector('.card-title').innerText;
console.log(title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

let cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);

// // 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в 
// начало элемента, который имеет класс "card".

let card = document.querySelector('.card');
let p = document.createElement('p');
p.innerText = 'Привет';
card.prepend(p);

