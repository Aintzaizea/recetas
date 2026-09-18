import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import recetasRoutes from './src/routes/recetasRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(recetasRoutes);
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});