module.exports = function(application){

    application.get('/formulario_inlcusao_noticia',function(req,resp){
        
        application.app.controllers.admin.formulario_inclusao_noticias(application,req,resp);
    });

    application.post('/noticias/salvar',function(req,resp){
        
        application.app.controllers.admin.noticias_salvar(application,req,resp);

    });
};


    