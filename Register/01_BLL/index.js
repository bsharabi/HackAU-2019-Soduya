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
        (res, extra) => { createTableChair()},
        (err) => { console.log("sorry err", err) }
    );
}

function createTableChair() {
    let query = "CREATE TABLE `chair` ("+
    "`Chair_ID`  int                     NOT NULL auto increment(1,1),"+
    "`University_name` VARCHAR(100)      NOT NULL,"+
    "`Floor`            int              NOT NULL,"+
    "`Table`        int                  NOT NULL,"+   
    "`Free_chair`   boolean              NOT NULL DEFAULT 'false'"+
    "PRIMARY KEY (`Chair_ID`) );";
    dal.runQuery(query,
        (res, extra) => { insertChair()},
        (err) => { console.log("sorry err", err) }
    );
}

function insertChair() {
    let query = "INSERT INTO `chair` VALUES " +
//         uni ariel, floor no1
    `('001', 'Ariel', '01', '01'),
     ('002','Ariel', '01', '01'),
     ('003', 'Ariel', '01',  '01'),
     ('004', 'Ariel', '01',  '01'),
     ('005', 'Ariel', '01',  '01'),

     ('001', 'Ariel', '01', '02'),
     ('002','Ariel', '01', '02'),
     ('003', 'Ariel', '01',  '02'),
     ('004', 'Ariel', '01',  '02'),
     ('005', 'Ariel', '01',  '02'),

     ('001', 'Ariel', '01', '03'),
     ('002','Ariel', '01', '03'),
     ('003', 'Ariel', '01',  '03'),
     ('004', 'Ariel', '01',  '03'),
     ('005', 'Ariel', '01',  '03'),

//  uni ariel, floor no2
    ('001', 'Ariel', '02', '01'),
     ('002','Ariel', '02', '01'),
     ('003', 'Ariel', '02',  '01'),
     ('004', 'Ariel', '02',  '01'),
     ('005', 'Ariel', '02',  '01'),

     ('001', 'Ariel', '02', '02'),
     ('002','Ariel', '02', '02'),
     ('003', 'Ariel', '02',  '02'),
     ('004', 'Ariel', '02',  '02'),
     ('005', 'Ariel', '02',  '02'),

     ('001', 'Ariel', '02', '03'),
     ('002','Ariel', '02', '03'),
     ('003', 'Ariel', '02',  '03'),
     ('004', 'Ariel', '02',  '03'),
     ('005', 'Ariel', '02',  '03'),
//  uni ariel, floor no3
    ('001', 'Ariel', '03', '01'),
     ('002','Ariel', '03', '01'),
     ('003', 'Ariel', '03',  '01'),
     ('004', 'Ariel', '03',  '01'),
     ('005', 'Ariel', '03',  '01'),

     ('001', 'Ariel', '03', '02'),
     ('002','Ariel', '03', '02'),
     ('003', 'Ariel', '03',  '02'),
     ('004', 'Ariel', '03',  '02'),
     ('005', 'Ariel', '03',  '02'),

     ('001', 'Ariel', '03', '03'),
     ('002','Ariel', '03', '03'),
     ('003', 'Ariel', '03',  '03'),
     ('004', 'Ariel', '03',  '03'),
     ('005', 'Ariel', '03',  '03');`;

    dal.runQuery(query,
        (res, extra) => { console.log(res, extra) },
        (err) => { console.log("sorry err", err) }
    );
}
function getChair(successCallBack, failCallBack) {
    let query="SELECT * FROM `Chair`;";
    dal.runQuery(query,successCallBack,failCallBack);
}

function addChair(newChair,successCallBack, failCallBack) {
    let query="INSERT INTO `chair` VALUES " +
    `('${newChair.Chair_ID}', '${newChair.Floor}', '${newChair.brand}', '${newChair.Table}', ${newChair.Free_chair})`;
    dal.runQuery(query,successCallBack,failCallBack);
}


//--------------------------------------------------------------------------------------
module.exports = {
    "connectDb": connectDb,
    "initDb": initDb,
    "getChair":getChair,
    "addChair":addChair
    
}
