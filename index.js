
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from 'dotenv'
import { getAllBrands, getAllDishesByShop } from "./controllers/dish.js";
import { createOrder, findOrders } from "./controllers/order.js";
import { orderCreateValidation, findOrderValidation, sopDishesValidation } from "./validations/index.js";
import { handleValidationError } from "./middlewares/handleValidationError.js";
dotenv.config();

const { MONGOOSE_URL, PORT = 4444 } = process.env;

const app = express();
mongoose.connect(MONGOOSE_URL).then(() => console.log('MOGO OK')).catch(() => console.log('MOGO ERROR'));

app.use(cors())
app.use(express.json());

app.get('/shop/all', getAllBrands);
app.post('/shop', sopDishesValidation, handleValidationError, getAllDishesByShop);
app.post('/order', orderCreateValidation, handleValidationError, createOrder);
app.patch('/order', findOrderValidation, handleValidationError, findOrders);


app.listen(PORT, (err) => { err ? console.log(err) : console.log(`server running on port ${PORT}`) });