
export async function buscarRecetas(query) {
    try {
        const respuesta = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${query}`);
        if (!respuesta.ok) {
            throw new Error('Error al obtener las recetas');
        }
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error('No se pudieron obtener las recetas', error);
        throw error;
    }
 }

/**
 * buscarRecetas(query)
 * -----------------------------------------------------------
 * Servicio que conecta con la API externa de Spoonacular.
 * Se encarga únicamente de hacer la llamada HTTP y devolver los
 * datos ya parseados. No sabe nada de Express (ni req, ni res)
 * — esa responsabilidad es del controlador.
 *
 * - fetch(...) hace la llamada, pasando la API key (desde .env)
 *   y el término de búsqueda (query) en la URL.
 *
 * - if (!respuesta.ok): fetch NO lanza error automáticamente si
 *   Spoonacular responde con un código de error (401, 402, 404...).
 *   Solo falla por problemas de red. Por eso comprobamos
 *   "respuesta.ok" a mano.
 *
 * - throw new Error(...): si la respuesta falló, interrumpimos la
 *   función aquí y saltamos directo al catch. Usamos throw (no
 *   return) porque return devolvería el error como si fuera un
 *   dato normal, y nadie se enteraría de que algo falló.
 *
 * - datos.results: Spoonacular devuelve un objeto con
 *   { results, offset, totalResults }; solo nos interesa el
 *   array de recetas.
 *
 * - catch (error): console.error da visibilidad A TI (logs del
 *   servidor, el usuario no lo ve). throw error relanza el fallo
 *   hacia quien llamó a esta función (modelo y luego controlador),
 *   para que puedan responder al usuario de forma controlada en
 *   vez de recibir "undefined" como si todo hubiera ido bien.
 */