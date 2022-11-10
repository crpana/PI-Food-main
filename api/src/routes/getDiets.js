
const {Diets } = require('../db');
const { Router } = require('express');
const router = Router();


const getAllDiets = async () => {
    const dietas = await Diets.findAll();
    return dietas;
}

// GET /diets
router.get('/', async (req, res) => {
    const allDietas = await getAllDiets();
    res.status(200).json(allDietas)
})

module.exports = router;