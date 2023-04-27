import express from "express";
import userRoute from "./routes/user.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
