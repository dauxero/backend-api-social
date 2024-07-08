import { connect } from "mongoose";

const connection = async () => {
  try {
    await connect("mongodb://localhost:27017/bd_redsocial");
    console.log("Se ha conectado a la base de datos");
  } catch (error) {
    console.log('error', error);
    throw new error("No hay conexión con la base de datos");
  }
}

export default connection;