const express = requrire("express");
const path = require("path");

const app = express();

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.use("/");

app.listen(3000, () => {
  console.log("Server Started");
});
