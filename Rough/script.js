$(document).ready(function() {
	$('#student-form').submit(function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var major = $('#major').val();
		var gpa = $('#gpa').val();
		var newStudent = '<li><strong>' + name + '</strong><br>' + email + '<br>' + major + '<br>GPA: ' + gpa + '</li>';
		$('#student-list ul').append(newStudent);
		$('#student-form')[0].reset();
	});
});