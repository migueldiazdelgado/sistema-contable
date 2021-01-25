const mongoose = require('mongoose');
const moment = require('moment');

const saldosSchema = mongoose.Schema({
    fecha:{
        type: String,
        default: moment().format("YYYY-MM-DD")
    },
    id_centro:{
        type: String,
    },

    saldo_anterior: {
        type: Number
    },

    entrada:{
        type: Number
    },

    salida:{
        type: Number
    },

    descripcion:{
        type:String
    },

    saldo_nuevo:{
        type: Number
    }
})

module.exports = mongoose.model('Saldos', saldosSchema);