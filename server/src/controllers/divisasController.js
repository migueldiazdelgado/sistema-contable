const Divisas = require('../models/divisasModel');
const router = require('express').Router();

const comprar = async (req, res) => {
    const {cantidad, tasa} = req.body;
    const data = new Divisas({cantidad, tasa});
    try {
        const query = await data.save();
        res.json({
            error: null,
            result: query
        })
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

const resumen = async(req,res) => {
    try {
        const query = await Divisas.find({});
        res.json({
            error: null,
            result: query
        })

    
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

module.exports = {comprar, resumen};