function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  // Проверяем не отчислен ли студент
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  // Если свойства marks не существует или оно пустое, возвращаем 0
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  
  // Вычисляем сумму оценок
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  
  // Возвращаем среднее арифметическое
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  // Удаляем свойства subject и marks
  delete this.subject;
  delete this.marks;
  
  // Добавляем свойство excluded с причиной отчисления
  this.excluded = reason;
}
