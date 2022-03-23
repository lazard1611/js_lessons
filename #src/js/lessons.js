// String---------------------

/*const firstName = 'Dmitry';
const lastName = 'Lazarev';
const age = 36;
// const str = 'Hello my name is Dmitry';

let value;
let str;*/

/*value = str.indexOf('y', 8);
value = str.includes('is');
value = str.slice(0, 10);*/

/*
str = '<ul>' +
        '<li> First name:' + firstName + '</li>' +
        '<li> Last name:' + lastName + '</li>' +
        '<li> Age:' + age + '</li>' +
    '</ul>';
// ES6

str = `
<ul>
    <li> First name: ${firstName}</li>
    <li> Last name: ${lastName}</li>
    <li> Age:${age}</li>
</ul>
`;

document.body.innerHTML = str;
*/

// Object--------------------------------

// const user = {
//     firstName: 'Dmitry',
//     age: 36,
//     isAdmin: true,
//     email: 'test@test.com',
//     'user-address': {
//         city: 'Lytsk'
//     },
//     skills: ['html', 'css', 'js']
// };

/*let value;

value = user.firstName;
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];

user.firstName = 'Lazarev';
value = user.firstName;

user.info = 'Some info';
value = user.info;

user['user-address'].city = 'Kyiv';
value = user['user-address'].city;


console.log(user);
console.log(value);*/

//Операторы сравнения--------------------

// let item = { name: 'Intel core i7', price: '100$', discount: '15%'};
//
// if (item.discount !== undefined && item.discount !== NaN && item.price!== NaN) {
//     let price = +item.price.slice(0, item.price.length - 1);
//     let discount = +item.discount.slice(0, item.discount.length - 1);
//
//     item.priceWithDiscount = (price - ((price / 100) * discount)) + '$';
//
//     console.log(item.priceWithDiscount);
// } else if (item.discount === undefined) {
//     console.log(item.price);
// };
//
// console.log(item);

// let product = {
//     name: 'Яблоко',
// price: '10$'
// };
// let price = +product.price.slice(0, product.price.length - 1);
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
//
// if (price <= max && price >= min) {
//     console.log(product.name);
// } else {
//     console.log('товар не найден');
// };

//Switch case----------------------
// let a = 'other';
// switch (a) {
//     case 'block':
//         console.log('block')
//         break;
//     case 'none':
//         console.log('none')
//         break;
//     case 'inline':
//         console.log('inline')
//         break;
//     case 'other':
//         console.log('other')
//         break;
// }

//Тернарные операторы---------------------;

// let b ;
// b = 'hidden' === b ? 'visible' : 'hidden';
// console.log(b);

// let c = 2;

// if (c === 0) {
//     c = 1;
// } else if (c < 0) {
//     c = 'less then zero';
// } else {
//     c *= 10;
// }

// c = c === 0 ? 1 : c < 0 ? 'less then zero' : c*= 10;
//
// console.log(c);

//Циклы---------------------------------------

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let str = 'Hello';
// let res = '';
// for (let i = 0; i < str.length; i++) {
//     res += str[i] + '*';
// }
// console.log(res);

// let colors = ['white', 'red', 'yellow', 'blue', 'green'];
//
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//     colors[i] = colors[i].toUpperCase();
// }
// console.log(colors);

// for (let i = 0; i < 10; i++) {
//     if (i===5) {
//         break;
//     }
//     console.log(i)
// }

// const user = [
//     {
//         name: 'Dmytro',
//         age: 36
//     },
//     {
//         name: 'Max',
//         age: 30
//     },
//     {
//         name: 'Kolij',
//         age: 25
//     },
//     {
//         name: 'Vitalik',
//         age: 27
//     },
// ]
//
// const userObj = {};
//
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i].name);
//     userObj[user[i].name] = user[i];
//
// }
// console.log(userObj);

// const user = {
//         name: 'Dmytro',
//         age: 36
//     }
//
// for (let key in user) {     //Для объектов
//     console.log(key);
//     console.log(user[key]);
// }

// for (let value of user) {       //Для массивов
//     console.log(value);
// }

//===========================Массивы==========================
/*const numArr = [1,2,3,345,656,878,87];

let value;
numbLeng = numArr.length;
value = numArr.indexOf(656); //Ищит элемент масива и возвращает значение
value = numArr.push('hello'); //Добавляет в конец массива
value = numArr.pop(); //Удаляет с конца массива и возвращает элемент
value = numArr.unshift(878); //Добавляет в начало элемент возвращает длинну
value = numArr.shift();//Удаляет с начала массива
value = numArr.slice(0, 3);//Вырезает часть массива с первого значение по 2-е, может добавлять значение(не изменяет массив)
value = numArr.splice(1, 2); //Удаляет некоторе количество элементов, может добавить элемент (меняет массив)
value = numArr.reverse();//Переворачивает массив (меняет)
value = numArr.concat(numArr);//Добавляет массив (меняет)
value = numArr.join(' '); //Меняет масиив на строку
value = 'Hello world'.split(' '); //Меняет строку в массив

console.log(numArr, value);*/

/*Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
    getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function getArray(num) {
}
getArray(10);*/

/*function getArray(num) {

    numArr = [];
    for (let i=0; i<num; i++ ) {
        numArr.push(i + 1);
    }
    return numArr;
};

console.log(getArray(10));*/

//----------------

/*Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(arr) {
}
doubleArray([1,2,3]) // [1,2,3,1,2,3]*/

/*function dubleArray(numb) {
    numbDuble = numb
    return numb.concat(numbDuble)
};

console.log(dubleArray([1,2,3]));*/
//--------

/*Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
Не забудьте про проверку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);
function changeCollection() {
}
console.log(changeCollection([1,2,3]))*/

/*function changeCollection(...array) {
  if (Array.isArray(array) === true || console.error('Введите масив')) {
      for(let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i]) === true || console.error('Введите масив')) {
              array[i].shift();
          }
      }
      return array;
  }
}

let arrFunc= changeCollection([1,2,3,4], ['a', 'b', 'c'], ['5', '6', '7']);
console.log(arrFunc);*/

//----------------------------------------------

/*Практическое задание по функциям высшего порядка
Создать функции:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

Имена функций должны быть как в примере!

Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки

// 1
function firstFunc(arr, fn) {
    if (Array.isArray(arr) || console.error('Введіть масив')) {
        const newArr = [];
        arr.forEach((item) => {
            newArr.push(fn(item));
        });

        if (fn === handler1) {
            return 'New value: ' + newArr.join('');
        } else {
            return 'New value: ' + newArr;
        }
    }
}

function handler1(el) {
    const res = el.charAt(0).toUpperCase() + el.slice(1);
    return res;
}
//
// function handler2(el) {
//     return el + '0';
// }
//
// function handler3(el) {
//     return el.name + ' is ' + el.age;
// }
//
// function handler4(el) {
//     const splitStr = el.split('');
//     const reversStr = splitStr.reverse();
//     const joinStr = reversStr.join('');
//
//     return joinStr;
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
// console.log(firstFunc([10, 20, 30], handler2) );
// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));
// console.log(firstFunc(['abs', '123'], handler4));
 */

//---------------------------------------------------------

// Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию то функция должна вернуть new Error("с произвольным сообщением.")
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

// const every = function(arr, callback, thisArg) {
//     if (Array.isArray(arr) || console.error('Введіть масив')) {
//         for (let i = 0; i < arr.length; i++) {
//             if (!callback.call(thisArg, arr[i], i, arr)) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };
//
// console.log(every([4, 3, 8, 8, 9, 10], function (num) { return num > 3}));

//-------------------------------------This-------------------------

// Вопросы к этому заданию
// 1.Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
//     const rectangle = {width:..., height:..., getSquare:...};
//
// 2.Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
//     const price = {
//         price: 10,
//         discount: '15%',
//         ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
//
// 3.Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
//     object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;
//
// 4.Создать объект “вычислитель”, у которого есть числовое свойство  “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
//     const numerator = {
//         value: 1,
//         double: function () {...},
//         plusOne: function () {...},
//         minusOne: function () {...},
//     }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3
//
// 5.Создать объект с розничной ценой и количеством продуктов.
//     Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
//
// 6.Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
//     Для этого “позаимствуйте” метод из предыдущего объекта.
// 7.Даны объект и функция:
//     let sizes = {width: 5, height: 10},
//         getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
// 8.let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

//__1__
// function getSquare() {
//     return this.width * this.height;
// }
//
// const rectangle = {
//     width: 4,
//     height: 7,
//     getSquare
// };
// console.log(rectangle.getSquare());
//__2__

// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice: function () {
//         return this.price
//     },
//     getPriceWithDiscount: function () {
//         return this.price - (parseInt(this.discount) * (this.price / 100))
//     }
//          };
// console.log(price.getPrice()); // 10
// console.log(price.getPriceWithDiscount()); // 8.5

//__3__
// function addOne() {
//     return this.height++
// }
//
// const object = {
//     height: 10,
//     addOne,
// };
// object.addOne(); // придумать свое название для метода
// console.log(object.height);

//__4__

// const numerator = {
//         value: 1,
//         double: function () {
//             this.value *= 2
//             return this
//         },
//         plusOne: function () {
//             this.value += 1
//             return this
//         },
//         minusOne: function () {
//             this.value -= 1
//             return this
//             },
//     }
//  console.log(numerator.double().plusOne().plusOne().minusOne());
// //
// console.log(numerator.value) // 3
// console.log(numerator.double()) //
// console.log(numerator.plusOne()) //
// console.log(numerator.minusOne()) //
//__5__

// function getTotalPrice() {
//     return this.price * this.number
// }

// const price = {
//     price: 10,
//     number: 15,
//     // getTotalPrice,
// };
//__6__
// const price2 = {
//     price: 16,
//     number: 6,
//     // getTotalPrice,
// };
// console.log(getTotalPrice.call(price2));

//__7__

// let sizes = {
//         width: 5,
//         height: 10
//     },
//
// getSquare = function () {return this.width * this.height};
//
// console.log(getSquare.call(sizes));

//__8__
// let element = {
//     height: 25,
//     getHeight: function () {
//         return this.height;
//     }
// };
// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight()); // undefined
// // Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

//=======================Стрелочные функции========================

// Вопросы к этому заданию
// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
// function sum() {
//     const params = Array.prototype.slice.call(arguments);
//
//     // if (!params.length) return 0;
//     // return params.reduce(function (prev, next) { return prev + next; });
// }

// const sum = (...arg) => {
//     if (!arg.length) return 0;
//     return arg.reduce((prev, next) => prev + next);
// }
//
// const res = sum(1, 2, 3, 4); // 10
//
// sum(); // 0
// console.log(res);

// что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//     Переделать функцию с использованием функции-стрелки
// function convertToObject(num) {
//     const obj = {
//         value: num,
//         isOdd: Boolean(num % 2)
//     }
//     return obj;
// }

// const convertToObject = (num) => {
//     const obj = {
//         value: num,
//         isOdd: Boolean(num % 2)
//     }
//     return obj;
// }
//
// const res = convertToObject(4);
// console.log(res);
