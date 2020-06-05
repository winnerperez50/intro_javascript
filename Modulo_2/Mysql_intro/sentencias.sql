DROP DATABASE libreria_cf;
CREATE DATABASE libreiar_cf;

USE libreria_cf;

CREATE TABLE autores(
autor_id INT,
nombre VARCHAR(25),
apellido VARCHAR(25), 
genero CHAR,
fecha_nacimiento DATE,
pais_origen VARCHAR(25)
);

INSERT INTO autores (autor_id, nombre, apellido, genero, fecha_nacimiento, pais_origen)
VALUES (1, "test autor", "test autor", "M", "2020-06-23", "Rep Dom"),
		(2, "codi", "perez", "m", "2020-04-2", "Mexico"),
        (3, "codi", "perez", "M", "2020-06-23", "España"),
        (4, "codi", "perez", "M", "2020-06-23", "Rusia"),
        (5, "codi", "perez", "M", "2020-06-23", "Canada");
        
        
SELECT *FROM autores;
        