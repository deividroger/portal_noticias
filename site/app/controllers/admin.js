module.exports.formulario_inclusao_noticias = function(app,req,resp){

    resp.render('admin/form_add_noticia', { validacao : {}, noticia : {} });

};

module.exports.noticias_salvar = function(app,req,resp){

        var noticia = req.body;

        req.assert('titulo','Título é obrigatório').notEmpty();

        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);

        req.assert('autor','Autor é obrigatório').notEmpty();

        req.assert('data_noticia','Data é obrigatório').notEmpty();

        req.assert('noticia','Noticia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            resp.render('admin/form_add_noticia', {validacao: erros,  noticia: noticia});
            return;
        }

        var connection = app.config.dbConnection();
        
        var noticiasModel = new app.app.models.NoticiasModel(connection);

        noticiasModel.salvarNoticia(noticia,function(error,result){
            
            resp.redirect('/noticias')
            
        });
};