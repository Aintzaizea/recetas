import {buscarRecetas} from '../services/spoonacularService.js';
export function getRecetas(buscar) {
    return buscarRecetas(buscar);
};

/**
 * recetasModel.js
 * -----------------------------------------------------------
 * Modelo de recetas. De momento no gestiona datos propios (no hay
 * array en memoria como en el CRUD de películas) — su única
 * responsabilidad es hacer de intermediario hacia el service que
 * habla con la API externa de Spoonacular.
 *
 * - import { buscarRecetas }: importamos la función del service
 *   (export nombrado, por eso usamos llaves { }). Ruta relativa
 *   "../services/..." porque subimos de src/models/ a src/ y
 *   bajamos a src/services/.
 *
 * - getRecetas(query): no es async y no tiene try/catch propio.
 *   Al hacer "return buscarRecetas(query)", estamos devolviendo
 *   directamente la promesa que ya genera buscarRecetas (que sí es
 *   async). Quien llame a getRecetas puede seguir haciéndole
 *   await con normalidad.
 *
 * - Si buscarRecetas falla (por ejemplo, la API de Spoonacular
 *   responde con error), ese error se propaga automáticamente
 *   hacia quien llame a getRecetas — no hace falta duplicar la
 *   gestión de errores aquí, porque el service ya se encarga de
 *   loguearlo y relanzarlo. Esa responsabilidad de "decidir qué
 *   responder al usuario" es del controlador, no del modelo.
 * 
 * Su trabajo es ser el intermediario entre el mundo exterior 
 * (la API de Spoonacular) y el resto de tu aplicación.
 */

