--ALMACENES QUE ESTAN LOCALIZADOS EN EL ESTADO DE WASHINGTON

SELECT nombre_tienda, ciudad, estado FROM tiendas WHERE estado IN ("WA");

--LISTAR LOS LIBROS CON UN PRECIO MAYOR A 10

SELECT id_titulo, tipo, avance FROM titulos WHERE avance > 10;



-- ENCONTRAR UN LIBRO DE PSYCHOLOGY QUE CUESTE MAS DE 20

SELECT id_titulo, tipo, avance FROM titulos WHERE (tipo = "psychology") AND avance > 20;

-- ENCONTRAR LAS CATEGORIAS DE LIBROS QUE EL PUBLICADOR SEA "0877"

SELECT id_tienda, nombre_tienda FROM tiendas WHERE id_tienda LIKE "0877";

--CUALES SON LAS CATEGORIAS DE LIBROS QUE HAN VENDIDO 4000 A 5000 COPIAS EN TOTAL


SELECT tipo, avance FROM titulos WHERE avance BETWEEN "4000" AND "5000";