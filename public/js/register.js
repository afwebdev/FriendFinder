document.addEventListener("DOMContentLoaded", () => {
	let submit = document.getElementById("submit");
	//store some localstorage variable for login status.
	let loggedIn = localStorage.getItem("loggedIn");
	loggedIn = loggedIn === true ? true : false;
	console.log(loggedIn);
	if (loggedIn === true) {
		$("#register").addClass("disabled");
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
				console.log(result);
			})
			.catch(err => {
				throw err;
			});
	});
});
