// Task 1
console.log("\nTask 1");
const propsCount = (currentObject) => {
  let count = 0;
  for(value in currentObject) {
    count++;
  }
  return count;
};

const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web development"
};

console.log(`Given object has ${propsCount(mentor)} properties`);

// Task 2
console.log("\nTask 2");
const car = {
  name: "Toyota",
  model: "Camry",
  year: 2022,
  type: "Sedan",
  state: "New"
};

const showProps = (obj) => {
  console.log(Object.keys(obj));
};

showProps(car);

// Task 3
console.log("\nTask 3");
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    console.log(`${this.surname} ${this.name} ${middleName}`);
  }
  showCourse() {
    console.log(`Current course: ${new Date().getFullYear() - this.year}`);
  }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
stud1.showFullName("Petrovych"); // Petrenko Petro Petrovych
stud1.showCourse(); //Current course: 6

// Task 4
console.log("\nTask 4");
class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  salaryWithExperience() {
    return this.dayRate * this.workingDays * this.experience;
  }

  showSalary() {
    console.log(`${this.fullName}'s salary: ${this.dayRate * this.workingDays}`);
  }

  showSalaryWithExperience() {
    console.log(`${this.fullName}'s salary: ${this.salaryWithExperience()}`);
  }

  get experience() {
    return this.#experience;
  }

  set experience(value) {
    this.#experience = Math.abs(value);
  }

  static sortedSalary(...employees) {
    employees.sort((a, b) => {
      const salaryA = a.salaryWithExperience();
      const salaryB = b.salaryWithExperience();
      return salaryA - salaryB;
    });

    employees.forEach((employee) => {
      const salary = employee.salaryWithExperience();
      console.log(`${employee.fullName}: ${salary}`);
    });
  }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
worker2.showSalary();
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.showSalary();
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
worker3.showSalaryWithExperience();

console.log("\nSorted salary:");
Worker.sortedSalary(worker1, worker2, worker3);

// Task 5
console.log("\nTask 5");
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return this.constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(a, b, c) {
    super();
    // this.a = a;
    // this.b = b;
    // this.c = c;
    Object.assign(this, { a, b, c });           // destructuring assignment
  }
  getArea() {
      let perimeter = (this.a + this.b + this.c) / 2;
      return Math.sqrt(perimeter * (perimeter - this.a) * (perimeter - this.b) * (perimeter - this.c));
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea() {
    return this.a ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const handleFigures = (figures) => {
  let total = 0;
  for(figure of figures) {
    total += figure.getArea();
    console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
  }
  console.log(total);
};

const figures = [new Triangle(3, 4, 5), new Square(7), new Circle(5)];
handleFigures(figures);
