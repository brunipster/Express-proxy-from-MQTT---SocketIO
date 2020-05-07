class CountryRepository {
    constructor(dao) {
        this.dao = dao
        this.createTable()
    }

    createTable() {
        const sql = `
        CREATE TABLE IF NOT EXISTS country (
            longitude REAL,
            latitude REAL,
            recovered INTEGER,
            active INTEGER,
            deaths INTEGER,
            confirmed INTEGER,
            country_region TEXT,
            province_state TEXT,
            last_update TEXT)`
        return this.dao.run(sql)
    }

    create(country) {
        return this.dao.run(
            `INSERT INTO country (
            longitude,
            latitude,
            recovered,
            active,
            deaths,
            confirmed,
            country_region,
            province_state,
            last_update)
            VALUES (?,?,?,?,?,?,?,?,?)`,
            [country.longitude,
            country.latitude,
            country.recovered,
            country.active,
            country.deaths,
            country.confirmed,
            country.country_region,
            country.province_state,
            country.last_update
            ]
        )
    }

    deleteAll() {
        return this.dao.run('DELETE FROM country')
    }

    getAll() {
        return this.dao.run(
            'SELECT * FROM country'
        )
    }

    getByCountry(country) {
        console.log(country)
        return this.dao.get(
            `SELECT longitude,
            latitude,
            recovered,
            active,
            deaths,
            confirmed,
            country_region,
            province_state,
            last_update FROM country where country_region = ? `, [country]
        )
    }
}

module.exports = CountryRepository;