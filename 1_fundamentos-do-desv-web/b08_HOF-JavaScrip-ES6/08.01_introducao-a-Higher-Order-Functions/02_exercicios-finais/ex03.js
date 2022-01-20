const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const score = (rightAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') return 0;
  return rightAnswer === studentAnswer ? 1 : -0.5;
}

const returnStudentGrade = (arrayRight, arrayStudent, action) => {
  let studentGrade = 0;
  arrayRight.forEach((answer, index) => {
    studentGrade += action(answer, arrayStudent[index]);
  });
  return studentGrade;
};

console.log(returnStudentGrade(rightAnswers, studentAnswers, score));
