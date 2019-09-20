document.addEventListener("DOMContentLoaded", () => {
	let submit = document.getElementById("submit");
	//store some localstorage variable for login status.
	let loggedIn = localStorage.getItem("loggedIn");
	console.log(loggedIn);
	if (loggedIn == "true") {
		$("#registerLink").addClass("disabled");
	}

	submit.addEventListener("click", () => {
		let username = $("#username").val();
		let password = $("#password").val();

		let data = { username, password };
		console.log(data);

		fetch("register/submit", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => res.json())
			.then(result => {
				console.log(result.loggedIn);
				localStorage.setItem("loggedIn", result.loggedIn);
				localStorage.setItem("username", result.username);
				console.log(localStorage);
			})
			.catch(err => {
				throw err;
			});
	});
});
