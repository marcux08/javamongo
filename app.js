const mongoose = require('mongoose')

const url_bd = 'mongodb://localhost:27017/biblioteca';

mongoose.connect(url_bd)
    .then(() => {
        console.log('si jalo')
    })
    .catch((err) => {
        console.log('no jalo')
    })
    // esquemas para la base de datos 
    const esquema_libros = new mongoose.Schema({
        autor: {
            type: String
          
        },
        titulo: {
            type: String
          
        },
        fecha_pub: {
            type: Date
           
        },
        genero: {
            type: String
        },
        total_ejemp: {
            type: Number
        },
        precio: {
            type: Number
        },
        ejem_dis: {
            type: Number
        }})
    // creando coleccion 
    const libros = new mongoose.model('libros',esquema_libros );

    libros.create({
        "autor": "Gabriel García Márquez",
        "titulo": "Cien años de soledad",
        "fecha_pub": Date("1967-06-05"),
        "genero": "Ficción",
        "total_ejemp": 20,
        "precio": 15.99,
        "ejem_dis": 15
    })
    
