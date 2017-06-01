var answers = {
	answer_1: 1,
	answer_2: 3,
	// ...
};

function submitTest() {

	var form = {
		ans1: $('input[name="answer_1"]').val(),
		ans2: $('input[name="answer_2"]:checked').val()
	};

	var rightAnswers = 0;

	for (var i = 1; i <= form.length; i++) {
		if (form['ans' + i] == answers['answer_' + i]) {
			rightAnswers++;
		}
	}

	return rightAnswers;
}

$(document).ready(function() {
	$('#testForm').submit(function(e) {
		e.preventDefault();

		if (typeof swal != 'undefined') {
			swal('Тест пройден!', 'Верные ответы: ' + submitTest() + ' из ...', 'success');
		}
	});
});

// <link href="./css/sweetalert.min.css" rel="stylesheet">
// <script src="./js/sweetalert.min.js"></script>