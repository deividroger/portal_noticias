var mysql = require('mysql');


var connMySql = function(){

   return mysql.createConnection({
        
        host: 'localhost',
        user: 'user_name_here',
        password: 'pass_here',
        database: 'portal_noticias'
    
    });
};

module.exports = function(){

    return  connMySql;
}
