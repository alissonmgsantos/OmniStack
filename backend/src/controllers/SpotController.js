const Spot = require('../models/Spot');

const index = async (req, res) => {
    const { tech } = req.query;

    const spots = await Spot.find({techs: tech});

    return res.json(spots);
}

const store = async (req, res) => {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        company,
        techs: techs.split(',').map(tech => tech.trim()),
        price
    });

    return res.json(spot);
}

module.exports = {
index,
// show,
store,
// update,
// destroy
}