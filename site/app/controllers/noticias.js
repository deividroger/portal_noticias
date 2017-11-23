module.exports.noticias = function(app,req,resp){

    var connection = app.config.dbConnection();
    
    var noticiasModel = new app.app.models.NoticiasModel(connection);

    noticiasModel.getNoticias(function(error,result){
        resp.render('noticias/noticias',{noticias: result});    
    });
};

module.exports.noticia = function(app,req,resp){
    
    var connection = app.config.dbConnection();
    
    var noticiasModel = new app.app.models.NoticiasModel(connection);

    if( req.query.id_noticia == undefined){

        noticiasModel.get5UltimasNoticias(function(error,result){
            
            resp.redirect('/');
            
        });

    }

    noticiasModel.getNoticia(req.query.id_noticia,function(error,result){
        resp.render('noticias/noticia',{noticia:result});
    });

};