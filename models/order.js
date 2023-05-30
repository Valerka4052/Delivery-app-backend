import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    dishes: {
        type: Array,
        required: true,
    },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;