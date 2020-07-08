CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
	 (id INT AUTO INCREMENT NOT_NULL,
	  burger_name VARCHAR(20),
	  devoured BOOLEAN, 
	  date TIMESTAMP
	  PRIMARY KEY (id)
);

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT UNSIGNED NOT NULL,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` BOOLEAN NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `devoured_UNIQUE` (`devoured` ASC) VISIBLE);
