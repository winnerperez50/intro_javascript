
SELECT * FROM tiendas;
-- ejercicio 1
SELECT nombre_tienda, ciudad, estado FROM tiendas WHERE estado IN ("WA");


USE libreria;
SELECT * FROM titulos;



-- ejercicio 2
SELECT titulo, tipo, precio FROM titulos WHERE precio IS NOT NULL; 

-- ejercicio 3 
SELECT titulo, tipo, precio, fecha_pub  FROM titulos WHERE precio IS NOT NULL;

-- ejercicio 4
SELECT titulo, precio FROM titulos WHERE precio > 10;

-- ejercicio 5
SELECT titulo, tipo FROM titulos WHERE tipo = "business";

-- ejercicio 6
SELECT id_titulo, titulo, tipo  FROM titulos WHERE titulo LIKE "Computer%";

-- ejercicio 7
SELECT titulo, tipo, precio FROM titulos WHERE (tipo = "psychology") AND precio >20;

-- ejercicio 8
SELECT titulo, tipo, precio FROM titulos WHERE precio between "10" AND "20";
 
-- ejercicio 9
SELECT titulo, tipo, id_pub FROM titulos WHERE id_pub LIKE "0877";

-- ejercicio 10
SELECT titulo, tipo, precio FROM titulos WHERE (tipo = "psychology") AND precio >20 AND titulo LIKE "Computer%";

-- ejercicio 11
SELECT titulo, tipo, avance, total_ventas FROM titulos WHERE (avance > "5000") AND total_ventas < "4000";

-- ejercicio 12
SELECT titulo, tipo, total_ventas FROM titulos WHERE total_ventas between "4000" AND "5000";

-- ejercicio 13
SELECT titulo, tipo, total_ventas, precio FROM titulos WHERE total_ventas > "1000" AND precio < "10" AND tipo = "business";
