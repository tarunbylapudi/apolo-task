import path from "path";
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appRoutes from "./routes/appRoutes.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5000;

//connect to MongoDb
connectDB();

const app = express();
const router = express.Router();
app.use(cors());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/doctors", doctorRoutes);
app.use("/api/appointment", appRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is runninng...");
  });
}

app.listen(port, () =>
  console.log(
    `Server started running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
