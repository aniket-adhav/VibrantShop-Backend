import "dotenv/config"; // ✅ correct

import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";

console.log("ENV CHECK:", process.env.RAZORPAY_KEY_ID);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/create-order", paymentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
