import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.mjs";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);

// use() function in Express. js
// adds middleware to the application's request-processing pipeline.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
