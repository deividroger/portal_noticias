create database portal_noticias;

use portal_noticias;


create table noticias (
id_noticia int not null primary key auto_increment,
titulo varchar(100),
noticia text,
data_criacao timestamp default current_timestamp,
resumo varchar(100),
autor varchar(30),
data_noticia date

);  



INSERT INTO noticias(titulo,noticia) values('Título da notícia','Conteúdo da notícia');

INSERT INTO noticias(titulo,noticia) values('Título da notícia 2','Conteúdo da notícia 2');

INSERT INTO noticias(titulo,noticia) values('Título da notícia 3','Conteúdo da notícia 3');

select * from noticias;