// var sqlite3 = require("sqlite3");
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('db.json')
const database = function () {
    return low(adapter).then(async db => {
        await db.defaults({ country: [] }).write()
        return db
    })
}

// class AppConnect {
//     constructor() {
//         const adapter = new FileAsync('db.json')
//         this.db = low(adapter).then(async db => {
//             await db.defaults({ country: { "peru": "Pruebas" } }).write()
//             return db

//         })
//         // this.db.defaults({ country: [] }).write()
//     }

//     // run(sql, params = []) {
//     //     return new Promise((resolve, reject) => {
//     //         this.db.run(sql, params, function (err) {
//     //             if (err) {
//     //                 console.log('Error running sql ' + sql)
//     //                 console.log(err)
//     //                 reject(err)
//     //             } else {
//     //                 resolve({ id: this.lastID })
//     //             }
//     //         })
//     //     })
//     // }

//     delete(collection) {
//         return this.db.then(db => {
//             try {
//                 return db.set(collection, []).write()
//             } catch (error) {
//                 return new Promise((resolve) => {
//                     console.log(`ERROR DB DELETE ALL : ${error}`)
//                     resolve({ error })
//                 })
//             }
//         })
//     }

//     get(collection) {
//         return this.db.then(db => {
//             try {
//                 return db.get(collection).value()
//             } catch (error) {
//                 return new Promise((resolve) => {
//                     console.log(`ERROR DB GET ALL : ${error}`)
//                     resolve({ error })
//                 })
//             }

//         })
//     }

//     insert
// }

module.exports = database;