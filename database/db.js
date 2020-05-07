var sqlite3 = require("sqlite3");
sqlite3.verbose();

class AppConnect {
    constructor() {
        this.db = new sqlite3.Database("database.db"), (err) => {
            if (err) {
                console.log('Database not connected', err)
            } else {
                console.log('Database Connected')
            }
        };
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve({ id: this.lastID })
                }
            })
        })
    }

    get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, result) => {
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = AppConnect;