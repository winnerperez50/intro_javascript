
ALTER DATABASE prueba_modulo2_Winner_Perez COLLATE='utf8_general_ci';
USE prueba_modulo2_Winner_Perez;
CREATE TABLE IF NOT EXISTS publicadores (
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT NOT NULL,
    ciudad VARCHAR(15) NOT NULL,
    estado  VARCHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS tiendas (
    id INT(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT NOT NULL,
    codigo_postal VARCHAR(6) NOT NULL,
    ciudad VARCHAR(15) NOT NULL,
    estado VARCHAR(2) NOT NULL
);

INSERT INTO publicadores(nombre, ciudad, estado)
VALUES ('New Age Books', 'Boston', 'MA'),
('Binnet & Hardley', 'Washington', 'DC'),
('Algodata Infosystems', 'Berkeley', 'CA');

INSERT INTO tiendas(nombre, codigo_postal, ciudad, estado)
VALUES ('Barnums', '92789', 'Tustin', 'CA'),
('News & Brews', '96745', 'Los Gatos', 'CA'),
('Quality Laundry and Books', '98014', 'Remulade', 'WA'),
('Bookbeat', '89076', 'Portland', 'OR'),
('Eric the Read Books', '98056', 'Seattle', 'WA'),
('Fricative Bookshop', '90019', 'Fremont', 'CA'),
('Thoreau Reading Discount Chain', '1776', 'Concord', 'MA');

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE IF NOT EXISTS `libros` (
  `id` int(11) NOT NULL,
  `codigo` varchar(6) NOT NULL,
  `titulo` text NOT NULL,
  `categoria` varchar(12) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `cantidad_vendida` int(9) NOT NULL,
  `id_publicador` int(11) UNSIGNED NOT NULL,
  FOREIGN KEY (id_publicador) REFERENCES publicadores(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `libros` (`id`, `codigo`, `titulo`, `categoria`, `precio`, `cantidad_vendida`, `id_publicador`) VALUES
(1, 'BU1032', 'The Busy Executive Database Guide', 'business', '20', 5000, 3),
(2, 'BU1111', 'Cooking with Computers: Surreptitious Balance Sheets', 'business', '12', 5000, 3),
(3, 'BU2075', 'You Can Combat Computer Stress!', 'business', '3', 10125, 1),
(4, 'BU7832', 'Straight Talk About Computers', 'business', '20', 5000, 3),
(5, 'MC2222', 'Silicon Valley Gastronomic Treats', 'mod_cook', '20', 0, 2),
(6, 'MC3021', 'The Gourmet Microwave', 'mod_cook', '3', 15000, 2),
(7, 'MC3026', 'The Psychology of Computer Cooking', 'UNDECIDED', '0', 0, 2),
(8, 'PC1035', 'But Is It User Friendly?', 'popular_comp', '23', 7000, 3),
(9, 'PC8888', 'Secrets of Silicon Valley', 'popular_comp', '20', 8000, 3),
(10, 'PC9999', 'Net Etiquette', 'popular_comp', '0', 0, 3),
(11, 'PS1372', 'Computer Phobic and Non-Phobic Individuals: Behavior Variati', 'psychology', '22', 7000, 2),
(12, 'PS2091', 'Is Anger the Enemy?', 'psychology', '11', 2275, 1),
(13, 'PS2106', 'Life Without Fear', 'psychology', '7', 6000, 1),
(14, 'PS3333', 'Prolonged Data Deprivation: Four Case Studies', 'psychology', '20', 2000, 1),
(15, 'PS7777', 'Emotional Security: A New Algorithm', 'psychology', '8', 4000, 1),
(16, 'TC3218', 'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterran', 'trad_cook', '21', 7000, 2),
(17, 'TC4203', 'Fifty Years in Buckingham Palace Kitchens', 'trad_cook', '12', 4000, 2),
(18, 'TC7777', 'Sushi, Anyone?', 'trad_cook', '15', 8000, 2);

ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

