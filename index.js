import express from "express";
import connectToDB from "./src/DbConnections/RemoteAtalsDb.js";
import hotelRoute from "./src/Routes/hotels.js";
import cors from "cors";

const port = process.env.PORT || 4000;
const app = express();

app.listen(port, () => {
  console.log(`Server Successfully running at ${port}`);
});

connectToDB();

app.use(express.json());
app.use(cors());
app.use(hotelRoute);
