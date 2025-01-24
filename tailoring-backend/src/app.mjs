import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.mjs";

dotenv.config();

const app = express();
// allowing only one cors origins
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// allowing multiple cors origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Check if the origin is in the allowed origins list
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // If the origin is not allowed, return an error
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);

// use() function in Express. js
// adds middleware to the application's request-processing pipeline.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
