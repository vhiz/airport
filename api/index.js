import express from "express";
import userRoute from "./routes/user.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    origin: "https://airport-62192.web.app",
    credentials: true,
  })
);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
