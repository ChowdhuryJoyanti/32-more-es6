const numbers = [12,56,87,56,44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3)
// console.log(half)
// console.log(thirds)

const friends = ['Tom Hanks', 'Tom Cruse' , 'Tom Brady ', 'Tomn Solaiman']
const firstLetters =friends.map(friend => friend[2]);
// console.log(firstLetters);
const nameLength = friends.map(friend => friend.length);
// console.log(nameLength);

const products = [
    {id:1 , name:'laptop', price:45000},
    {id:1 , name:'mobile', price:65000},
    {id:1 , name:'watch', price:40000},
    {id:1 , name:'tablet', price:80000},
    {id:1 , name:'phone', price:95000},
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product =>product.name);
const price = products.map(p =>p.price);
console.log(price);