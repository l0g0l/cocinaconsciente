const express = require('express');
const cors = require('cors'); // compartir recursos en distintos dominios y orígenes (front-back)
const morgan = require('morgan'); // ver por consola las peticiones que están llegando desde el navegador
const path = require('path');
const dbConfig = require('./Config/db.config');
const port = process.env.PORT || 5000
require('dotenv').config({ path: 'variables.env'});


// Inicializamos Express
const app = express();

//Iniciamos BBDD
dbConfig();

// Confirguración
app.set('port', process.env.PORT || 5000);

// Desactivar el caché
app.disable('etag');


//--------Middelwares-----------

// console.log(process.env.FRONTEND_URL);
app.use(cors()  );
app.use(express.json()); // para poder recibir los datos en JSON, para que express pueda entenderlos
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//Rutas de autenticación y verificaciónClientgi
require('./Routes/auth.routes')(app);
require('./Routes/user.routes')(app);

//Rutas peticiones a BBDD
require('./Routes/ingredients.routes')(app)
require('./Routes/recipes.routes')(app)

 app.use(express.static('Client/build')); // Servir los archivos estáticos de la aplicación React.

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'Client/build/', 'index.html'))
});
 

// Inicializamos el servidor
app.listen(port, '0.0.0.0', () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);

})

