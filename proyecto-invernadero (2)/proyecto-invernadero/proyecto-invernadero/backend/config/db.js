const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678', 
    database: 'invernadero.db' 
});

db.connect((err) => {
    if (err) console.error('Error conectando a BD:', err);
    else console.log('✅ Conectado a MySQL');
});

module.exports = db;