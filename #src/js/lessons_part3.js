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

function isParent(parent, child) {
    let parentColection =  parent.children

    for(let elem of parentColection) {
        // console.log(elem);
    }


    if (parent.querySelector(child) === child ) {
        return console.log('Этот элемет родитель');
    } else {
        return console.log('Не родитель');
    }
}

isParent(document.body.children[3], document.querySelector('mark'));

console.log(document.querySelector('mark').parentElement);

