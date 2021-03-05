const sqlite = require('sqlite3')
// .verbose() is used to show all the query on the console
const db = new sqlite.Database(__dirname + '/test.db')


db.serialize(()=>{
    db.run(`CREATE TABLE IF NOT EXISTS tasks
    (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name TEXT,
        done BOOLEAN
    )
    `)
    db.run(`INSERT INTO tasks VALUES(1,'read books',false)`
    )
})