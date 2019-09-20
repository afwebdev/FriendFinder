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

	if (username) {
		console.log("USERNAME TRUE");
	}
});
