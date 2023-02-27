const student = {
    name: 'kolin Uddin',
    age:'14',
    class : 'Ten',
    marks : {
        math: 67,
        physics: 89,
        chemistry: 87,
},
}

const marks = student.marks;
const math = student.marks.math;
// console.log(math);

const  chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject]

// const Marks2 = student.marks.subject
// must be include in [] not .variable
const marks2 = student.marks[subject];
console.log(marks2)