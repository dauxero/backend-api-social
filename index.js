// Importaciones
import connection from "./database/connection.js";
import express, { json, urlencoded } from "express";
import cors from "cors";
import UserRoutes from './routes/user.js';
import FollowRoutes from './routes/follow.js';
import PublicationRoutes from './routes/publication.js';

// Mensaje de bienvenida
console.log("Api node conectado"); 

// Conexion a la bd
connection();

// Crear servidor de node
const app = express();
const puerto = 3900;

// Configurar cors: permite que las peticiones se  hagan correctamente
app.use(cors());

// Conversion de datos (body a objetos JS)
app.use(json());
app.use(urlencoded({ extended: true }));

// Configurar rutas
app.use('/api/user', UserRoutes);
app.use('/api/follow', FollowRoutes);
app.use('/api/publication', PublicationRoutes);


app.get('/test-route', (req, res) => {
  return res.status(200).json(
    {
      'id': 1,
      'name': 'Diana',
      'username': 'dianis'
    }
  );
});

// Configurar el servidor para escuchar las peticiones HTTP
app.listen(puerto, () => {
  console.log('Servidor de node corriendo en el puerto ', puerto);
}); 

// Comandos para frenar el proceso del puerto
// netstat -ano | findstr :3900

// Devuelve un codigo para frenar el proceso y se coloca en PID
// taskkill /PID NUMEROXX /F