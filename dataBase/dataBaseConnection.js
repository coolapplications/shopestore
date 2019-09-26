'use strict';
const mysql = require('mysql');

const { database } = require('/dataBase');

const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
    if(error){
        switch (error.code){
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('Database connection was closed.');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('Database has to many connections');
                break;
            case 'ECONNREFUSED':
                console.error('Database connection was refused');
                break;
            default:
                console.error('UNKNOWN');
        }
    }

});
