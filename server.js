const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // compartir recursos en distintos dominios y orígenes (front-back)
const morgan = require('morgan'); // ver por consola las peticiones que están llegando desde el navegador
const path = require('path');
const dbConfig = require('./Config/db.config');

// BBDD
const db = require('./Models');
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Inicializamos Express
const app = express();

// Confirguración
app.set('port', process.env.PORT || 5000); // elige el puerto que tenga libre por defecto el ser

// Desactivar el caché
app.disable('etag');


//--------Middelwares-----------

const opcionesCors = {
    origin: process.env.FRONTEND_URL
}
app.use( cors(opcionesCors) );
app.use(bodyParser.json()); // para poder recibir los datos en JSON, para que express pueda entenderlos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
require('dotenv').config(); // rutas protegidas
app.use(express.static(path.join(__dirname, '../Client/build'))); // Servir los archivos estáticos de la aplicación React.En tripu path.resolve
app.use(require('./Routes/user.routes'));


//Rutas de autenticación y verificación
app.use ('/api/auth/signup', require('./Routes/auth.routes'));
app.use ('/api/auth/signin', require('./Routes/auth.routes'));
app.use ('/api/test/all', require('./Routes/user.routes'));
app.use ('/api/test/user', require('./Routes/user.routes'));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hola, estoy funcionando" });
  });

// Inicializamos el servidor
app.listen(app.get('port'), () =>{
    console.log(`El servidor esta funcionando en el puerto ${app.get('port')}`);

})

