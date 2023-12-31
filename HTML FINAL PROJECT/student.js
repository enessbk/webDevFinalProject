class Student {
    constructor(name, surname, studentId,kimlik) {
      this.name = name;
      this.surname = surname;
      this.studentId = 'S' + studentId;
      this.kimlik = kimlik
      this.enrolledClasses = [];
      this.enrolledDepartments = [];
    }
  
    // Method to enroll in a class
    enrollInClass(className) {
      this.enrolledClasses.push(className);
      console.log(`${this.name} has enrolled in the class: ${className}`);
    }
    // Method to enroll in a class
    enrollInDepartment(departmentName) {
        this.enrolledDepartments.push(departmentName);
        console.log(`${this.name} has enrolled in the class: ${departmentName}`);
      }
  
    // Method to display student information
    displayInfo() {
      console.log(`Student Information:
        Name: ${this.name}
        Surname: ${this.surname}
        Student ID: ${this.studentId}
        Kimlik: ${this.kimlik}`);
    }
    
  }

