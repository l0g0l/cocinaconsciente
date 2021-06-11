const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // compartir recursos en distintos dominios y orígenes (front-back)
const morgan = require('morgan'); // ver por consola las peticiones que están llegando desde el navegador
const path = require('path');
const dbConfig = require('./Config/db.config');
const port = process.env.PORT || 5000
require('dotenv').config(); 


// BBDD
const db = require('./Models');
const atlasUrl = process.env.DB_MONGO_URL;
const url = atlasUrl
db.mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
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
app.set('port', process.env.PORT || 5000);

// Desactivar el caché
app.disable('etag');


//--------Middelwares-----------

//const opcionesCors = {
//    origin: ""
//}
console.log(process.env.FRONTEND_URL);
app.use( cors() );
app.use(bodyParser.json()); // para poder recibir los datos en JSON, para que express pueda entenderlos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//Rutas de autenticación y verificaciónClientgi
require('./Routes/auth.routes')(app);
require('./Routes/user.routes')(app);

//Rutas peticiones a BBDD
require('./Routes/ingredients.routes')(app)
require('./Routes/recipes.routes')(app)

app.use(express.static(path.join(__dirname, '/build'))); // Servir los archivos estáticos de la aplicación React.En tripu path.resolve

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, '/build'))
});

console.log(process.env)
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hola, estoy funcionando" });
  });

// Inicializamos el servidor
app.listen(port, '0.0.0.0', () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);

})

