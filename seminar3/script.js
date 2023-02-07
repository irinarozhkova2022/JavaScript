// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку 
// "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// function hello(firstname, lastName, age) {
//     console.log(`Привет ${firstname} ${lastName} с возрастом ${age} лет`);
// }

// const hello = (firstname, lastName, age) => {   //ВТОРОЙ ВАРИАНТ
//     console.log(`Привет ${firstname} ${lastName} с возрастом ${age} `);  //ВТОРОЙ ВАРИАНТ
// }  //ВТОРОЙ ВАРИАНТ

// hello("ИРИНА", "РОЖКОВА" ,"35");
// // Создайте функцию которая возводит переданное число в квадрат
// function quad(num) {
//     let res = num*num;
//     return res;
// }
// console.log(quad(5));

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число 
// или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
// function isPositive(num1) {
//     if (num1 > 0) {
//     console.log("+++");
//     }
//     else if (num1 < 0){
//     console.log("---");
//     }
//     else{
//     console.log("num1 = 0");
//     }
// }
// isPositive(6);
// isPositive(-3);
// isPositive(0);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль 
// сумму этих чисел.
// function getSum(num2, num3, num4) {
//     let sum = num2+num3+num4;
//     return sum;
// }
// console.log(getSum(1, 2, 3));

// С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1;	
// let param2 = 2;	
// let param3 = 3;
// function getSum(param1, param2, param3) {
//     let sum = param1+param2+param3;
//     return sum;
// }
// console.log(getSum(param1, param2, param3));


// Дана фукнция, по умолчанию стоит 5, поэтому если нет альтернативы 
// в func() то выведит 25, а если мы задаем в func(2) или другое число 
// тогда будет выводиться квадрат числа указанный в func
// function func(num = 5) {
// console.log(num * num);
// }
// // Расскажите, каким будет результат каждого из вызовов функции.
// func(2); //4
// func(3); //9
// func(); //25

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный 
// корень из этого числа. С помощью этой функции найдите корень числа 3, затем 
// найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
// function getRoot(num5) {
//     return Math.sqrt(num5);
// }
// console.log(getRoot(3) + getRoot(4));

// // Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
// function getMinimal(num6, num7) {
//     if (num6 > num7) {
//         console.log(`Второе число ${num7} меньше`);
//     } else if (num6 < num7) {
//         console.log(`Первое число ${num6} меньше`);
//     }
//     else {
//         console.log(`Числа равны`);
//     }
// }

// getMinimal(Number(prompt("Введите первое число:")), Number(prompt("Введите второе число:")));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели 
// на русском языке.
// function day(num10) {
//             switch (num10) {
//                 case 1:
//                     console.log(`понедельник`);
//                     break;
//                 case 2:
//                     console.log(`вторник`);
//                     break;
//                 case 3:
//                     console.log(`среда`);
//                     break;
//                 case 4:
//                     console.log(`четверг`);
//                     break;
//                 case 5:
//                     console.log(`пятница`);
//                     break;
//                 case 6:
//                     console.log(`суббота`);
//                     break;
//                 case 7:
//                     console.log(`воскресенье`);
//                     break;
//                 default:
//                     console.log(`дня недели не существует`);
//                     break;
//             }
//         } 
// day(Number(prompt(`Введите номер дня недели`)));

// Написать функцию, которой передаем имя и она возвращает приветствие в зависимости 
// от времени суток (Доброе утро\день\вечер\ночи Иван)
// function greetingUserWithDayTime(firstName) {
//     let time = new Date();
//     let nowHour = Number(time.getHours());
//     console.log(time);
//     console.log(nowHour);
//     if (nowHour < 7) {
//         console.log(`Доброй ночи ${firstName}`);
//     }
//     else if ( nowHour < 13) {
//         console.log(`Доброе утро ${firstName}`);
//     }
//     else if (nowHour < 18) {
//         console.log(`Добрый день ${firstName}`);
//     }
//     else{
//         console.log(`Добрый вечер ${firstName}`);
//     }
// }
// let userName = prompt("Введите ваше имя");
// greetingUserWithDayTime(userName);

// ДОМАШНЯЯ РАБОТА

// Задание 1. Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cube(num) {
    let res = num*num*num;
    return res;
}
console.log(cube(2) + cube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести 
// что значение задано неверно. Создать фукнцию, которая высчитывает 13% от 
// данного числа и выводит в консоль текст "Размер заработной платы за вычетом 
// налогов равен значение"

const salary = (money) => {
    money = money * 0.87;
    return money;
}
const userMoney = Number(prompt(`Сколько ты зарабатываешь?`));
if (isNaN(userMoney)) {
    console.log('Значение задано неверно');
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary(userMoney)}`);
}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
// которая определяет максимальное значение среди этих чисел

function getMaximal(num1, num2, num3) {
    if (num1 > num2, num1 > num3) {
        console.log(`Первое число ${num1} больше`);
    } else if (num2 > num1, num2 > num3) {
            console.log(`Второе число ${num2} больше`);
    } else if (num3 > num1, num3 > num2) {
        console.log(`Третье число ${num3} больше`);
    } else {
        console.log(`Числа равны`);
    }
}
getMaximal(Number(prompt("Введите первое число:")), Number(prompt("Введите второе число:")), Number(prompt("Введите третье число:")));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из 
// операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let num1 = Number(prompt("Введите первое число: "));
let num2 = Number(prompt("Введите второе число: "));

function getSum(num1, num2) {
    let sum = num1+num2;
    return sum;
}
console.log(getSum(num1, num2));

function getDif(num1, num2) {
    if (num1 > num2) {
    let dif = num1-num2;
    console.log(dif); 
    } else if (num1 < num2) {
        let dif = num2-num1;
        console.log(dif);
    } else {
        console.log("0");
    }
}
console.log(getDif(num1, num2));

function getMult(num1, num2) {
    let mult = num1*num2;
    return mult;
}
console.log(getMult(num1, num2));

function getDiv(num1, num2) {
    let div = num1/num2;
    return div;
}
console.log(getDiv(num1, num2));

