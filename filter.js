const numbers = [ 12, 23, 33, 45, 6, 78, 42, 44];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(number => number < 10);
const even = numbers.filter(number => number % 2 === 0);
// console.log(even);


const products = [
    {id:1 , name:'laptop', price:45000},
    {id:1 , name:'mobile', price:65000},
    {id:1 , name:'watch', price:40000},
    {id:1 , name:'tablet', price:80000},
    {id:1 , name:'phone', price:95000},
];


// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 100);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);