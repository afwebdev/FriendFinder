document.addEventListener("DOMContentLoaded", () => {
	$("#profileLink").toggleClass("disabled");
	$("#surveyLink").toggleClass("disabled");

	//store some localstorage variable for login status.
	let loggedIn = localStorage.getItem("loggedIn");
	console.log(loggedIn);
	if (loggedIn == "true") {
		$("#registerLink").toggleClass("disabled");
		$("#profileLink").toggleClass("disabled");
		$("#surveyLink").toggleClass("disabled");
	}
	let username = localStorage.getItem("username");
	$(".profile").prepend(`<h2>Hello, ${username}</h2> `);

	const getMatchData = (userScore, username) => {
		let data = { username, score: userScore };
		fetch(`/profile/api/match`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(result => {
				console.log(result);
				$("#matchUsername").text(result.name);
				$("#matchScore").text(result.score);
			})
			.catch(err => {});
	};

	fetch(`profile/api/user/${username}`)
		.then(res => res.json())
		.then(result => {
			$("#score").text(result.score);
			getMatchData(result.score, username);
		})
		.catch(err => {
			throw err;
		});
});
