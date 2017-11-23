module.exports = function(application){

    application.get('/',function(req,resp){
        
        application.app.controllers.home.home(application,req,resp);
        
    });
};