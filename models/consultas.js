import pool from '../config/db.js'

export const nuevaCancion = async (repertorio) => {
    let client
    //Sacamos nuestro values del objeto paraa dejarlos en un array
    const values = Object.values(repertorio)
    //Preparamos nuestra consulta preparada
    //Para prevenir SQL Injection
    const consulta = {
    name: "insert-data",
    text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) returning *",
    values
}
try {
    //Aqui nos conectamos a la base de datos
    client = await pool.connect();
    const response = await client.query(consulta);
    return response
} catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.stack);
}finally{
    if(client){
    client.release();
    }
}     
} 

export const mostrarCanciones = async () => {
    let client
    //Para prevenir SQL Injection
    const consulta = {
    name: "fetch-data",
    text: "SELECT * FROM canciones ORDER BY id ASC",
}
try {
    //Aqui nos conectamos a la base de datos
    client = await pool.connect();
    const response = await client.query(consulta);
    return response
} catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.stack);
}finally{
    if(client){
    client.release();
    }
} 
}

export const editarCancion = async(cancion) => {
    let client
    const values = Object.values(cancion)
    const consulta = {
        name: "update-cancion",
        text: "UPDATE canciones SET titulo=$2, artista=$3, tono=$4 WHERE id=$1 RETURNING *",
        values
    }
try {
    client = await pool.connect();
    const response = await client.query(consulta)
    return response.rows
} catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.stack);
}finally{
    if(client){
    client.release();
}
}  
}

export const eliminarCancion = async(id) => {
    let client
    const consulta = {
        name:"delete-cancion",
        text: "DELETE FROM canciones WHERE id=$1 RETURNING *",
        values : [id]
    }
    try {
        client = await pool.connect();
        const response = await client.query(consulta)
        return response.rows
    }catch ( error ) {
        return console.error('Error durante la conexión o la consulta:', error.stack);
    }finally{
        if(client){
            client.release();
        }
    }
}
    


