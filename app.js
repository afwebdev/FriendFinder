//DATABASE
const db = require("./models");
///.
//HANDLEBARS
const exphbs = require("express-handlebars");

//EXPRESS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8085;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Allow load of local assets from root/public - ie(css/js/img)
app.use(express.static("public"));
//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Default Routes
app.get("/", (req, resp) => {
	resp.render("index");
});

//anything using /survey/x/y/z will use the survey route
app.use("/survey", require("./routes/survey"));

//register
app.use("/register", require("./routes/register"));

app.use("/profile", require("./routes/profile"));

//login
// app.use("/login", require("./routes/login"));

db.sequelizeConnection
	.sync()
	.then(res => {
		app.listen(PORT, err => {
			if (err) console.log(err);
			console.clear();

			console.log(`Server Running on ${PORT}`);
		});
	})
	.catch(err => {
		throw err;
	});

// db.authenticate();
