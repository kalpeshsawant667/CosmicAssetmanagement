CREATE DATABASE elearning;
CREATE TABLE users(
uid uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
uname VARCHAR(255),
uemail VARCHAR(255) NOT NULL,
upassword VARCHAR(255) NOT NULL
);

INSERT INTO users ( uname, uemail, upassword) VALUES ( 'kalpesh', 'kalpeshsawant667@gmail.com', 'Cosmic@321');