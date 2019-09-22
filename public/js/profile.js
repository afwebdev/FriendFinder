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
	$(".profile").append(`<h2>Hello, ${username}</h2> `);

	fetch(`profile/api/user/${username}`)
		.then(res => res.json())
		.then(result => {
			console.log(result);
		})
		.catch();
});
