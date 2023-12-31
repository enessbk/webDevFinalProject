class Department {
    constructor(departmentCode, departmentName, headOfDepartment) {
      this.departmentCode = departmentCode;
      this.departmentName = departmentName;
      this.headOfDepartment = headOfDepartment;
      this.courses = [];
      this.students = [];
    }
  
    // Method to add a course to the department
    addCourse(course) {
      this.courses.push(course);
      console.log(`Course "${course.courseName}" added to the department "${this.departmentName}"`);
    }
  
    // Method to display department information
    displayInfo() {
      console.log(`Department Information:
        Department Code: ${this.departmentCode}
        Department Name: ${this.departmentName}
        Head of Department: ${this.headOfDepartment}
        Courses: ${this.courses.map(course => course.courseName).join(', ')}`);
    }
  }