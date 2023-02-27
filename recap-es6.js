// 1.var let const
// break up with var
const numbers =[12,546,45,98];
let salary = 450;
salary= 455;


// 2.default parameters
function calculateSalary(salary ,tax,bonus){
    const reamining = salary - salary*tax;
    const total = reamining + bonus;
    return total;
}
// 3.template string
const elementHtml=`
    <div>
    <h3> Name:  </h3>
    <p> Address: </p>
    <p> Salary: ${calculateSalary(1000,0,0)}</p>
    <p> Others:${numbers[2]} </p>

    </div>

`
// 4.Arrow function
const doubleIt = x => x * 2;
const calculateSalary2= (salary, tax,bonus) => salary - salary * tax + bonus;
// 5.spread
const ages = [31,33,,35,25,27,33,39,38];
const newAges =[...ages,23,34,46,30,20,];

// destruring

const{x,y, z, ...c} = {x: 45, y: 12, z: 33, name:'Sakib Al Hasan',salary: 45000, }
const [a,b,...r] = [31,33,,35,25,27,33,39,38];