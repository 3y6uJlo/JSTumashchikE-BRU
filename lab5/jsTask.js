'use strict'

/* - Самостоятельно почитать про this в стрелочных функциях и про стрелочные функции в целом
- Самостоятельно почитать про механизмы обработки ошибок в джс (try/catch, throw Error)
1) Realize pipe pattern
const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;
const res = pipe(
  multiplyTwo,
  minusFour
)(10);
console.log(res); // 16
2) Realize memo pattern
const sum = (a,b) => a + b;
const memedSum = memo(sum);
console.log(memedSum(1,2));
console.log(memedSum(1,2)); // second time there is no calculation, we get answer from cache
3) Напишите свой полифил на фуницию apply
4) codewars task#1 https://www.codewars.com/kata/586909e4c66d18dd1800009b
5) codewars task#2 https://www.codewars.com/kata/523f5d21c841566fde000009
6) chaining pattern learn - read */

// Pipe 

function MyPipe(...rest) {
    return rest.reduce((prevfn, fn) => {
        return pipe(prevfn, fn)
    });
    function pipe(fn1, fn2) {
        return function (x) {
            return fn2(fn1(x));
        }
    }
}
const multiplyTwo = (n) => n * 2;
const minusFour = (n) => n - 4;
const res = MyPipe(
    multiplyTwo,
    minusFour,
)(10);
console.log(res);


//Memo

function memo(fn) {
    const cache = new Map();
    return (...rest) => {
        if (cache.has(rest.toString())) {
            console.log(':D I remember this! Take result from cache');
            return cache.get(rest.toString());
        }
        console.log('>:( No data in cache i need to calculate result');
        const result = fn(...rest);
        cache.set(rest.toString(), result);
        return result;
    }
}
const sum = (a, b, c) => a + b + c
const memedSum = memo(sum);
console.log(memedSum(1, 2, 3));
console.log(memedSum(1, 2, 3));

//Polifil

Function.prototype.Apply = function (context, args){
    context.fnToCall = this;
    let result = context.fnToCall(...args);
    return result;
}
function a (a,b,c){
    console.log(this.name);
}
let obj = {
    name:'Denis',
    age:18
};
a.Apply(obj,[2, 4, 5])

//task1
function multiplyAll(arr) {
    return function (multiplier) {
        return arr.map(el => el * multiplier)
    }
}
console.log(multiplyAll([1, 2, 3])(2));

//task2

const arrayDiff = (a, b) => {
    return a.filter(element => !b.includes(element))
}
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));