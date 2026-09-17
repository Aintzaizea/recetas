import {Router} from 'express';
import * as ctrl from '../controllers/recetasController.js';
const router = Router();

router.get('/api/recetas', ctrl.listarRecetas);

export default router;

/**
 * recetasRoutes.js
 * -----------------------------------------------------------
 * Archivo de rutas de recetas. Su única responsabilidad es
 * conectar cada URL + método HTTP con la función del controlador
 * que debe atenderla. No contiene lógica de negocio ni de HTTP
 * más allá del propio enrutamiento.
 *
 * - import { Router } from 'express': traemos la función Router
 *   de Express (con mayúscula, así la exporta el paquete) para
 *   crear un enrutador independiente del resto de la app.
 *
 * - import * as ctrl from '../controllers/recetasController.js':
 *   importamos TODAS las funciones exportadas del controlador de
 *   una vez, agrupadas bajo el alias "ctrl" (mismo patrón que en
 *   el proyecto de películas). Así, en vez de importar cada
 *   función suelta con llaves, accedes a ellas como ctrl.nombreFuncion.
 *
 * - const router = Router(): creamos una instancia de router.
 *
 * - router.get('/api/recetas', ctrl.listarRecetas): conecta la
 *   URL completa "/api/recetas" (con método GET) con la función
 *   listarRecetas del controlador. La ruta va completa aquí
 *   (en vez de un prefijo separado en index.js) para mantener
 *   consistencia con el proyecto de películas.
 *
 * - export default router: exportamos el router por defecto
 *   (no como export nombrado), porque cada archivo de rutas
 *   normalmente exporta un único router.
 */