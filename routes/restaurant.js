const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Restaurant = require("../models/restaurant");

router.get(
  "/",
  catchAsync(async (req, res) => {
    const restaurants = await Restaurant.find({});
    res.render("restaurants/index", { restaurants });
  })
);

router.get("/new", async (req, res) => {
  res.render("restaurants/new");
});

router.post("/new", async (req, res) => {
  const newRestaurant = new Restaurant(req.body);
  await newRestaurant.save();
  const restaurants = await Restaurant.find({});
  res.render("restaurants/index", { restaurants });
});

router.get("/:city", async (req, res) => {
  const {city} = req.params;
  const restaurants = await Restaurant.find({city: city})
  console.log(restaurants)
  res.render("restaurants/index", { restaurants });
 
});

module.exports = router;
