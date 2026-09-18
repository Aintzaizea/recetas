import { getRecetas } from "../models/recetasModel.js";
export const listarRecetas = async (req, res) => {
    const { buscar } = req.query;
    try {
        const recetas = await getRecetas(buscar);
        res.json(recetas);
    } catch (error) {
        console.error('Error al obtener recetas', error);
        res.status(500).json({ error: 'Error al obtener recetas' });
    }
};

/**
 * recetasController.js
 * -----------------------------------------------------------
 * Controlador de recetas. A diferencia del modelo y el service,
 * aquí SÍ se trabaja directamente con HTTP (req, res). Es la capa
 * que decide qué responder al frontend, tanto si todo va bien
 * como si algo falla.
 *
 * - import { getRecetas }: traemos la función del modelo (export
 *   nombrado, por eso usamos llaves { }). Ruta relativa
 *   "../models/..." porque subimos de src/controllers/ a src/ y
 *   bajamos a src/models/. Con ES Modules hay que poner siempre
 *   la extensión .js en los imports relativos.
 *
 * - export const listarRecetas = async (req, res) => {...}:
 *   función flecha asíncrona. Es async porque dentro usamos
 *   "await getRecetas(query)".
 *
 * - const query = req.query.query: sacamos el término de
 *   búsqueda de los query params de la URL. Solo funciona si el
 *   frontend llama a algo como fetch('/api/recetas?query=pasta').
 *
 * - try/catch propio: aunque getRecetas y buscarRecetas ya
 *   gestionan y relanzan sus propios errores, aquí es donde por
 *   fin "atrapamos" ese error para decidir qué responder al
 *   usuario. Por eso el controlador SÍ necesita su propio
 *   try/catch, a diferencia del modelo.
 *
 * - res.json(recetas): si todo va bien, devolvemos el array de
 *   recetas como JSON (status 200 implícito).
 *
 * - catch (error): console.error da visibilidad a ti (logs del
 *   servidor); res.status(500).json({...}) da al usuario un
 *   mensaje de error controlado y genérico, sin exponerle el
 *   error técnico interno (que podría revelar detalles de la
 *   API externa o de tu código).
 */