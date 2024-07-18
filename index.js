//Importación de frameworks y módulos
import express from 'express'
import {engine} from 'express-handlebars'
import path from 'path'

//Configuración de la aplicación
const app = express();
const __dirname = path.resolve();
console.log(__dirname);

//Configuración de los archivos estáticos
app.use(express.static('public'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));

//Configuración del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('views', './views');

//Configuración de las rutas
app.get('/', (req, res) => {
  let productos = ['banana', 
                  'cebollas', 
                  'lechuga',
                  'papas', 
                  'pimenton', 
                  'tomate']
  return res.render('home', {productos: productos})
});
app.get('/*', (req, res) => {
  res.status(404).render('404');
});

//Inicialización del servidor
app.listen(5000, () => console.log(`Servidor inicializado en: http://localhost:5000`));

