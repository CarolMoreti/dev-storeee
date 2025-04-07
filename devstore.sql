-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/03/2025 às 19:39
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `devstore`
--
CREATE DATABASE IF NOT EXISTS `devstore` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `devstore`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tblprodutos`
--

CREATE TABLE `tblprodutos` (
  `idProd` int(11) NOT NULL,
  `descProd` varchar(150) NOT NULL,
  `precoProd` decimal(5,2) NOT NULL,
  `categoriaProd` varchar(100) NOT NULL,
  `tamanhoProd` varchar(20) NOT NULL,
  `fotoProd` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tblprodutos`
--

INSERT INTO `tblprodutos` (`idProd`, `descProd`, `precoProd`, `categoriaProd`, `tamanhoProd`, `fotoProd`) VALUES
(1, 'Adesivo HTML', 15.99, 'Acessórios', 'M', 'adesivoHTML.png'),
(2, 'Adesivo Android', 12.99, 'Acessórios', 'P', 'android-stickers-adesivo 1.png'),
(3, 'Adesivo CSS', 20.99, 'Acessórios', 'G', 'hexa_CSS_adesivo_sticker-600x600 1.png'),
(4, 'Adesivo Dino', 12.99, 'Acessórios', 'P', 'hexa_dino_adesivo_sticker-600x600 1.png'),
(5, 'Adesivo Github', 20.99, 'Acessórios', 'G', 'hexa_github_adesivo_sticker-600x600 1.png'),
(6, 'Adesivo JAVA', 15.99, 'Acessórios', 'M', 'hexa_JAVA_adesivo_sticker-600x600 1.png'),
(7, 'Adesivo Javascript', 12.99, 'Acessórios', 'P', 'hexa_JS_adesivo_sticker-600x600 1.png'),
(8, 'Adesivo PHP7', 20.99, 'Acessórios', 'G', 'hexa_php7_adesivo_sticker-600x600 1.png'),
(9, 'Adesivo Python', 15.99, 'Acessórios', 'M', 'hexa_python_adesivo_sticker-600x600 1.png'),
(10, 'Camiseta CSS', 59.99, 'Camisetas', 'P', 'camiseta-css.png'),
(11, 'Camiseta HTML', 59.99, 'Camisetas', 'M', 'camiseta-html.png'),
(12, 'Camiseta Javascript', 59.99, 'Camisetas', 'G', 'camiseta-js.png'),
(13, 'Camiseta PHP', 59.99, 'Camisetas', 'P', 'camiseta-php.png'),
(14, 'Camiseta React', 59.99, 'Camisetas', 'M', 'camiseta-react-native.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tblprodutos`
--
ALTER TABLE `tblprodutos`
  ADD PRIMARY KEY (`idProd`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tblprodutos`
--
ALTER TABLE `tblprodutos`
  MODIFY `idProd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
