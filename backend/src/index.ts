import express from "express";
import userRoutes from "./routes/user";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
