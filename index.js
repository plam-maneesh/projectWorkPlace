// Function to calculate grade
function calculateGrade(marks) {
    if(marks >=100){
        return "A+"
    }else if (marks >= 90) {
      return "A";
    } else if (marks >= 80) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else if (marks >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  // Event Listener for Button
  document.getElementById("calculate").addEventListener("click", function (event) {
    event.preventDefault() ; // Prevent the form from refreshing the page
    const name = document.getElementById("studentName").value.trim();
    const marks = parseInt(document.getElementById("marks").value);
    const resultElement = document.getElementById("result");
  
    if (name === "") {
      resultElement.textContent = "Please enter the student's name.";
      return;
    }
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      resultElement.textContent = "Please enter valid marks (0-100).";
      return;
    }
  
    const grade = calculateGrade(marks);
    resultElement.textContent = `${name} scored ${marks} marks and their grade is: ${grade}`;
  });



  /*

  

  Algorithm: Student Grade Calculator

    UI Setup:
        Add input fields for student name and marks.
        Add a "Calculate Grade" button and a result display area.

    Grade Calculation Function:
        Input: Marks.
        Logic:
            90-100: Grade A.
            80-89: Grade B.
            70-79: Grade C.
            60-69: Grade D.
            <60: Grade F.
        Output: Grade.

    Event Listener Function:
        Trigger on button click.
        Read and validate user input:
            Name must not be empty.
            Marks must be 0-100.
        Call the grade calculation function.
        Display the result: "Name scored X marks and their grade is Y".

    Separation:
        Grade calculation and event handling are separate for reusability and clarity.
  
  */
