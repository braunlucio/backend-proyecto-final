const mongoose = require("mongoose");
require('dotenv').config({ path: 'ENV_.env' });
const URL = process.env.MONGO

const connection = mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log('Conectado a la base de datos');
})

mongoose.connection.on('error', ()=>{
    console.log('Error en la conexion a la base de datos');
})

module.exports = connection;