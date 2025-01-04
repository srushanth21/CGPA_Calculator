// Predefined credits and courses for each semester
const semesterData = {
    1: [
      { course: "Computer Programming", credits: 4 },
      { course: "Discrete Structures and Matrix Algebra", credits: 4 },
      { course: "Overview of Computers Workshop", credits: 4 },
      { course: "Digital Logic Design", credits: 4 },
      { course: "Essential English", credits: 2 },
      { course: "FHVE/EE", credits: 2 },
      
    ],
    2: [
      { course: "DSA", credits: 4 },
      { course: "PS", credits: 4 },
      { course: "CA", credits: 4 },
      { course: "SS", credits: 4 },
      { course: "OPC", credits: 2 },
      { course: "EE/CCI", credits: 2 },

    ],
    3: [
      { course: "ADSA", credits: 4 },
      { course: "OOP", credits: 4 },
      { course: "DBMS", credits: 4 },
      { course: "OS", credits: 4 },
      { course: "RANAC", credits: 4 },
      { course: "OS", credits: 2 },
    ],
    4: [
      { course: "CCN", credits: 4 },
      { course: "FFSD", credits: 4 },
      { course: "ToC", credits: 4 },
      { course: "AI", credits: 4 },
      { course: "ACS", credits: 2 },
      { course: "SSHAM-7", credits: 2 },
    ],
    5: [
        { course: "FDFED", credits: 4 },
        { course: "PE-1", credits: 3 },
        { course: "PE-2", credits: 3 },
        { course: "PE-3", credits: 3 },
        { course: "PE-4", credits: 3 },
        { course: "SSHAM-8", credits: 2 },
        { course: "SSHAM-8", credits: 2 },
        { course: "Honours-1", credits: 2 },
      ],
    6: [
        { course: "WBD", credits: 4 },
        { course: "PE-5", credits: 3 },
        { course: "PE-6", credits: 3 },
        { course: "PE-7", credits: 3 },
        { course: "IE-1", credits: 3 },
        { course: "SSHAM-10", credits: 2 },
        { course: "BTP-1", credits: 4 },
        { course: "Honours-2", credits: 2 },
      ],
      7: [
        { course: "PE-8", credits: 3 },
        { course: "IE-2", credits: 3 },
        { course: "SSHAM-11", credits: 2 },
        { course: "BTP-2", credits: 4 },
        { course: "Honours-3", credits: 2},
      ],
      8: [
        { course: "PE-9", credits: 3 },
        { course: "IE-3", credits: 3 },
        { course: "SSHAM-12", credits: 2 },
        { course: "Honours-4", credits: 2 },
      ],
    // Add more semesters and courses here
  };

  
  // function loadSemesterSubjects() {
  //   const semesterSelect = document.getElementById("semester");
  //   const selectedSemester = semesterSelect.value;
  
  //   if (selectedSemester && semesterData[selectedSemester]) {
  //     const subjectsContainer = document.getElementById("subjects-container");
  //     subjectsContainer.innerHTML = ""; // Clear previous subjects
  
  //     // Populate subjects based on the selected semester
  //     semesterData[selectedSemester].forEach((subject, index) => {
  //       const subjectDiv = document.createElement("div");
  //       subjectDiv.classList.add("subject");
  //       subjectDiv.innerHTML = `
  //         <label for="grade-${index}">${subject.course} (Credits: ${subject.credits})</label>
  //         <input type="number" id="grade-${index}" min="0" max="10" step="1" class="grade" placeholder="Enter your grade" required>
  //       `;
  //       subjectsContainer.appendChild(subjectDiv);
  //     });
  
  //     // Show the grade input step
  //     document.getElementById("grades-step").style.display = "block";
  //   }
  // }
  
  function calculateSGPA() {
    const semesterSelect = document.getElementById("semester");
    const selectedSemester = semesterSelect.value;
  
    if (!selectedSemester || !semesterData[selectedSemester]) {
      alert("Please select a valid semester.");
      return;
    }
  
    const grades = document.querySelectorAll(".grade");
    const semesterSubjects = semesterData[selectedSemester];
  
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    // Calculate CGPA based on user input
    grades.forEach((gradeInput, index) => {
      const grade = parseFloat(gradeInput.value);
      const credit = semesterSubjects[index].credits;
  
      if (!isNaN(grade)) {
        totalGradePoints += grade * credit;
        totalCredits += credit;
      }
    });
  
    const cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
  
    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.textContent =
      totalCredits > 0
        ? `Your CGPA for Semester ${selectedSemester} is ${cgpa}.`
        : "Please enter valid grades for all subjects.";
  }

  function loadSemesterSubjects() {
    const semesterSelect = document.getElementById("semester");
    const selectedSemester = semesterSelect.value;
  
    if (selectedSemester && semesterData[selectedSemester]) {
      const subjectsContainer = document.getElementById("subjects-container");
      subjectsContainer.innerHTML = ""; // Clear previous subjects
  
      // Populate subjects based on the selected semester
      semesterData[selectedSemester].forEach((subject, index) => {
        const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("subject");
        subjectDiv.innerHTML = `
          <label for="grade-${index}">${subject.course} (Credits: ${subject.credits})</label>
          <input type="number" id="grade-${index}" min="0" max="10" step="1" class="grade" placeholder="Enter your grade" required>
        `;
        subjectsContainer.appendChild(subjectDiv);
      });
  
      // Show the grade input step
      document.getElementById("semester-step").style.display = "none"; // Hide semester selection
      document.getElementById("grades-step").style.display = "block"; // Show grades input
    }
  }
  
  function goBack() {
    // Reset the form
    document.getElementById("cgpaForm").reset();
    const subjectsContainer = document.getElementById("subjects-container");
    subjectsContainer.innerHTML = ""; // Clear subjects container
  
    // Hide grades step and show semester selection
    document.getElementById("grades-step").style.display = "none";
    document.getElementById("semester-step").style.display = "block";
  
    // Reset the result display
    document.getElementById("result").textContent = "";
  }
  

let semesterCount = 0;

function addRow() {
  semesterCount++;
  const tableBody = document.querySelector("#cgpa-table tbody");
  const newRow = document.createElement("tr");

  let creditsValue = ""; // Placeholder for default credits
  if (semesterCount === 1) creditsValue = 20;
  else if (semesterCount === 2) creditsValue = 20;
  else if (semesterCount === 3) creditsValue = 22;

  const creditsInput =
    creditsValue !== ""
      ? `<td><input type="number" class="credits-input" value="${creditsValue}" readonly></td>`
      : `<td><input type="number" class="credits-input" min="1" max="30" placeholder="Credits" required></td>`;

  newRow.innerHTML = `
    <td>Semester ${semesterCount}</td>
    <td><input type="number" class="sgpa-input" min="0" max="10" step="0.1" placeholder="SGPA" required></td>
    ${creditsInput}
    <td><button onclick="removeRow(this)">Remove</button></td>
  `;

  tableBody.appendChild(newRow);
}

function removeRow(button) {
  const row = button.closest("tr");
  row.remove();
  semesterCount--;
}

function calculateCGPA() {
  const sgpaInputs = document.querySelectorAll(".sgpa-input");
  const creditsInputs = document.querySelectorAll(".credits-input");
  let totalCredits = 0;
  let totalGradePoints = 0;

  sgpaInputs.forEach((input, index) => {
    const sgpa = parseFloat(input.value);
    const credits = parseFloat(creditsInputs[index].value);

    if (!isNaN(sgpa) && !isNaN(credits)) {
      totalGradePoints += sgpa * credits;
      totalCredits += credits;
    }
  });

  const cgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;

  const resultDiv = document.getElementById("cgpa-result");
  resultDiv.textContent = totalCredits > 0
    ? `Your CGPA is ${cgpa}.`
    : "Please enter valid SGPA and Credits for all semesters.";
}
