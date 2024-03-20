import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    port: 3306,
    database: "db_nextnotes",
});

export default db;