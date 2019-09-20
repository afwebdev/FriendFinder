document.addEventListener("DOMContentLoaded", () => {
	let loggedIn = localStorage.getItem("loggedIn");
	loggedIn = loggedIn === true ? true : false;
	console.log(loggedIn);
	if (loggedIn === true) {
		$("#register").addClass("disabled");
	}
});
