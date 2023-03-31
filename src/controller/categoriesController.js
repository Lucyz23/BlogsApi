const categoryService = require('../service/categoriesService');

const jwt = require('../middlewares/jwt');
const validateCategory = require('../middlewares/categoryVerify');

const categoriesController = {
  create: async (req, res) => {
    const token = req.headers.authorization;
    const validatedToken = jwt.verifyToken(token);
    if (validatedToken.error) {
      return res
        .status(validatedToken.error.code)
        .json(validatedToken.error.message);
    }
    const validatedBody = validateCategory(req.body);
    if (validatedBody.error) {
      return res
        .status(validatedBody.error.code)
        .json(validatedBody.error.message);
    }
    const result = await categoryService.create(validatedBody);
    res.status(201).json(result);
  },
  findAll: async (req, res) => {
    const token = req.headers.authorization;
    const validatedToken = jwt.verifyToken(token);
    if (validatedToken.error) {
      return res
        .status(validatedToken.error.code)
        .json(validatedToken.error.message);
    }
    const result = await categoryService.findAll();
    res.status(200).json(result);
  },
};

module.exports = categoriesController;