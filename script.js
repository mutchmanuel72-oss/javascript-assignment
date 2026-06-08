// =========================
// Task 1 — Variables & Data Types
// =========================

// Variables that can change
let firstName = "Emmanuel";
let lastName = "Igboanugo";
let age = 20;
let isEnrolled = true;
let graduationDate = null;

// Variables that should not change
const studentId = "STU-00123";
const gpa = 3.8;

// Log all variables
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

// Reassign firstName to a nickname
firstName = "Emmy";

console.log("Updated First Name:", firstName);



// =========================
// Task 2 — Operators
// =========================

let totalScore = 0;
console.log("Initial Score:", totalScore);

// Add first test score
totalScore += 45;
console.log("After First Test:", totalScore);

// Add second test score
totalScore += 30;
console.log("After Second Test:", totalScore);

// Deduct 5 marks
totalScore -= 5;
console.log("After Deduction:", totalScore);

// Double the score
totalScore *= 2;
console.log("After Bonus Round:", totalScore);

// Add 1 using increment operator
totalScore++;
console.log("After Increment:", totalScore);

// Find remainder when divided by 7
console.log("Remainder when divided by 7:", totalScore % 7);



// =========================
// Task 3 — Type Conversion
// =========================

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// parseInt() is used because studentAge should be a whole number
studentAge = parseInt(studentAge);

// parseFloat() is used because examScore contains decimal values
examScore = parseFloat(examScore);

// Number() is used for general number conversion
passMark = Number(passMark);

// String() is used to convert a number into text
studentName = String(studentName);

// Log values and types
console.log("studentAge:", studentAge, "| Type:", typeof studentAge);
console.log("examScore:", examScore, "| Type:", typeof examScore);
console.log("passMark:", passMark, "| Type:", typeof passMark);
console.log("studentName:", studentName, "| Type:", typeof studentName);

// Compare examScore and passMark
console.log("Did the student pass?", examScore > passMark);



// =========================
// Task 4 — Conditional Statements
// =========================

// Part A — if / else if / else

// Test 1
let score = 73;

if (score >= 70) {
  console.log(`Score: ${score} | Grade: A — Distinction`);
} else if (score >= 60) {
  console.log(`Score: ${score} | Grade: B — Merit`);
} else if (score >= 50) {
  console.log(`Score: ${score} | Grade: C — Pass`);
} else if (score >= 40) {
  console.log(`Score: ${score} | Grade: D — Near Pass`);
} else {
  console.log(`Score: ${score} | Grade: F — Fail`);
}


Test 2
score = 58;

if (score >= 70) {
  console.log(`Score: ${score} | Grade: A — Distinction`);
} else if (score >= 60) {
  console.log(`Score: ${score} | Grade: B — Merit`);
} else if (score >= 50) {
  console.log(`Score: ${score} | Grade: C — Pass`);
} else if (score >= 40) {
  console.log(`Score: ${score} | Grade: D — Near Pass`);
} else {
  console.log(`Score: ${score} | Grade: F — Fail`);
}


Test 3
score = 35;

if (score >= 70) {
  console.log(`Score: ${score} | Grade: A — Distinction`);
} else if (score >= 60) {
  console.log(`Score: ${score} | Grade: B — Merit`);
} else if (score >= 50) {
  console.log(`Score: ${score} | Grade: C — Pass`);
} else if (score >= 40) {
  console.log(`Score: ${score} | Grade: D — Near Pass`);
} else {
  console.log(`Score: ${score} | Grade: F — Fail`);
}



// =========================
// Part B — switch statement
// =========================

// Test 1
let monthNumber = 6;

switch (monthNumber) {
  case 1:
    console.log("January");
    break;

  case 2:
    console.log("February");
    break;

  case 3:
    console.log("March");
    break;

  case 4:
    console.log("April");
    break;

  case 5:
    console.log("May");
    break;

  case 6:
    console.log("June");
    break;

  case 7:
    console.log("July");
    break;

  case 8:
    console.log("August");
    break;

  case 9:
    console.log("September");
    break;

  case 10:
    console.log("October");
    break;

  case 11:
    console.log("November");
    break;

  case 12:
    console.log("December");
    break;

  default:
    console.log("Invalid month number");
}


// Test 2
// monthNumber = 11;

// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("February");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   case 4:
//     console.log("April");
//     break;

//   case 5:
//     console.log("May");
//     break;

//   case 6:
//     console.log("June");
//     break;

//   case 7:
//     console.log("July");
//     break;

//   case 8:
//     console.log("August");
//     break;

//   case 9:
//     console.log("September");
//     break;

//   case 10:
//     console.log("October");
//     break;

//   case 11:
//     console.log("November");
//     break;

//   case 12:
//     console.log("December");
//     break;

//   default:
//     console.log("Invalid month number");
// }


// Test 3 (Invalid Value)
// monthNumber = 15;

// switch (monthNumber) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("February");
//     break;

//   case 3:
//     console.log("March");
//     break;

//   case 4:
//     console.log("April");
//     break;

//   case 5:
//     console.log("May");
//     break;

//   case 6:
//     console.log("June");
//     break;

//   case 7:
//     console.log("July");
//     break;

//   case 8:
//     console.log("August");
//     break;

//   case 9:
//     console.log("September");
//     break;

//   case 10:
//     console.log("October");
//     break;

//   case 11:
//     console.log("November");
//     break;

//   case 12:
//     console.log("December");
//     break;

//   default:
//     console.log("Invalid month number");
// }