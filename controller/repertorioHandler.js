import {
    nuevaCancion,
    mostrarCanciones,
    editarCancion,
    eliminarCancion
} from '../models/consultas.js'

export const postRepertorioHandler = async (req, res) => {    
    // const {cancion, artista, tono} = req.body
    try {
        const response = await nuevaCancion(req.body);
        console.log('Salida de response-->', response);
        res.status(200).json({ respuesta: 'OKEY', data: response.rows});
    } catch (error) {
        console.error('Error al insertar los datos', error);
    }
};

export const getRepertorioHandler = async (req, res) => { 
   try {
    const response = await mostrarCanciones();
    res.status(200).json(response.rows)
   } catch (error) {
    console.error('Error al realizar la consulta de canciones', error)
   }
};

export const putRepertorioHandler = async (req, res) => { 
    try {
        const  id  = req.params.id
        const { titulo , artista , tono } = req.body
        const response = await editarCancion({id, titulo , artista , tono })
        res.status(200).send( response.rows )
    } catch (error) {
        console.error('Error al realizar la consulta de canciones', error)
    }
}

export const deleteRepertorioHandler = async (req, res) => { 
    try {
        const  id  = req.params.id;
        const response  = await eliminarCancion(id)
        res.status(200).send( response.rows  )
    } catch (error) {
        console.error('Error al realizar la consulta de canciones', error)
    }
}

