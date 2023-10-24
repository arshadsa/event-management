import express from "express";
import cors from "cors";
import "./utils/loadEnvironment.mjs";
import "colors"
import dbConnect from "./db/dbConnect.mjs";
const PORT = process.env.PORT || 8080;

import userRoute from "./routes/user.route.mjs";
import eventsRoute from "./routes/event.route.mjs";
import eventFormRoute from "./routes/eventForm.route.mjs";
import blogRoute from "./routes/blog.route.mjs";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

// connect database 
dbConnect()

app.use("/api/user", userRoute);
app.use("/api/eventForm", eventFormRoute);
app.use("/api/events", eventsRoute);
app.use("/api/blog", blogRoute);

app.get("/", (req, res) => {
  res.send("Running Products Server");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
