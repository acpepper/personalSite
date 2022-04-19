var express = require("express");
const port = 8080;
const app = express();

app.use(express.json());

// For serving static HTML files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });

  return res.redirect("home.html");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
