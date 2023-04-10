const studentForm = $('#student-form');
const studentList = $('#student-list');

studentForm.on('submit', function(event) {
  event.preventDefault();
 

  // Get form data
  const rollNo = $('#student-rollNo').val();
  const name = $('#student-name').val();
  const marks = $('#student-marks').val();

  // Create new list item
//   const listItem = document.createElement('li');
//   // listItem.textContent = "Roll no - " + rollNo + ", " + name + " has scored " + marks + " marks";
// listItem.innerHTML = `Roll no - <span style="background-color: green; padding: 0px 10px; color:white; ">${rollNo}</span>, <span style="background-color: green; padding: 0px 10px; color:white;">${name}</span> has scored <span style="background-color: green; padding: 0px 10px; color:white;">${marks}</span> marks`;
//   // Append new list item to the list
//   studentList.appendChild(listItem);

studentList.append('<div> Roll no - <span style="background-color: green; padding: 0px 10px; color:white;">' + rollNo + '</span>, <span style="background-color: green; padding: 0px 10px; color:white;">' + name + '</span> has scored <span style="background-color: green; padding: 0px 10px; color:white;">' + marks + '</span> marks</div>');

  // Clear the form
  // studentForm.reset();
});