DROP DATABASE IF EXISTS Taskdb;
CREATE DATABASE Taskdb;

DROP DATABASE IF EXISTS Clientsdb;
CREATE DATABASE Clientsdb;

-- ### Alternative way to insert more than one row
INSERT INTO clients (email, passkey)
VALUES ("cdcamp@hotmail.com",1234 );
