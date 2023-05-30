import Dish from '../models/dish.js';


export const getAllBrands = async (req, res) => {
    try {
        const dishes = await Dish.find()
        const brands = [...new Set(dishes.map(obj => obj.brand))];
         res.status(200).json(brands);
    } catch (error) {
        console.log(error);
        res.status(500).json('fail to get dishes');
    };
};

export const getAllDishesByShop = async (req, res) => {
    try {
        const {shop}  = req.body;
        const dishes = await Dish.find({ brand: shop });
        res.status(200).json(dishes)
    } catch (error) {
        console.log(error);
        res.status(500).json('server error');
    };
};
