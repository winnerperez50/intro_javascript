DELIMITER //

CREATE FUNCTION obtener_paginas() 
RETURNS INT
BEGIN
    SET @paginas = (SELECT (ROUND (RAND() * 100) * 4))
    RETURN @paginas;
END//

CREATE FUNCTION obtener_ventas()
RETURN INT 
BEGIN
SET @paginas = (SELECT (ROUND ( RAND() * 100 ) * 6));
RETURN @paginas
END//

DELIMITER ;



UPDATE libros SET paginas = obtener_paginas();
UPDATE libros SET ventas = obteber_ventas();




SELECT 
usuarios.nombre,
usuarios.email,
usuarios.username
FROM usuarios
INNER JOIN libros_usuarios ON usuarios.usuario_id = libros_usuarios.usuario_id;