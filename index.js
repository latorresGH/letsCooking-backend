const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;

// Carga las variables de entorno
dotenv.config();

// Middleware
app.use(cors({
    origin: '*', // Permitir todas las solicitudes de origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Si es necesario para cookies o autenticación
}));
app.use(express.json());

// Rutas
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
