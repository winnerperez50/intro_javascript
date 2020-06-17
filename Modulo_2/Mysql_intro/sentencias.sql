DROP DATABASE IF EXISTS libreria_cf;
CREATE DATABASE IF NOT EXISTS libreria_cf;

USE libreria_cf;

CREATE TABLE IF NOT EXISTS autores(
autor_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(25) NOT NULL,
apellido VARCHAR(25) NOT NULL,
seudonimo VARCHAR(50) UNIQUE, 
genero ENUM ("M", "F"),
fecha_nacimiento DATE NOT NULL,
pais_origen VARCHAR(25) NOT NULL,
fecha_creacion DATETIME DEFAULT current_timestamp
);

CREATE TABLE libros (
    libro_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    autor_id INT UNSIGNED NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250),
    paginas INTEGER UNSIGNED,
    fecha_publicacion DATE NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (autor_id)
        REFERENCES autores (autor_id)
        ON DELETE CASCADE
);

CREATE TABLE libros_usuarios(
libro_id INT UNSIGNED NOT NULL,
usuario_id INT UNSIGNED NOT NULL,

FOREIGN KEY (libro_id) REFERENCES libros(libro_id),
FOREIGN KEY (usuario_id) REFERENCES uauarios(usuario_id),
fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP 
);


ALTER TABLE libros ADD ventas INT UNSIGNED NOT NULL DEFAULT 0;
ALTER TABLE libros ADD stock INT UNSIGNED DEFAULT 10;

INSERT INTO autores ( nombre, apellido, genero, fecha_nacimiento, pais_origen)
VALUES ("test autor", "test autor", "M", "2020-06-23", "Rep Dom"),
		("codi", "perez", "m", "2020-04-2", "Mexico"),
        ("codi", "perez", "M", "2020-06-23", "España"),
        ("codi", "perez", "M", "2020-06-23", "Rusia"),
        ("codi", "perez", "M", "2020-06-23", "Canada");

        
INSERT INTO autores ( nombre, apellido, seudonimo, fecha_nacimiento, genero, pais_origen)
VALUES ( "Stephen Edwin", "King", "Richard Bachman", "1947-09-27", "M", "Usa"),
	   ("Joanne", "Rowling", "J.k Rowling", "1947-08-27", "F", "Usa");
       
       
       
INSERT INTO libros (autor_id, titulo, fecha_publicacion)
VALUES  (1, "Carrie", "1974-01-01"),
		(1, "El misterio de salmes lot", "1975-01-01"),
        (1, "El respaldo", "1977-01-01"),
        
        (2, "Harry Potter y la Piedra Filosofal", "1997-06-30"),
        (2, "Harry Potter y la Camara secreta", "1998-07-07"),
        (2, "Harry Potter y el Prisionero de azkaban", "1999-07-08"),
        (2, "Harry Potter y el Caliz de fuego", "2000-03-20");
        
INSERT INTO usuarios (nombre, apellidos, username, email)
VALUES ("Eduardo", "Garcia", "Eduardogpg", "eduardogpg@gmail.com"),
		("Codi", "Facilito", "codigoFacilito", "ayudacofigofacilito@gmail.com"),
        ("codi2", "facilito", "cidigofacilito", "ayudacofigofacilito@gmail.com"),
        ("codi3", "facilito", "codigofacilito", "ayudacofigofacilito@gmail.com");
        
        
INSERT INTO libros_usuarios(libro_id, usuario_id)
VALUES (1, 1), (2,1), (3,1),
		(10,30), (20,3), (30,3);
        
SELECT * FROM autores; 
SELECT * FROM libros;
 

        