function Noticias (connection){

    this._connection = connection;

}
Noticias.prototype.getNoticias = function(callback){
    
    this._connection.query('select * from noticias order by data_criacao desc',callback);
};

Noticias.prototype.getNoticia = function getNoticia(id_noticia, callback){
    
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia,callback);
};

Noticias.prototype.salvarNoticia = function(noticia,callback){
    
    this._connection.query('insert into noticias set ?',noticia,callback);
};

Noticias.prototype.get5UltimasNoticias = function(callback){

    this._connection.query('select * from noticias order by data_criacao desc limit 5 ',callback);
};

module.exports = function(){

    return Noticias;
};

