// Importamos express
import express from 'express';
// Importamos nuestro moto de plantilla
import { create } from 'express-handlebars';

// Creación de variables de entorno
import { fileURLToPath } from 'url';
import { dirname } from "path";

// Variables que me permiten mostrar el path donde estoy en el proyecto
const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

//Habilitamos un Meddleware para Habilitar a express que reciba JSON

// IMPORTAMOS NUESTRAS VISTAS
import vistaHomeRoutes from '../routes/vistaHome.routes.js';
import apiRootPostCancionRoutes from '../routes/apiRootPostCancion.routes.js';
import apiRootGetCancionesRoutes from '../routes/apiRootGetCanciones.routes.js';
import apiRootPutEditarRoutes from '../routes/apiRootPutEditar.routes.js';
import apiRootDeleteEliminarCancionRoutes from '../routes/apiRootDeleteEliminarCancion.routes.js';

// Creamos nuestro modelo o clase de servidor

class Server {

    // Vamos a crear nuestro constructor para que ejecute 
    // Middleware
    // Rutas o Routes
    constructor(){
        // Creamos la app  de express
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.frontEndPaths = {
            rootHome:'/',
        }

        this.backEndApi = {
             rootCancion:'/cancion',
             rootCanciones:'/canciones',
             rootEditar:'/editar', 
             rootEliminar:'/eliminar',
        }

        // Iniciamos nuestros metodos iniciales
        this.middlewares();
        this.routes()
    }

    middlewares(){
         this.app.use( express.json() );
         this.app.use( express.static('public') );
         this.app.use('/css', express.static(`${__dirname}/../public/assets/css`));
         this.app.use('/img', express.static( `${__dirname}/../public/assets/img`));
         this.app.use('/js', express.static( `${__dirname}/../public/assets/js`));
         this.app.use('/jquery', express.static( `${__dirname}/../node_modules/bootstrap/dist/css`));
        
        this.app.use(express.urlencoded({ extended: true }));
        // Ruta de CSS para Bootstrap
        this.app.use('/bootstrap', express.static( `${__dirname}/../node_modules/bootstrap/dist/css`));
        this.app.use('/bootstrapjs', express.static( `${__dirname}/../node_modules/bootstrap/dist/js`));
        this.app.use('/bootstrapIcons', express.static( `${__dirname}/../node_modules/bootstrap-icons/font`));
        this.app.use('/jquery',express.static(  `${__dirname}/../node_modules/jquery/dist`  ));
    }
   
    routes(){
    // montar todo el Routing
    // Ruta para la vista principal (home)
        this.app.use('/', vistaHomeRoutes )

       // Rutas CRUD para la API
    // POST (Crear un nueva cancion)
        this.app.use(this.backEndApi.rootCancion, apiRootPostCancionRoutes )
  
    // GET (Obtener datos de canciones)    
        this.app.use(this.backEndApi.rootCanciones, apiRootGetCancionesRoutes )

    // PUT (Editar cancion existente)   
        this.app.use(this.backEndApi.rootEditar, apiRootPutEditarRoutes )
    
    // DELETE (Eliminar un cancion)    
        this.app.use(this.backEndApi.rootEliminar, apiRootDeleteEliminarCancionRoutes )
    }
   
    initHandelbars(){

        this.hbs = create({
            partialsDir:[
                "views"
            ]
        })

        this.app.engine( "handlebars", this.hbs.engine );
        this.app.set("view engine","handlebars");
        
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        } )
    }

}

export default Server;