// *************************             **********************************
// ************************ CLIENT SIDE JS ********************************
// *************************             **********************************

document.addEventListener("DOMContentLoaded", () => {
	//store some localstorage variable for login status.
	let loggedIn = localStorage.getItem("loggedIn");
	console.log(loggedIn);
	if (loggedIn == "true") {
		$("#registerLink").addClass("disabled");
	}

	//Create vars pointing to elements
	const submit = document.getElementById("submit");

	//Calc Score Function
	const calcScore = arr => {
		//stupid 'algorithm' to assign user answers to a score.
		return (arr.reduce((a, b) => parseInt(a) + parseInt(b)) / 24) * 100;
	};

	submit.addEventListener("click", e => {
		e.preventDefault();
		//Store all input HTML collection elements returned as an array
		let answersArray = [...document.getElementsByTagName("input")];
		let answers = [];

		//Push all answer (data-value) to answers array.
		answersArray.forEach(answer => {
			if (answer.checked) {
				answers.push(+answer.dataset.value);
			}
		});

		//Check if the answer.length = 6 (ALL QUESTIONS ANSWERED)
		if (answers.length === 6) {
			let data = JSON.stringify({
				user_id: localStorage.getItem("username"),
				answer_1: answers[0],
				answer_2: answers[1],
				answer_3: answers[2],
				answer_4: answers[3],
				answer_5: answers[4],
				answer_6: answers[5],
				score: calcScore(answers)
			});
			fetch("/survey/submit", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: data
			})
				.then((err, res) => {
					if (err) throw err;
					if (res.status === 201) {
						//survey submitted successfully,
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
		//TESTING
		console.log(answers);
	});
});
