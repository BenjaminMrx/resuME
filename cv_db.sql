-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 07 Mars 2016 à 17:52
-- Version du serveur: 5.5.44-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `cv_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `advice`
--

CREATE TABLE IF NOT EXISTS `advice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `cv`
--

CREATE TABLE IF NOT EXISTS `cv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `model_id` int(11) NOT NULL,
  `font` smallint(6) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cv_User1_idx` (`user_id`),
  KEY `fk_cv_model1_idx` (`model_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `cv`
--

INSERT INTO `cv` (`id`, `user_id`, `model_id`, `font`, `color`) VALUES
(1, 1, 1, 15, '#000');

-- --------------------------------------------------------

--
-- Structure de la table `liste_section`
--

CREATE TABLE IF NOT EXISTS `liste_section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `section_id` int(11) NOT NULL,
  `date_deb` text NOT NULL,
  `date_fin` text NOT NULL,
  `name` varchar(50) NOT NULL,
  `content` text,
  PRIMARY KEY (`id`),
  KEY `fk_liste_section_section1_idx` (`section_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `liste_section`
--

INSERT INTO `liste_section` (`id`, `section_id`, `date_deb`, `date_fin`, `name`, `content`) VALUES
(1, 0, '2014', '2015', 'Auto-entrepreneur', 'Travail à mon compte en tant que développeur '),
(2, 1, '2015', '2016', 'ESTEI', 'MASTER 1 développement web'),
(3, 1, '2013', '2014', 'Licence Professionnelle RTAI', 'Licence responsable technique d''application internet'),
(4, 2, '', '', '', 'HTML5/CSS3'),
(5, 3, '', '', '', 'Kayak \r\nPratique et enseignement grâce au diplôme d’Initiateur.');

-- --------------------------------------------------------

--
-- Structure de la table `model`
--

CREATE TABLE IF NOT EXISTS `model` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `css` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `model`
--

INSERT INTO `model` (`id`, `css`) VALUES
(1, 'test');

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE IF NOT EXISTS `section` (
  `id` int(11) NOT NULL,
  `cv_id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `content` varchar(45) DEFAULT NULL,
  `rank` varchar(45) DEFAULT NULL,
  `type` enum('exp','edu','skills','hobby','cust') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_section_cv1_idx` (`cv_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `section`
--

INSERT INTO `section` (`id`, `cv_id`, `title`, `content`, `rank`, `type`) VALUES
(0, 1, 'Expériences', 'Bla bla bla', '1', 'exp'),
(1, 1, 'Formation', 'Mes formations', NULL, 'edu'),
(2, 1, 'Compétences', 'Mes compétences', NULL, 'skills'),
(3, 1, 'Loisirs', 'Mes loisirs', NULL, 'hobby');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `tel` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `postcode` varchar(45) DEFAULT NULL,
  `driving_licence` tinyint(1) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `picture` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `lastname`, `firstname`, `tel`, `address`, `city`, `postcode`, `driving_licence`, `birth_date`, `mail`, `picture`, `website`) VALUES
(1, 'Mauroux', 'Benjamin', '0637164939', '2 rue villeneuve', 'Bordeaux', '33000', 1, '1992-10-04', 'benjamin.mauroux@gmail.com', NULL, 'benjaminmauroux.com');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `cv`
--
ALTER TABLE `cv`
  ADD CONSTRAINT `fk_cv_model1` FOREIGN KEY (`model_id`) REFERENCES `model` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cv_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `liste_section`
--
ALTER TABLE `liste_section`
  ADD CONSTRAINT `fk_liste_section_section1` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `fk_section_cv1` FOREIGN KEY (`cv_id`) REFERENCES `cv` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
