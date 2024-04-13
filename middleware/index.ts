import cookieParser from 'cookie-parser'
import { json, Express } from 'express'
import cors from 'cors'
import { test } from './test-middleware'

/* 

OBJECTO CON LOS MIDDLEWARES LA LLAVE HACE REFERENCIA A LA RUTA EN DONDE SE APLICARA MIENTRAS QUE EL VALOR ES UN ARRAY CON LOS MIDDLEWARES A USAR

*/

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const middlewares: Record<string, any[]> = {
	'*': [cookieParser(), cors(), json(), test],
}

/*

ESTA FUNCION CARGA TODOS LOS MIDDLEWARES DE ACUERDO A LA RUTA SELECCIONADA
 
*/
export const loadMiddlewares = (app: Express) => {
	for (const [key, value] of Object.entries(middlewares)) {
		app.use(key, ...value)
	}
}