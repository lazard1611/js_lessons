//=====================DOM======================
//__1__
/*Зная структуру html, с помощью изученных
методов получить (в консоль):
1. head
2. body
3. все дочерние элементы body и вывести их в
консоль.
4. первый div и все его дочерние узлы
а) вывести все дочерние узлы в консоль
б) вывести в консоль все дочерние узлы,
    кроме первого и последнего
Для навигации по DOM использовать методы,
    которые возвращают только элементы*/

// const docElemHead = document.head
// const docElemBody = document.body

// console.log(docElemHead);
// console.log(docElemBody);
// console.log(docElemBody.children);

// const getBodyElems = docElemBody.querySelector('div').childNodes;
// console.log(getBodyElems);

// const arrCopy = Array.from(getBodyElems);
// const arrMiddle = arrCopy.slice(1, -1);
//
// console.log(arrMiddle);

//__2__
/*
Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
    isParent(parent, child);
isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
Функция принимает только DOM объекты.*/

// function isParent(parent, child) {
//     let curentParent =  child.parentElement;
//     let isParent = false;
//
//     while (curentParent) {
//         isParent = parent === curentParent;
//
//         if (isParent) {
//             curentParent = null;
//         } else {
//             curentParent = curentParent.parentElement;
//         }
//     }
//
//     // if (isParent) {
//     //     return console.log('Этот элемет родитель');
//     // } else {
//     //     return console.log('Не родитель');
//     // }
//
//     return isParent;
// }
//
// const child = document.querySelector('mark');
// const parent = document.body.children[3];
//
// isParent(parent, child);

//__3__

// Получить список всех ссылок, которые не находятся внутри списка ul

// let allLink = document.querySelectorAll('a');
// let listLink = document.querySelector('ul');
// let arrLink = [];
//
// function getLink() {
//
//     allLink.forEach((item) => {
//         if (isParent(listLink, item)) {
//             arrLink = arrLink.push(item);
//         }
//     })
// }
// getLink();
//
// console.log(getLink());

//__4__
// Найти элемент, который находится перед и после списка ul

// let listLink = document.querySelector('ul');
// console.log(listLink.previousElementSibling);
// console.log(listLink.nextElementSibling);

// ============================Работа с атрибутами элементов=================
//__1__
// Найти параграф и получить его текстовое содержимое (только текст!)

// let parag = document.querySelector('p').textContent;
// console.log(parag);

//__2__
// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

// let node = document.querySelector('ul').nextSibling;
//
// function infoDOM(node) {
// return {
//     type: node.nodeType,
//     name: node,
//     numb: node.childNodes.length
// }
// };
//
// console.log(infoDOM(node));

//__3__
/*Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]*/

const link = document.querySelector('ul').querySelectorAll('a');

let arrLink = [];

link.forEach((item) => {
    arrLink.push(item.href);
})

console.log(arrLink);
