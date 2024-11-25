const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const app = express();
connectDB();


app.use(
  cors({
    origin: [process.env.CLIENT_URL,"http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.get("*", (req, res) => {
  res.json({
    error: "Route Not Found",
    success: false,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening on PORT : ${port}`);
});
