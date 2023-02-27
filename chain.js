const users =[
    {id:1, name:'abul', job: 'doctor'}
]
console.log(users[0].name);

const data = {
    count:5000,
    data:[
        {id: 1, name: 'babul',job:'leader'},
        {id: 2, name: 'dabul',job:'leader'},
    ]
}
const firstJob = data.data[0].job;
console.log(firstJob);
// console.log(data)
// console.log(data.count)
// console.log(data.data[0].job)

const user = {
    id: 5002,
    name: 'Thomas Alva Addision',
    Address: {
        street: {
            first: '35/A  kocukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        PostOffice : 'Cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.Address?.stret?.second;
console.log(userFloor);