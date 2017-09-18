var mysql = require("mysql");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

exports.pool = pool;


exports.rows = function(procedure, values) {
    return callProcedure(procedure, values).then(function(data) {
        return data[0];
    })
}

function callProcedure(procedure, values) {
    return new Promise(function(fulfill, reject) {
        pool.getConnection(function(err, connection) {
            if(err) {
                reject(err);
            } else {
                pool.query(createQueryString(procedure, values),
                 values, function(err, results) {
                     connection.release();
                    if(err) {
                        reject(err);
                    } else {
                        fulfill(results);
                    }
                })
            }
        })
    });
}

function createQueryString(procedure, values) {
    var query = 'CALL ' + procedure + "(";
    for(var i = 0; i < values.length; i++) {
        query += (i >= values.length - 1 ? "?" : "?,");
    }
    return query += ")";
}