const express = require("express");
const appRoute = require("./routes/route");

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());

// routes
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Listening to server ${PORT}`);
});
