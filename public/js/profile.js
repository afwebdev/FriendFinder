document.addEventListener("DOMContentLoaded", () => {
	let loggedIn = localStorage.getItem("loggedIn");
	console.log(loggedIn);
	if (loggedIn == "true") {
		$("#registerLink").addClass("disabled");
	}
	let username = localStorage.getItem("username");
	$(".container").append(`<h2>Hello, ${username}</h2> `);
});
