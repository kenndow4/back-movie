import express, {Express} from 'express'
import router from './routes/auth';
// import authRouter from './routes/auth';
import { db } from '../config/db';
import 'dotenv/config'
import { loadMiddlewares } from '../middleware';



export class Server{
   #app: Express
   #port: number
    constructor() {
      this.#app = express()
      this.database()
      this.middleware()
      this.#port = Number(process.env.PORT) || 4000
      this.routes(); // Agrega esta línea para llamar al método routes()
    }

    middleware() {
      loadMiddlewares(this.#app)
    }

    database() {
      db()
    }

    routes() {
      this.#app.use('/api', router);
    }
    
    start =()=>{
      
          this.#app.use(express.static("public"));
        
      this.#app.listen(this.#port,()=>{
        console.log(`Running in PORT ${this.#port}`);
      })
   }
}