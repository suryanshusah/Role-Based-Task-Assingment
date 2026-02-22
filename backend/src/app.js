const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();


app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));


app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes"));

app.get("/ping", (req, res) => {
  res.json({ message: "Backend working" });
});


const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

module.exports = app;
