const mongoogse = require('mongoose')
const moment = require('moment')

const divisasModel = mongoogse.Schema({

    fecha:{
        type:String,
        default: moment().format("YYYY-MM-DD hh:mm:ss")
    },

    cantidad: {
        type:Number
    },

    tasa: {
        type: Number
    }


})

module.exports = mongoogse.model('divisasModel',divisasModel);