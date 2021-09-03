-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: projeto_teste
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `tipo` char(1) NOT NULL,
  `salario_minimo` float NOT NULL,
  `salario_maximo` float NOT NULL,
  `excluido` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (4,'Desenvolvedor Júnior','D',3135,4180,1),(5,'DBA','I',3135,7315,0),(23,'Analista de Business Intelligence','N',3069,6479,0),(24,'Cientista de dados','N',6135,14134,0),(29,'Analista de Sistemas','N',2483,6556,0);
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colaborador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `salario` float NOT NULL,
  `id_cargo` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cargo` (`id_cargo`),
  CONSTRAINT `colaborador_ibfk_1` FOREIGN KEY (`id_cargo`) REFERENCES `cargo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colaborador`
--

LOCK TABLES `colaborador` WRITE;
/*!40000 ALTER TABLE `colaborador` DISABLE KEYS */;
INSERT INTO `colaborador` VALUES (9,'Niklaus Wirth',3657.5,24),(10,'Radia Perlman',3657.5,4),(13,'Hedy Lamarr',6792.5,5),(14,'Niklaus Wirth',3657.5,4),(16,'Niklaus Wirth',3657.5,4),(17,'Eduarda batista de jesus',4,24);
/*!40000 ALTER TABLE `colaborador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proprietario`
--

DROP TABLE IF EXISTS `proprietario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proprietario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `imovel` varchar(100) NOT NULL,
  `finalidade` varchar(10) NOT NULL,
  `preco` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proprietario`
--

LOCK TABLES `proprietario` WRITE;
/*!40000 ALTER TABLE `proprietario` DISABLE KEYS */;
INSERT INTO `proprietario` VALUES (3,'Juan Silva','Rua Euclides da Cunha, 145, Santa Efigenia','035-988766767','Lote','Venda',50000),(32,'Joao Miguel','Rua Capitao Garibaldi, 567, Parque Bocaina','035-988765713','Casa','Aluguel',950),(33,'Matheus Pereira','Rua Rua Raul Soares, 345, Centro','035-988547812','Apartamento','Aluguel',800),(35,'Manoel Carlos','Rua Carlota Kemper, 523, Centro','	035-988910924','Sala Comercial','Aluguel',900),(36,'Fernando da Silva','Rua Santana,714, Joaquim Sales','035-998782454','Kitnet','Aluguel',400);
/*!40000 ALTER TABLE `proprietario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'projeto_teste'
--

--
-- Dumping routines for database 'projeto_teste'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-11 21:13:00
