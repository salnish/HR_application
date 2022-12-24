const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");

const userRouter = require("./Routers/userRouter");
const adminRouter = require("./Routers/adminRouter");

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
