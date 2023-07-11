


let mathsMarks  = parseInt(prompt("Enter Mathematics Marks : " ));
let physicsMarks = parseInt(prompt("Enter Physics Marks : "));
const chemistryMarks = parseInt(prompt("Enter Chemistry Marks : "));

var totalMarks = (mathsMarks + physicsMarks + chemistryMarks);
alert(`Sum Of Marks : ${totalMarks}`);

let averageMarks = totalMarks/3;
alert(`Average Marks : ${averageMarks}`);

console.log(`Sum Of Marks : ${totalMarks}`);
console.log(`Average Marks : ${averageMarks}`);
console.log(`Mathematics Marks : ${mathsMarks}`);
console.log(`Physics Marks : ${physicsMarks}`);
console.log(`Chemistry Marks : ${chemistryMarks}`);

if (averageMarks>90) {
    console.log(`${averageMarks} : Your "Grade A"`);
} else if (averageMarks>70<90) {
    console.log(`${averageMarks} : Your "Grade B"`);
} else {
    console.log(`${averageMarks} : Your "Grade C"`);
}
