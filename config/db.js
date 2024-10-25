const { Pool } = require('pg');

// Crea una instancia del pool de conexiones
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Asegúrate de tener esta variable de entorno definida en tu .env
    ssl: {
        rejectUnauthorized: false, // Esto es necesario si usas una base de datos en la nube
    },
});

module.exports = pool;
