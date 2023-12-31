// to inisilize the student list with 80 students
for (let i = 2; i <= 80; i++) {
    const newStudent = new Student(`Name${i}`, `Surname${i}`, `${i}`, `${i}00${i}`);
    STUDENTS_LIST.push(newStudent);
}
// initilizzing the students count box
let studentCount = document.getElementById('students-count-box');
studentCount.innerHTML = 'student<br>' + STUDENTS_LIST.length;

// initializing course count box
let courseCount = document.getElementById('courses-count-box');
courseCount.innerHTML = 'courses<br>' + COURSE_LIST.length;

// initializing the student count so that later when we add a student we dont give him already takken student id
let studentsCount = STUDENTS_LIST.length;





// to add event listener on the add department box when its clicked once
const addDepartmentButton = document.getElementById('add-department-box');
addDepartmentButton.addEventListener('click', addingDepartment);

// this function will be trigered when add departmnet clicked
// a hidden div will show up with input boxes and button its will handel the button events
// cancel button to add hidden class to the div again
// save its will handel saving and reading input boxes and more
function addingDepartment() {
  console.log('add department box clicked');
  const addDepartmentInputFilling = document.getElementById('add-department-input-filling');
  addDepartmentInputFilling.classList.remove('hidden');
  let cancel = document.getElementById('cancel-add-department');
  cancel.addEventListener('click', function(){addDepartmentInputFilling.classList.add('hidden');});
  let save = document.getElementById('save-add-department');
  save.addEventListener('click', addDepartmentF);
}
// the function resposible of saving input and creating a student exucuted when the save button clicked
function addDepartmentF() {
    // Assuming you have input fields for course details
    const departmentCodeInput = document.getElementById('department-code');
    const departmentNameInput = document.getElementById('department-name');
    const headOfDepartmentInput = document.getElementById('head-of-department');
  

    // Get values from input boxes
    const departmentCode = departmentCodeInput.value;
    const departmentName = departmentNameInput.value;
    const headOfDepartment = headOfDepartmentInput.value;
  
    // Check if any of the fields are empty
    if (!departmentCode.trim() || !departmentName.trim() || !headOfDepartment.trim()) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // Create a new Course object
    const newDepartment = new Department(departmentCode, departmentName, headOfDepartment);
  
    // Add the new department to the DEPARTMENT_LIST
    DEPARTMENT_LIST.push(newDepartment);
  
    // Display for log
    newDepartment.displayInfo();

    // Clear input for the next adding
    departmentCodeInput.value = '';
    departmentNameInput.value = '';
    headOfDepartmentInput.value = '';

    // update department count at the home page
    let departmentCount = document.getElementById('departments-count-box');
    departmentCount.innerHTML = 'departments<br>' + DEPARTMENT_LIST.length;

    // department input filling box hidden again
    const container = document.getElementById('add-department-input-filling');
    container.classList.add('hidden');
  }










 // add course button clicked
 const addCourseButton = document.getElementById('add-course-box');
 addCourseButton.addEventListener('click', addingCourse);

 // handel course adding show an input filling 
 // read data and handell constraint not empty
 // cancel button to hide again
function addingCourse(event) {
  console.log('add course box clicked');
  const addCourseInputFilling = document.getElementById('add-course-input-filling');
  addCourseInputFilling.classList.remove('hidden');
  let cancel = document.getElementById('cancel-add-course');
  cancel.addEventListener('click', function(){addCourseInputFilling.classList.add('hidden');});
  let save = document.getElementById('save-add-course');
  save.addEventListener('click', addCourseF);
}

function addCourseF() {
    //course input fields
    const courseCodeInput = document.getElementById('course-code');
    const courseNameInput = document.getElementById('course-name');
    const instructorInput = document.getElementById('instructor');
  

    // Get values from input
    const courseCode = courseCodeInput.value;
    const courseName = courseNameInput.value;
    const instructor = instructorInput.value;
  
    // Check if empty
    if (!courseCode.trim() || !courseName.trim() || !instructor.trim()) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // Create a new Course
    const newCourse = new Course(courseCode, courseName, instructor);
    // Add new course to the COURSE_LIST
    COURSE_LIST.push(newCourse);
  

    // for log
    newCourse.displayInfo();
    // Clear input fields
    courseCodeInput.value = '';
    courseNameInput.value = '';
    instructorInput.value = '';

    // update the courses count at the home page
    let courseCount = document.getElementById('courses-count-box');

    courseCount.innerHTML = 'courses<br>' + COURSE_LIST.length;


    // course input filling box hidden
    const container = document.getElementById('add-course-input-filling');
    container.classList.add('hidden');
  }
  






  // handel the adding of student and triger another event like saving and cancel
  function addingStudent(event) {
    console.log('clicked');
    const addStudent = document.getElementById('st');
    addStudent.classList.remove('hidden');
    let cancel = document.getElementById('cancel');
    cancel.addEventListener('click', function(){addStudent.classList.add('hidden');});
    let save = document.getElementById('save');
    save.addEventListener('click', addStudentF);
  }
  // when save clicked this function execute its handel the data entry creation of students object pushing to the list
function addStudentF() {
    const addStudent = document.getElementById('st');
    let name = document.getElementById('studentName');
    let surname = document.getElementById('studentSurname');
    let studentid = document.getElementById('studentid');
    let kimlik = document.getElementById('kimlik');
    addStudent.classList.add('hidden');

    // Check if name is null or empty
    if (!name.value.trim()) {
        alert('name cannot be null or empty. Please enter a valid value.');
        return; // Stop
    }

    // Check if surname is null or empty
    if (!surname.value.trim()) {
        alert('name cannot be null or empty. Please enter a valid value.');
        return;
    }

    // Check if kimlik is null or empty
    if (!kimlik.value.trim()) {
        alert('Kimlik cannot be null or empty. Please enter a valid value.');
        return;
    }

    // Check if kimlik is not a valid integer
    if (isNaN(parseInt(kimlik.value))) {
        alert('Kimlik must be a valid integer. Please enter a numeric value.');
        return;
    }

    const existingStudent = STUDENTS_LIST.find(student => student.kimlik === kimlik.value);
    // Check if kimlik already belongs to another student
    if (existingStudent) {
        alert('Kimlik already belongs to another student. Please enter a unique value.');
        return;
    }
    // craet new student object
    const studentOb = new Student(name.value, surname.value, studentsCount, kimlik.value);
    // pus to the list
    STUDENTS_LIST.push(studentOb);

    // update the students count on the home page
    let studentCount = document.getElementById('students-count-box');
    studentCount.innerHTML = 'student<br>' + STUDENTS_LIST.length;
    
    // for log to see wich students was added
    studentOb.displayInfo();
    studentsCount += 1;

     // Show success modal
  //showSuccessModal(studentOb);
}

/* function showSuccessModal(student) {
    const successModal = document.getElementById('success-modal');
    const studentInfo = document.getElementById('student-info');
  
    // Set student info in the modal
    studentInfo.innerHTML = `Student Information:<br>
      Name: ${student.name}<br>
      Surname: ${student.surname}<br>
      Student ID: ${student.studentId}<br>
      Kimlik: ${student.kimlik}`;
  
    // Display the modal
    successModal.style.display = 'block';
  
    // Close the modal after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      successModal.style.display = 'none';
    }, 5000);
  } */

let students = [];

const addStudentBox = document.getElementById('add-student-box');
addStudentBox.addEventListener('click', addingStudent);









// if student count box clicked will show student info in boxes and when thoe boxes clicked will 
// show more details and more functionality
const studentCountBox = document.getElementById('students-count-box');
studentCountBox.addEventListener('click', showStudentsList);

// this function show all the student list
function showStudentsList(){
    // the conatiner where its hold everything the list the search bar
    const bigContainer = document.getElementById('show-box-container');
    bigContainer.classList.remove('hidden');
    // the container where its hold the boxes list only
    const container = document.getElementById('show-box');
    container.innerHTML='';
    // if the container get double clicked all will be hidden again
    bigContainer.addEventListener('dblclick',function(){bigContainer.classList.add('hidden');})
    // the for loop create a boxes of every student in the list 
    // and write the info of student  in the box
    // add event listener to show the student info in details 
    // for each box
    for (let i = 0; i < STUDENTS_LIST.length; i++) {
        const student = STUDENTS_LIST[i];
        const studentBox = document.createElement('div');
        studentBox.innerHTML= student.studentId + '<br>' + student.name + '<br>' + student.surname;
        container.appendChild(studentBox);
        studentBox.addEventListener('click',function () {showStudentInfo(student);bigContainer.classList.add('hidden')});
        console.log(`Name: ${student.name}, Surname: ${student.surname}, Student ID: ${student.studentId}`);
        
    }
    // this handel the search functionality in the search bar 
    const searchBarInput = document.getElementById('searchBarInput');
        const searchButton = document.getElementById('search-bar-button');
        searchButton.addEventListener('click', function () {
            searchStudents(container,searchBarInput);
        });
}

// search student func delete students box list
// and try to find the student by kimlik or name or surname...
// the function handel that is findStudents wich return list of student object
// then th function apppen those student object in inside abox in the container
function searchStudents(container,key){
    container.innerHTML='';
    const list = findStudents(key.value);
    for (let i = 0; i < list.length; i++){
        const student = list[i];
        const studentBox = document.createElement('div');
        studentBox.innerHTML= student.studentId + '<br>' + student.name + '<br>' + student.surname;
        container.appendChild(studentBox);
        console.log('button clicked student='+student.kimlik);
        student.displayInfo();
    }
    
}
// return a list  of students object
function findStudents(key){
    const list = []; 
    for (let i = 0; i < STUDENTS_LIST.length; i++){
        const student = STUDENTS_LIST[i];
        if(key === student.studentId || key === student.kimlik || key === student.name || key === student.surname ){
                list.push(student);
            }
    }return list;
}

// callled when one of the boxes clicked
function showStudentInfo(student){
    // hide the student list
    const studentInfoContainer = document.getElementById('student-update-container');
    studentInfoContainer.classList.remove('hidden');
    // get the input boxes by there ids 
    const studentNameElement = document.getElementById('student-info-name');
    const studentSurnameElement = document.getElementById('student-info-surname');
    const studentIdElement = document.getElementById('student-info-id');
    const studentKimlikElement = document.getElementById('student-info-kimlik');
    const studentDepartmentElement = document.getElementById('student-info-department');
    const studentCourseElement = document.getElementById('student-info-course');

    // Update the content with the selected student object information
    studentNameElement.value =student.name;
    studentSurnameElement.value =student.surname;
    studentIdElement.value =student.studentId;
    studentKimlikElement.value =student.kimlik;
    // update the course list if the student enroled in a course
    const addedCoursesContainer = document.getElementById('added-courses');
    addedCoursesContainer.innerHTML='';
            const addedCourseBox = document.createElement('button');
            const addedCourseBoxDeleteButton = document.createElement('button');
            addedCourseBoxDeleteButton.textContent = 'delete';
            
            for (let i = 0; i < student.enrolledClasses.length; i++){
            addedCourseBox.textContent = student.enrolledClasses[i].courseName;
            addedCoursesContainer.appendChild(addedCourseBox);
            addedCoursesContainer.appendChild(addedCourseBoxDeleteButton);
            }
    // now cancel button to hide the student show info conatiner
    const cancelUpdateButton = document.getElementById('cancel-update-student-button');
    cancelUpdateButton.addEventListener('click', function () {
        studentInfoContainer.classList.add('hidden')});
        // update button handel the student update 
        // ensure that there is no emptyness in the input filling
        const updateStudentButton = document.getElementById('update-student-button');
        updateStudentButton.addEventListener('click', function () {

            // Check if any of the required fields are empty
            if (!studentNameElement.value.trim() || !studentIdElement.value.trim() || !studentIdElement.value.trim()) {
                alert('Please fill in all the required fields. they sould not be empty.');
                return;
                }
            // Check if kimlik is not a valid integer
            if (isNaN(parseInt(studentKimlikElement.value))) {
                alert('Kimlik must be a valid integer. Please enter a numeric value.');
                return;
            }

            const existingStudent = STUDENTS_LIST.find(student => student.kimlik === studentKimlikElement.value);
            // Check if kimlik already belongs to another student not the student we updating
            if(student.kimlik !== studentKimlikElement.value){
                if (existingStudent) {
                    alert('Kimlik already belongs to another student. Please enter a unique value.');
                    return; 
                }}
            // update the student info by the input filling
            student.name = studentNameElement.value;
            student.surname = studentSurnameElement.value;
            student.studentId=studentIdElement.value;
            student.kimlik = studentKimlikElement.value ;
            studentInfoContainer.classList.add('hidden');
            });
            // this button is for fiding the course then adding i
    const addCourseButton = document.getElementById('add-course-button');
    addCourseButton.addEventListener('click', function () {
        if(!studentCourseElement.value.trim()){
            alert('Please fill in the required field.should not be empty.');
            return; 
        }
        // fiding the course by code or name
        const existingCourseCode = COURSE_LIST.find(course => course.courseCode === studentCourseElement.value);
        const existingCourseName = COURSE_LIST.find(course => course.courseName === studentCourseElement.value);
        const foundCourse = existingCourseCode || existingCourseName;
        if (!(foundCourse)) {
            alert('course not Found. please enter a valid course name or code');
            return;
        }
        const alreadyAddedCourse = student.enrolledClasses.find(course => course.courseCode === foundCourse.courseCode);
        const addedCoursesContainer = document.getElementById('added-courses');
        if (foundCourse) {
            if(alreadyAddedCourse){
            alert('course already added. please enter another course to add');
            return;
        }student.enrollInClass(foundCourse);
            addedCoursesContainer.innerHTML='';
            const addedCourseBox = document.createElement('button');
            const addedCourseBoxDeleteButton = document.createElement('button');
            addedCourseBoxDeleteButton.textContent = 'delete';
            
            for (let i = 0; i < student.enrolledClasses.length; i++){
            addedCourseBox.textContent = student.enrolledClasses[i].courseName;
            addedCoursesContainer.appendChild(addedCourseBox);
            addedCoursesContainer.appendChild(addedCourseBoxDeleteButton);
            }   
        }


        
        
        
        
    });
    
    

}

