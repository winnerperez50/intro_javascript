
USE prueba_modulo2_Winner_Perez;

-- ejercicio 1
SELECT codigo, titulo, precio, categoria, pub.nombre AS nombre_autor 
FROM libros AS lib
INNER JOIN publicadores AS pub ON lib.id_publicador = pub.id 
WHERE precio BETWEEN 10 AND 20 AND categoria IN ('business','mod_cook');


-- Ejercicio 2
SELECT DISTINCT categoria, pub.nombre AS nombre_autor
FROM libros AS lib INNER JOIN publicadores AS pub ON lib.id_publicador = pub.id
WHERE pub.nombre = "Algodata Infosystems";


-- ejercicio 3 
SELECT  codigo, titulo, categoria, cantidad_vendida from libros WHERE cantidad_vendida < 4000;


-- EJERCICIO 4
SELECT titulo, cantidad_vendida, precio, categoria, cantidad_vendida 
FROM libros 
WHERE cantidad_vendida > 1000 AND precio < 10 AND categoria IN ('business' , 'mod_cook');


-- ejercicio 5
SELECT  categoria, cantidad_vendida 
FROM libros 
WHERE cantidad_vendida between  "4000" AND "5000";


-- ejercicio 6
SELECT titulo, categoria, precio FROM libros WHERE (categoria = "psychology") AND (precio > 20);


-- ejercicio 7 
SELECT titulo, categoria, precio FROM libros WHERE  precio between 10 AND 20;


-- ejercicio 8 
SELECT nombre,  estado FROM tiendas WHERE estado = "wa";


-- ejecicio 9
SELECT titulo, categoria
FROM libros
WHERE categoria NOT IN ('mod_cook','UNDECIDED','popular_comp');


-- ejercicio 10 
SELECT titulo, pub.nombre AS nombre_publicador
FROM libros AS lib
INNER JOIN publicadores AS pub ON lib.id_publicador = pub.id;


-- ejercicio 11
SELECT titulo, categoria, precio FROM libros WHERE precio > 10;


-- ejercicio 12
SELECT titulo, categoria FROM libros WHERE categoria = "business";


-- ejercicio 13
SELECT titulo, categoria FROM libros WHERE titulo like  "%computer%";


-- ejercicio 14
SELECT titulo, categoria, precio FROM libros WHERE categoria = "psychology" AND precio < 20;


-- ejercicio 15 
SELECT titulo, categoria, precio FROM libros WHERE categoria = "psychology" AND precio > 20 AND titulo LIKE "%Computer%";

