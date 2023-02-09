// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели.
// Выведите на экран “Вторник”
// const weekDay = {
//     1 : "Понедельник",
//     2 : "Вторник",
//     3 : "Среда",
//     4 : "Четверг",
//     5 : "Пятница",
//     6 : "Суббота",
//     7 : "Воскресенье",
// };
// console.log(weekDay[2]);

// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя 
// и возраст через дефис.
// const user = {
//     myname : "IRINA",
//     surname : "ROZHKOVA",
//     age : 36,
    
//     showAll : function () {
//         console.log(this.myname + "-" + this.surname + "-" + this.age)
//     }
// }
//     user.showAll();
    
// Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// const user = {
//     myname : "IRINA",
//     surname : "ROZHKOVA",
//     age : 36,
    
//     showAll : function () {
//         let str = "";
//         for (const key in user) {
//             if(key != "showAll") str += "-" + user[key];
//         }
//         console.log(str);
//     }
    
// }
//     user.showAll();
//     let newProp = prompt ("Название свойства")
//     user[newProp] = prompt("Введите значение свойства");
//     user.showAll();

// Удалите свойство surname
// const user = {
//     myname : "IRINA",
//     surname : "ROZHKOVA",
//     age : 36,
    
//     showAll : function () {
//         let str = "";
//         for (const key in user) {
//             if(key != "showAll") str += "-" + user[key];
//         }
//         console.log(str);
//     }
    
// }
// user.showAll();
// let newProp = prompt ("Название свойства")
// user[newProp] = prompt("Введите значение свойства");
// user.showAll();
// delete user.surname;
// user.showAll();

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// const weekDay = {};
// for (let i = 0; i < arr1.length; i++) {
//     weekDay[arr1[i]] = arr2[i];
// }
// console.log(weekDay);


// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// const object = {x: 1, y: 2, z: 3};
// for (const key in object) {
//     object[key] *= object[key];
// }
// console.log(object);


// Найдите сумму элементов приведенного объекта.
// const objects = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0;
// for (const key in objects) {
//     for (const keyInsade in objects[key]) {
//         sum += objects[key][keyInsade];
//     }
// }
// console.log(sum);


// Создайте объект riddles 
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

// const riddles = {
//     question : "Зимой и летом одним цветом", 
//     answer : "Ель",
//     count : 0,
//     hints : {
//         hints1 : "Хвойная",
//         hints2 : "Есть иголки",
//     },
//     askQuestion : function() {
//         if (prompt(this.question) == this.answer) {
//             alert("Мододец!");
//             this.count = 0;
//         } else {
//             if(this.count == 0){
//                 alert("Неверный ответ, первая подсказка : " +this.hints.hints1);
//                 this.count++;
//             } else if (this.count == 1){
//                 alert("Неверный ответ, вторая подсказка : " +this.hints.hints2)
//                 this.count++;
//             } else if (this.count == 2) {
//                 alert("Вы проиграли, правильный ответ" +this.answer);
//                 this.count = 0;
//             }
//         }
//     }
// };
// do {
//     riddles.askQuestion();
// } while (riddles.count !=0);

// ДОМАШНЕЕ ЗАДАНИЕ

// **Задание 5**
// Дано 2 массива. Вам необходимо объединить 2 этих массива, чтобы значения 
// первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const weekDay = {};
for (let i = 0; i < en.length; i++) {
    weekDay[en[i]] = ru[i];
}
console.log(weekDay);

// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
};
for (let key in numbers) {
    if (numbers[key] >= 3) {
      console.log(numbers[key]);
    }
}

// Задание 3.1
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% 
// используя метод forEach.

const products = [
{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
];
products.forEach(function(item) {
    item.price *= 0.85;
});
console.log(products);

// Задание 3.2
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% 
// используя метод forin.  
const products = [
{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
];
for (let product of products) {
    product.price *= 0.85;
}
console.log(products);

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, 
// к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [ 
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 4.1
// Необходимо вывести в консоль массив продуктов в котором есть хоть одна 
// фотография используя метод filter. Исходные данные - массив products.

const products = [
{
    id: 3,
    price: 127,
    photos: [
        "1.jpg", 
        "2.jpg",
    ],
},
{
    id: 5,
    price: 499,
    photos: [],
},
{
    id: 10,
    price: 26,
    photos: [
        "3.jpg",
    ],
},
{
    id: 8,
    price: 78,
},
];
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

// Задание 4.2
// Необходимо отсортировать массив products используя метод sort по цене, 
// начиная с самой маленькой, заканчивая самой большой ценой, после чего 
// вывести отсортированный массив в консоль.

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg", 
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
    ];
products.sort((a, b) => a.price - b.price);
console.log(products);