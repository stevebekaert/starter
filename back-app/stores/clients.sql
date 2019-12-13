CREATE DATABASE game;

USE game;

CREATE TABLE `clients`(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(40) NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM clients;
