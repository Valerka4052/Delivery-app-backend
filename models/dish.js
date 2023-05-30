import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    dish: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageURL: String,
   
}, { timestamps: true, versionKey: false });

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;