//Configuración BBDD Mongodb

const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env'});

const connectDB = async () => {
      try {
        const atlasUrl = process.env.DB_MONGO_URL;
        const url = atlasUrl
        mongoose.Promise = global.Promise
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true

        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`)

    }
}

module.exports = connectDB;