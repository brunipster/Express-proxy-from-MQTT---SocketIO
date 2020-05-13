class CountryRepository {
    constructor(dao) {
        this.dao = dao
    }
    // return this.dao.run(
    //     `INSERT INTO country (
    //     longitude,
    //     latitude,
    //     recovered,
    //     active,
    //     deaths,
    //     confirmed,
    //     country_region,
    //     province_state,
    //     last_update)
    //     VALUES (?,?,?,?,?,?,?,?,?)`,
    //     [country.longitude,
    //     country.latitude,
    //     country.recovered,
    //     country.active,
    //     country.deaths,
    //     country.confirmed,
    //     country.country_region,
    //     country.province_state,
    //     country.last_update
    //     ]
    // )
    create(country) {
        return this.dao.then(db => {
            try {
                return db.get("country").push(country).write()
            } catch (error) {
                return new Promise((resolve) => {
                    console.log(`ERROR DB CREATE : ${error}`)
                    resolve({ error })
                })
            }
        })
    }

    deleteAll() {
        return this.dao.then(db => {
            try {
                return db.set("country", []).write()
            } catch (error) {
                return new Promise((resolve) => {
                    console.log(`ERROR DB DELETE ALL : ${error}`)
                    resolve({ error })
                })
            }
        })
    }

    getAll() {
        return this.dao.then(db => {
            try {
                return db.get("country").value()
            } catch (error) {
                return new Promise((resolve) => {
                    console.log(`ERROR DB GET ALL : ${error}`)
                    resolve({ error })
                })
            }

        })
    }

    filter(filter) {
        return this.dao.then(db => {
            try {
                return db.get("country").filter(filter).value()
            } catch (error) {
                return new Promise((resolve) => {
                    console.log(`ERROR DB FILTER ALL : ${error}`)
                    resolve({ error })
                })
            }

        })
    }

    find(filter) {
        return this.dao.then(db => {
            try {
                return db.get("country").find(filter).value()
            } catch (error) {
                return new Promise((resolve) => {
                    console.log(`ERROR DB FIND ALL : ${error}`)
                    resolve({ error })
                })
            }

        })
    }
}

module.exports = CountryRepository;