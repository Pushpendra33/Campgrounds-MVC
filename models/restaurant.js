const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: String,
    city: String,
    city_id: Number,
    location_id: Number,
    locality: String, 
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);