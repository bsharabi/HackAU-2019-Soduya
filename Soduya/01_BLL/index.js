const dal = require('./../00_DAL/index');


function connectDb() {
    return dal.connect();
}

function initDb() {
    dropTableChair();
}


function dropTableChair() {
    let query = "DROP TABLE IF EXISTS `chair`";

    dal.runQuery(query,
        (res, extra) => { createTableChair() },
        (err) => { console.log("sorry err", err) }
    );
}

function createTableChair() {
    let query =
        "CREATE TABLE `chair`(" +
        "`id`  int			 NOT NULL auto_increment PRIMARY KEY," +
        "`university_name`  VARCHAR(100)      NOT NULL," +
        "`floor`       int              NOT NULL," +
        "`desk`     		int                NOT NULL," +
        "`created_at`		datetime," +
        "`steet`		boolean," +
        "`updated_at`		datetime," +
        "`date_at` nvarchar(20));";
    dal.runQuery(query,
        (res, extra) => { insertChair() },
        (err) => { console.log("sorry err", err) }
    );
}

function insertChair() {

    let query = "INSERT INTO `chair`(university_name,floor,desk,created_at,steet,updated_at,date_at)"+
    "VALUES"+  
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null),"+
           "('Ariel', '01', '1',null,false,null,null);"
           
    dal.runQuery(query,
        (res, extra) => { console.log(res, extra) },
        (err) => { console.log("sorry err", err) }
    );
}

//------------------------CRUD THAT IS USED DIRECT FROM UIL-----------------------------

function getChair(newChair,successCallBack, failCallBack) {
    let query = "SELECT id,steet FROM `Chair`"+
    "where university_name = 'Ariel' and date_at is null";
    dal.runQuery(query, successCallBack, failCallBack);
}

function addChair(newChair, successCallBack, failCallBack) {
    let query =  "UPDATE `chair`"+`
    SET steet=${true},desk=1
    WHERE id =${newChair.id} and university_name = 'Ariel'`;
    console.log(query)
    dal.runQuery(query, successCallBack, failCallBack);
   
}


//--------------------------------------------------------------------------------------
module.exports = {
    "connectDb": connectDb,
    "initDb": initDb,
    "getChair": getChair,
    "addChair": addChair

}
