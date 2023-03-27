import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  hotel: String,
  rating: Number,
  price: Number,
  city: String,
  imageUrl: String,
  type: String,
});

const hotel = new mongoose.model("Hotel", HotelSchema);
export default hotel;
