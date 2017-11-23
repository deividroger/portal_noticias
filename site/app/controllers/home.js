module.exports.home = function(app,req,resp){

    var connection = app.config.dbConnection();

    var noticias = new app.app.models.NoticiasModel(connection);

        noticias.get5UltimasNoticias(function(error,result){
            
            resp.render('home/index',{ noticias :result });

        });
};
