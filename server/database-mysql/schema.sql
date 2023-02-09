-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema data1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema data1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `data1` DEFAULT CHARACTER SET utf8 ;
USE `data1` ;

-- -----------------------------------------------------
-- Table `data1`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data1`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `pw` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `data1`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `data1`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `imageUrl` LONGTEXT NOT NULL,
  `user_iduser` INT NOT NULL,
  PRIMARY KEY (`idpost`),
  INDEX `fk_post_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_post_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `data1`.`user` (`iduser`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
