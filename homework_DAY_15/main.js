const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// 1. Viết function tính thứ hạng trung bình của cả lớp

const calcAverage = (grades) => {
  let sum = 0;
  grades.forEach((grade) => {
    sum = sum + grade.grade;
  });
  return sum / grades.length;
};

// console.log(calcAverage(grades))

// 2. Viết function tính thứ hạng trung bình của nam trong lớp

const calcAverageOfMale = (grades) => {
  let sum = 0;
  let count = 0;
  grades.forEach((grade) => {
    if (grade.sex == "M") {
      sum = sum + grade.grade;
      count++;
    }
  });
  return sum / count;
};

// console.log(calcAverageOfMale(grades))

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp

const calcAverageOfFemale = (grades) => {
  let sum = 0;
  let count = 0;
  grades.forEach((grade) => {
    if (grade.sex == "F") {
      sum = sum + grade.grade;
      count++;
    }
  });
  return sum / count;
};

// console.log(calcAverageOfFemale(grades))

//4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

const findMaxGradeMale = (grades) => {
  let arr = [];
  grades.forEach((grade) => {
    if (grade.sex == "M") {
      arr.push(grade.grade);
    }
  });
  return grades.filter(
    (value) => value.grade == Math.max(...arr) && value.sex == "M"
  );
};

console.log(findMaxGradeMale(grades));

//5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

const findMaxGradeFemale = (grades) => {
  let arr = [];
  grades.forEach((grade) => {
    if (grade.sex == "F") {
      arr.push(grade.grade);
    }
  });
  return grades.filter(
    (value) => value.grade == Math.max(...arr) && value.sex == "F"
  );
};

//   console.log(findMaxGradeFemale(grades));

//6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp

const findMinGradeMale = (grades) => {
  let arr = [];
  grades.forEach((grade) => {
    if (grade.sex == "M") {
      arr.push(grade.grade);
    }
  });
  return grades.filter(
    (value) => value.grade == Math.min(...arr) && value.sex == "M"
  );
};

// console.log(findMinGradeMale(grades));

//7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp

const findMinGradeFemale = (grades) => {
  let arr = [];
  grades.forEach((grade) => {
    if (grade.sex == "F") {
      arr.push(grade.grade);
    }
  });
  return grades.filter(
    (value) => value.grade == Math.min(...arr) && value.sex == "F"
  );
};

// console.log(findMinGradeFemale(grades));

//8. Viết function thứ hạng cao nhất của cả lớp

const findMaxGrade = (grades) => {
  let arr = [];
  grades.forEach((grade) => arr.push(grade.grade));
  return grades.filter((value) => value.grade == Math.max(...arr));
};

// console.log(findMaxGrade(grades));

//9. Viết function thứ hạng thấp nhất của cả lớp

const findMinGrade = (grades) => {
  let arr = [];
  grades.forEach((grade) => arr.push(grade.grade));
  return grades.filter((value) => value.grade == Math.min(...arr));
};

// console.log(findMinGrade(grades));

//10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp

const findFemale = (grades) => {
  return grades.filter((grade) => grade.sex == "F");
};
// console.log(findFemale(grades))
//11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái

const sortingName = (grades) => {
  for (let i = 0; i < grades.length - 1; i++) {
    for (let j = i + 1; j < grades.length; j++) {
      if (grades[i].name > grades[j].name) {
        [grades[i], grades[j]] = [grades[j], grades[i]];
      }
    }
  }
  return grades;
};

// console.log(sortingName(grades))

//12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

const sortingGrades = (grades) => {
    for (let i = 0; i < grades.length - 1; i++) {
      for (let j = i + 1; j < grades.length; j++) {
        if (grades[i].grade < grades[j].grade) {
          [grades[i], grades[j]] = [grades[j], grades[i]];
        }
      }
    }
    return grades;
  };
  
//   console.log(sortingGrades(grades))

// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”

const findFemaleStartWithJ = (grades) => {
    return grades.filter((grade) => grade.sex =="F" && grade.name.startsWith("J"))
}

// console.log(findFemaleStartWithJ(grades))

// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

const top5Greatest = (grades) =>{
    return sortingGrades(grades).slice(0,5);
}
console.log(top5Greatest(grades))