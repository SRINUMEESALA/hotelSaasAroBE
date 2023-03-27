import express, { response } from "express";
import hotel from "../Models/Rooms.js";

const hotelRoute = new express.Router();

const getHotels = async (request, response) => {
  console.log("Accessed - GET HOTELS API");
  const { filter, search } = request.query;
  try {
    // const hotels = await hotel.deleteMany();
    // const hotels = await hotel.updateMany(
    //   { price: { $lt: 4500 } },
    //   { type: "s" }
    // );
    let rg;
    if (search === "") {
      rg = new RegExp("", "gi");
    } else {
      rg = new RegExp(search, "gi");
    }
    console.log(request.query);
    let hotels;
    if (filter === "all") {
      hotels = await hotel.find({ hotel: rg });
    } else {
      hotels = await hotel.find({ type: filter, hotel: rg });
    }

    response.status(200);
    response.send({ hotels });
  } catch (error) {
    response.status(500);
    response.send({ msg: "Something went wrong in server" });
    console.log(error);
  }
};

hotelRoute.get("/getHotels", getHotels);

export default hotelRoute;
