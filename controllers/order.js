import Order from "../models/order.js";

export const createOrder = async (req, res) => {
    try {
        const order = (await Order.create({ ...req.body}));
        res.status(201).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json('failure to create order');
    };
};

export const findOrders = async (req, res) => {
    try {
        const { phone,email } = req.body
        const orders = await Order.find({ phone, email });
        if (!orders) return res.status(400).json('there is no orders');
            res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json('failure to update post');
    };
};



// export const removePost = async (req, res) => {
//     try {
// console.log('req.body',req.body);
//         const { postId } = req.params
//         console.log('postId', postId);
//         const post = await Post.findById(postId);
//         if (!post) return res.status(400).json('there is no such post in DB');
//         await Post.findByIdAndRemove(postId);
//         res.status(200).json({ messge: 'deleting sucsess', id: postId });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('failure to remove post');
//     };
// };

// export const updatePost = async (req, res) => {
//     try {
//         const { postId } = req.params;
//         const post = await Post.findOne({ _id: postId, user: req.user._id });
//         if (!post) return res.status(400).json('there is no such post in DB');
//         const updatedPost = await Post.findByIdAndUpdate(postId, { ...req.body });
//         res.status(200).json({...updatedPost._doc});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('failure to update post');
//     };
// };

// export const getAllPosts = async (req, res) => {
//     try {
//         const allPosts = await Post.find().populate('user').exec();
//         res.status(200).json(allPosts);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('failure to get posts');
//     };
// };

// export const getPostsById = async (req, res) => {
//     try {
//         const post = await Post.findOneAndUpdate({ _id: req.params.postId }, { $inc: { viewsCount: 1 } }, { returnDocument: 'after' });
//         res.status(200).json(post._doc);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('failure to get post');
//     };
// };
// export const uploadImage = async (req, res) => {

//     try {
//         res.json(req.file)
//     } catch (error) {
//                 console.log(error);
//         res.status(500).json('failure upload image');
//     }
//     res.json
    
// }