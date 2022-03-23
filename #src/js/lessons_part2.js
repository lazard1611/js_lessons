// =============== Пребирающие методы массивов ====================
/*1.На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
    каждый элемент которого будет хранить информацию о числе и его четности:
    [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
2.Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
3.Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
4.Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”*/

//__1__

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const newArr = arr.map(item => ({
//     digital: item,
//     odd: Boolean(item % 2)
// }));
//
// console.log(newArr);

//__2__

// const arr = [12, 4, 50, 1, 0, 18, 40];
// const newArr = arr.some(item => item === 0);
// console.log(newArr);

//__3__

// const arr = ['yes', 'hello', 'no', 'easycode', 'what'];
// const newArr = arr.every(item => item.length > 3);
// console.log(newArr);

//__4__

// const arr = [
//     {char:"a",index:12},
//     {char:"w",index:8},
//     {char:"Y",index:10},
//     {char:"p",index:3},
//     {char:"p",index:2},
//     {char:"N",index:6},
//     {char:" ",index:5},
//     {char:"y",index:4},
//     {char:"r",index:13},
//     {char:"H",index:0},
//     {char:"e",index:11},
//     {char:"a",index:1},
//     {char:" ",index:9},
//     {char:"!",index:14},
//     {char:"e",index:7}
//     ]
//
// function words(arr) {
//     const newArr = arr.sort((prev, next) => prev.index - next.index)
//
//     return newArr.map(item => item.char).join('')
// }
//
// console.log(words(arr));
