const Saldos = require('../models/saldosModels');
const router = require('express').Router();

async function abonar(req, res) {
    const {id_centro,saldo_anterior,entrada,salida,descripcion,saldo_nuevo} = req.body;

    const data = new Saldos({id_centro,saldo_anterior,entrada,salida,descripcion,saldo_nuevo});
    
    try {
        const query = await data.save();
        res.json({
            error: false,
            result: query
        })
    } catch (error) {
        res.status(400).json({error: error})
    }
}

const getByPost = async (req,res) => {
    const {id_centro, from, to} = req.body
    try{
        if(id_centro !== "")
        {
            const query = await Saldos.find({$and:[
                    {id_centro: id_centro},
                    {fecha:{$gte: from}},
                    {fecha:{$lte: to}}                  
                ]
            })
    
            if(query.length < 1){
                return res.status(400).json({
                    error: "No se han encontrado registros"
                })
            } 
            res.json({
                error: null,
                result: query
            })
        }

        return res.json({error: "El id no puede estar vacio."})
    }catch(error){
        return res.status(400).json(error)
    }

}

const getAll = async(req, res) => {
    try {
        const query = await Saldos.find({});
        res.json({
            error: null,
            result: query
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

module.exports = {abonar, getByPost, getAll};