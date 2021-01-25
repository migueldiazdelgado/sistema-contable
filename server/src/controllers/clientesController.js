const Clientes = require('../models/clientesModel');

const router = require('express').Router();

const Create = async(req, res) => {
    const {
        nombre,
        fecha_creacion,
        cedula,
        telefono,
        ciudad
    } = req.body

    const data = new Clientes({
        nombre,
        fecha_creacion,
        cedula,
        telefono,
        ciudad
    })
    
    try {
        const clienteSave = await data.save()
        res.json({
            error: null,
            data: clienteSave
        })
    } catch (error) {
        res.status(400).json({
            error: error  
        })
    }
    
}

module.exports = Create;