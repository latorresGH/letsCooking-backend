const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer'); // Importa multer
const app = express();
const PORT = process.env.PORT || 5000;

// Carga las variables de entorno
dotenv.config();

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Renombra el archivo
    }
});

const upload = multer({ storage });

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/users', require('./routes/userRoutes')(upload)); // Pasa el middleware de Multer a las rutas de usuario
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
