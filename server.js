const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // default port

app.get("/", (req, res) => {
  res.send("Hello World - Version A!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
