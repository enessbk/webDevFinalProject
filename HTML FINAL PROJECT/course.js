class Course {
    constructor(courseCode, courseName, instructor) {
      this.courseCode = courseCode;
      this.courseName = courseName;
      this.instructor = instructor;
      this.enrolledStudents = [];
    }
  
    // Method to enroll a student in the course
    enrollStudent(student) {
      this.enrolledStudents.push(student);
      console.log(`${student.name} has been enrolled in the course: ${this.courseName}`);
    }
  
    // Method to display course information
    displayInfo() {
      console.log(`Course Information:
        Course Code: ${this.courseCode}
        Course Name: ${this.courseName}
        Instructor: ${this.instructor}
        Schedule: ${this.schedule}
        Enrolled Students: ${this.enrolledStudents.map(student => student.name).join(', ')}`);
    }
  }
  