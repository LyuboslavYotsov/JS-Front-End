function printSchoolRegister(input) {
  const studentsList = [];
  for (const studentString of input) {
    const studentInfo = studentString.split(",");

    const studentName = studentInfo[0].split(": ")[1];
    let studentGrade = studentInfo[1].split(": ")[1];
    const studentScore = studentInfo[2].split(": ")[1];

    if (studentScore > 3) {
      studentGrade++;
      studentsList.push({
        name: studentName,
        grade: studentGrade,
        score: studentScore,
      });
    }
  }

  const sortedStudents = studentsList.sort((a, b) => a.grade - b.grade);

  let lastGrade = null;
  sortedStudents.forEach((student) => {
    let initialGrade = student.grade;
    const studentsInGrade = sortedStudents
      .filter((s) => s.grade === initialGrade)
      .map((s) => s.name);
    const studentsScores = sortedStudents
      .filter((s) => s.grade === initialGrade)
      .map((s) => s.score);

    let averageScore =
      studentsScores.reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0) / studentsInGrade.length;

    if (lastGrade !== initialGrade) {
      console.log(`${initialGrade} Grade`);
      console.log(`List of students: ${studentsInGrade.join(", ")}`);
      console.log(
        `Average annual score from last year: ${averageScore.toFixed(2)}`
      );
      lastGrade = initialGrade;
      console.log();
    }
  });
}

printSchoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
