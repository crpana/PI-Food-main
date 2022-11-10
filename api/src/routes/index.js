const { Router } = require('express');

const getR = require('./getRecipes')
const postR = require('./postRecipes')
const getD = require('./getDiets')

const router = Router();



router.use('/recipes', getR)
router.use('/recipe', postR)
router.use('/diets', getD)


module.exports = router;
