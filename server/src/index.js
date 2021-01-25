const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRouter = require('./routers/usersRouter')
const clientesRouter = require('./routers/clientesRouter')
const saldosRouter = require('./routers/saldosRouter')
require('dotenv').config()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//middlewares
app.use('/api/usuarios', usersRouter)
app.use('/api/clientes', clientesRouter)
app.use('/api/saldos', saldosRouter)

// connecting db & starting server
const options = { 
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(process.env.URL_DB, options)
.then(() => console.log('Conexion establacida exitosamente...'))
.then(() => app.listen(process.env.PORT, () => console.log(`Server running in http://localhost:${process.env.PORT}`)))
.catch(error => console.log(error))

