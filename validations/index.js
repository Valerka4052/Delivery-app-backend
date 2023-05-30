import { body } from 'express-validator';

export const orderCreateValidation = [
    body('email').isEmail().isString(),
    body('address').isString(),
    body('phone').isString(),
    body('total').isNumeric(),
    body('dishes').isArray(),
    body('imageUrl').optional().isString()
];
export const findOrderValidation = [
    body('email').isEmail().isString(),
    body('phone').isString(),
];
export const sopDishesValidation = [
    body('shop').isString(),
];
