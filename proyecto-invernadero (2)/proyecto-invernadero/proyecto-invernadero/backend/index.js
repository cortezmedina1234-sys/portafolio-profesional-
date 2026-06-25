const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

// Usar rutas
app.use('/', usuarioRoutes);
app.use('/', productoRoutes);
app.use('/', ventaRoutes);

app.listen(3002, () => console.log("🚀 Servidor en puerto 3002"));