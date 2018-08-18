DROP DATABASE IF EXISTS Taskdb;
CREATE DATABASE Taskdb;

DROP DATABASE IF EXISTS taskdb;
CREATE DATABASE Task;
 

CREATE TABLE task
(
	id int NOT NULL AUTO_INCREMENT,
	project_name varchar(255) NOT NULL,
	client_name  varchar(255) NOT NULL,
    email varchar (200) NULL, 
    passkey varchar (255) NULL, 
	task int NOT NULL,
	client_id int NOT NULL,
	PRIMARY KEY (id),
 );
