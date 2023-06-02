create database SanJunipero;

use SanJunipero;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(25),
Sobrenome varchar(50),
Email varchar(60),
Senha varchar(40));

create table quiz (
idQuiz int primary key auto_increment,
nome varchar(45),
descricao varchar(70))
auto_increment = 100;

create table resposta (
idResposta int,
pontuacao int default(0),
fkUsuario int,
fkQuiz int,
constraint respostaFkUsuario foreign key (fkUsuario) references usuario(idUsuario),
constraint respostaFkQuiz foreign key (fkQuiz) references quiz(idQuiz),
constraint resposta primary key (idResposta, fkUsuario, fkQuiz));

select * from usuario;
select * from quiz;
select * from resposta;