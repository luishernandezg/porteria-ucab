/*
SQLyog Community v12.3.2 (32 bit)
MySQL - 10.1.19-MariaDB : Database - basedesarrollo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`basedesarrollo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `basedesarrollo`;

/*Table structure for table `automovil` */

DROP TABLE IF EXISTS `automovil`;

CREATE TABLE `automovil` (
  `matricula` char(8) NOT NULL,
  `modelo` char(20) NOT NULL,
  `ano` int(11) DEFAULT NULL,
  `color` char(15) DEFAULT NULL,
  PRIMARY KEY (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `automovil` */

/*Table structure for table `entrada` */

DROP TABLE IF EXISTS `entrada`;

CREATE TABLE `entrada` (
  `numero` int(11) NOT NULL AUTO_INCREMENT,
  `matriculaauto` char(8) NOT NULL,
  `nropuesto` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`numero`),
  KEY `fkmatricula` (`matriculaauto`),
  KEY `fkcedula` (`nropuesto`),
  CONSTRAINT `fkcedula` FOREIGN KEY (`nropuesto`) REFERENCES `puesto` (`nropuesto`),
  CONSTRAINT `fkmatricula` FOREIGN KEY (`matriculaauto`) REFERENCES `automovil` (`matricula`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `entrada` */

/*Table structure for table `matricula` */

DROP TABLE IF EXISTS `matricula`;

CREATE TABLE `matricula` (
  `ciusuario` char(10) NOT NULL,
  `matriculaauto` char(8) NOT NULL,
  `parentesco` char(1) NOT NULL,
  PRIMARY KEY (`ciusuario`,`matriculaauto`),
  KEY `fkauto` (`matriculaauto`),
  CONSTRAINT `fkauto` FOREIGN KEY (`matriculaauto`) REFERENCES `automovil` (`matricula`),
  CONSTRAINT `fkusuario` FOREIGN KEY (`ciusuario`) REFERENCES `usuario` (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `matricula` */

/*Table structure for table `puesto` */

DROP TABLE IF EXISTS `puesto`;

CREATE TABLE `puesto` (
  `nropuesto` int(11) NOT NULL,
  `ubicacion` char(30) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`nropuesto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `puesto` */

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `ci` char(10) NOT NULL,
  `nroexp` char(8) NOT NULL,
  `nombre` char(15) NOT NULL,
  `apellido` char(15) NOT NULL,
  `email` char(20) NOT NULL,
  `telefono` char(15) NOT NULL,
  `password` char(5) NOT NULL,
  `tipo` char(1) DEFAULT NULL,
  PRIMARY KEY (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `usuario` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
