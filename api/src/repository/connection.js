import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.BD,
    typeCast: function (field, next) {
        if (field.type === 'TYNY' && field.length === 1)
    }
})