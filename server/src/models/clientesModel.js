const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    nombre: {type: String},
    fecha: {
        type:Date,
        default: Date.now()
    },
    cedula: {type:String},
    telefono: {type:String},
    ciudad: {type:String},
})

module.exports = mongoose.model('Clientes', clienteSchema)