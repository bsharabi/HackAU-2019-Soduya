const mySql = require('mysql');


// this is a global var - so we can use it in all the functions in this file
let connection;



function connect() {
    let connectionConfig = {
        "host": "localhost",
        "user": "root2",
        "database": "test"
    };

    //here we asiggn to the global var - the open connection that we created
    connection = mySql.createConnection(connectionConfig);
}


function runQuery(queryToDb, successCallBack, failCallBack) {
    
    let callBackToQuery = (p1, p2, p3) => { (p1)? failCallBack(p1): successCallBack(p2, p3);};
    connection.query(queryToDb,callBackToQuery);
}


module.exports = {
    "connect": connect,
    "runQuery": runQuery
}
