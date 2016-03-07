SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `cv_db` ;
CREATE SCHEMA IF NOT EXISTS `cv_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `cv_db` ;

-- -----------------------------------------------------
-- Table `cv_db`.`lang`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cv_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(45) NULL,
  `firstname` VARCHAR(45) NULL,
  `tel` VARCHAR(45) NULL,
  `adress` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `postcode` VARCHAR(45) NULL,
  `driving_licence` TINYINT(1) NULL,
  `birth_date` DATE NULL,
  `mail` VARCHAR(45) NULL,
  `picture` VARCHAR(45) NULL,
  `website` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cv_db`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cv_db`.`model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `css` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cv_db`.`cv`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cv_db`.`cv` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `model_id` INT NOT NULL,
  `font` SMALLINT NULL,
  `color` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cv_User1_idx` (`user_id` ASC),
  INDEX `fk_cv_model1_idx` (`model_id` ASC),
  CONSTRAINT `fk_cv_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `cv_db`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cv_model1`
    FOREIGN KEY (`model_id`)
    REFERENCES `cv_db`.`model` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cv_db`.`section`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cv_db`.`section` (
  `id` INT NOT NULL,
  `cv_id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `content` VARCHAR(45) NULL,
  `rank` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_section_cv1_idx` (`cv_id` ASC),
  CONSTRAINT `fk_section_cv1`
    FOREIGN KEY (`cv_id`)
    REFERENCES `cv_db`.`cv` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cv_db`.`liste_section`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cv_db`.`liste_section` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `section_id` INT NOT NULL,
  `content` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_liste_section_section1_idx` (`section_id` ASC),
  CONSTRAINT `fk_liste_section_section1`
    FOREIGN KEY (`section_id`)
    REFERENCES `cv_db`.`section` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `cv_db`.`advice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cv_db`.`advice` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
