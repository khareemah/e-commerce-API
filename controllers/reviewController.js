const { StatusCodes } = require('http-status-codes');
const Review = require('../models/Review');
const Product = require('../models/Product');
const CustomError = require('../errors');

const createReview = async (req, res) => {
  const { product: productId } = req.body;
  const isValidProduct = await Product.find({ _id: productId });

  if (!isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id ${productId}`);
  }

  const alreadyReviewed = await Review.find({
    user: req.user.userId,
    product: productId,
  });

  if (alreadyReviewed) {
    throw new CustomError.BadRequestError(
      'This product has already been reviewed by you'
    );
  }
  req.body.user = req.user.userId;
  const review = await Review.create(req.body);
  res.status(StatusCodes.CREATED).json({ review });
};

// const getAllReviews = async (req, res) => {
//   const reviews = await Review.find({ user: req.user.userId });
//   res.status(StatusCodes.OK).json({ count: reviews.length, reviews });
// };

// const getSingleReview = async (req, res) => {};

// const updateReview = async (req, res) => {};
// const deleteReview = async (req, res) => {};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
