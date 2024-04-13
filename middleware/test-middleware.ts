import { Request, Response, NextFunction } from 'express'
/* 

MIDDLEWARE DE PRUEBA

*/

export const test = (req: Request, res: Response, next: NextFunction) => {
	console.log(['🤖 TEST MIDDLEWARE'])
	next()
}