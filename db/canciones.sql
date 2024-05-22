--Conectar al psql con el usuario 
psql -U postgres

-- Se crea la base de datos llamada "repertorio"
CREATE DATABASE repertorio;

--Conectarse a la nueva base de dato
\c repertorio

-- CREACION de la Tabla repertorio
CREATE TABLE canciones (
    id SERIAL,
    titulo VARCHAR(50),
    artista VARCHAR(50),
    tono VARCHAR(50)
);

-- CONSULTAS DE LA TABLA
SELECT * FROM canciones;

-- SE INSERTA 20 Registros de canciones
INSERT INTO canciones (id, titulo, artista, tono) VALUES
('1', 'Lugar Seguro', 'Jay Wheeler y Noreh', 'medio'),
('2', 'Extrañandote', 'Jay Wheeler y Zhamira', 'alto'),
('3', 'Perfume a Tus Pies', 'Jaz Jacob & En Espiritu y En Verdad', 'medio alto'),
('4', 'Dicelo', 'Jay Wheeler y Zhamira', 'medio'),
('5', 'Corre', 'Jesse y Joy', 'alto'),
('6', 'Jesucristo Basta', 'Steven y Lluvia Richards', 'medio alto'),
('7', 'Entra En Mi Vida', 'Sin Bandera', 'medio'),
('8', 'Que Lloro', 'Sin Bandera', 'alto'),
('9', 'Vuelvo a Casa', 'Generacion 12', 'medio alto'),
('10', 'Alejate de Mi', 'Camila', 'alto'),
('11', 'Perra Melancolica', 'La Guru y Karol G', 'medio'),
('12', 'Como Dijiste', 'Christine D Clario', 'alto'),
('13', 'Mientes', 'Camila', 'medio alto'),
('14', 'Lo Aprendi de Ti', 'Ha-Ash', 'medio'),
('15', 'Rey', 'Christine D Clario', 'alto'),
('16', 'Tusa', 'Karol G', 'medio alto'),
('17', 'Bichotag', 'Karol G', 'medio'),
('18', 'Espiritu Santo Ven', 'Barak', 'alto'),
('19', 'Me Rehuso', 'Danny Ocean', 'medio'),
('20', 'Caracas en el 2000', 'Elena Rose', 'medio alto');

--agregar a la tabla un sola cancion
{
      "id": "21",
      "titulo": "Danzando",
      "artista": "Christine D Clario",
      "tono": "medio alto"
}

--agregar a la tabla dos canciones
[
    {
      "id": "22",
      "titulo": "Que Se Abra El Cielo",
      "artista": "Christine D Clario",
      "tono": "alto"
    },
    {
      "id": "23",
      "titulo": "Quiero Conocer a Jesus",
      "artista": "Generacion 12",
      "tono": "alto"
    }
  ]

--agregar a la tabla un listado de canciones
{
  "canciones": [
    {
      "id": "1",
      "titulo": "Lugar Seguro",
      "artista": "Jay Wheeler y Noreh",
      "tono": "medio"
    },
    {
      "id": "2",
      "titulo": "Extrañandote",
      "artista": "Jay Wheeler y Zhamira",
      "tono": "alto"
    },
    {
      "id": "3",
      "titulo": "Perfume a Tus Pies",
      "artista": "Jaz Jacob & En Espiritu y En Verdad",
      "tono": "medio alto"
    },
    {
      "id": "4",
      "titulo": "Dicelo",
      "artista": "Jay Wheeler y Zhamira",
      "tono": "medio"
    },
    {
      "id": "5",
      "titulo": "Corre",
      "artista": "Jesse y Joy",
      "tono": "alto"
    },
    {
      "id": "6",
      "titulo": "Jesucristo Basta",
      "artista": "Steven y Lluvia Richards",
      "tono": "medio alto"
    },
    {
      "id": "7",
      "titulo": "Entra En Mi Vida",
      "artista": "Sin Bandera",
      "tono": "medio"
    },
    {
      "id": "8",
      "titulo": "Que Lloro",
      "artista": "Sin Bandera",
      "tono": "alto"
    },
    {
      "id": "9",
      "titulo": "Vuelvo a Casa",
      "artista": "Generacion 12",
      "tono": "medio alto"
    },
    {
      "id": "10",
      "titulo": "Alejate de Mi",
      "artista": "Camila",
      "tono": "alto"
    },
    {
      "id": "11",
      "titulo": "Perra Melancolica",
      "artista": "La Guru y Karol G",
      "tono": "medio"
    },
    {
      "id": "12",
      "titulo": "Como Dijiste",
      "artista": "Christine D Clario",
      "tono": "alto"
    },
    {
      "id": "13",
      "titulo": "Mientes",
      "artista": "Camila",
      "tono": "medio alto"
    },
    {
      "id": "14",
      "titulo": "Lo Aprendi de Ti",
      "artista": "Ha-Ash",
      "tono": "medio"
    },
    {
      "id": "15",
      "titulo": "Rey",
      "artista": "Christine D Clario",
      "tono": "alto"
    },
    {
      "id": "16",
      "titulo": "Tusa",
      "artista": "Karol G",
      "tono": "medio alto"
    },
    {
      "id": "17",
      "titulo": "Bichota",
      "artista": "Karol G",
      "tono": "medio"
    },
    {
      "id": "18",
      "titulo": "Espiritu Santo Ven",
      "artista": "Barak",
      "tono": "alto"
    },
    {
      "id": "19",
      "titulo": "Me Rehuso",
      "artista": "Danny Ocean",
      "tono": "medio"
    },
    {
      "id": "20",
      "titulo": "Caracas en el 2000",
      "artista": "Elena Rose",
      "tono": "medio alto"
    }
  ]
}
