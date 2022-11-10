const { Recipe, Diets } = require('../db');


const { Router } = require('express');


const router = Router();


router.post('/', async (req, res) => {
    const { title, summary, healthScore, steps, diets, score, image } = req.body;
    try {
        //Crea una receta en la base de datos relacionada con sus tipos de dietas.

        const dietaDb = await Diets.findAll({
            where: {
                name: diets,
            }
        });

        const nuevaReceta = await Recipe.create({
            title,
            summary,
            healthScore,
            steps,
            score,
            image:image?image:'https://i.ytimg.com/vi/pecKFzpJ20A/hqdefault.jpg'
            

        });


        nuevaReceta.addDiets(dietaDb)
        return res.status(200).json('Receta creada con exito!!')


    } catch (error) {
        console.log(error);
    }
})
module.exports = router;