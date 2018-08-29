var mysql = require ("mysql");
var connection;
if (process.env.JawsDB_URL){
    connection = mysql.createConnection(process.env.JawsDB);
} else {
    connection = mysql.createConnection({
        host:"localhost",
        user : "root",
        password : "root",
        database: "taskdb", 

    });
}; 
connection.connect ();
module.exports = connection;
