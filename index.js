var express = require("express");
const port = 3001;
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

app.get("/ar-example-1", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });

  return res.redirect("ar-example-1.html");
});

app.get("/ar-example-2", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });

  return res.redirect("ar-example-2.html");
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
