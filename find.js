const numbers = [ 12, 23, 33, 45, 6, 75, 55, 44];
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);

console.log(fives);
console.log(fivesAll);

const products = [
    {id:1 , name:'laptop', price:45000},
    {id:1 , name:'mobile', price:65000},
    {id:1 , name:'watch', price:30000},
    {id:1 , name:'tablet', price:35000},
    {id:1 , name:'phone', price:25000},
];
const cheap = products.find( product => product.price < 40000);
console.log(cheap);
