import express from "express";
import { PORT } from "./env.js";

import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import subscriptionsRouter from "./routes/subscriptions.js";
import connectDB from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionsRouter);

app.get("/", (req, res) => {
    res.send("Welcome to subscription tracker");
});
app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
    connectDB();
});
