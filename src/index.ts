import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoutes from "./routes/MyUserRoute";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
//automatically convert the body to any request we make from our API server to json
app.use(cors());
//going to add a test endpoint

// app.get("/test", async(req: Request, res: Response)=>{
//     res.json({message: "Hello!" });
// });

// the below will tell express that any request that start with /api/my/user
// is going to forward the request onto myUserRoute file

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});
app.use("/api/my/user", myUserRoutes);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
