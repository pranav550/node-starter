import express from "express";

const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to node js"
  });
});
app.listen(port, () => {
  console.log("server started");
});
