const config_countries = [
    { topic: "jhu/csse/covid19/cases/region/update/US/>", socket: "country::US", country: "US" },
    { topic: "jhu/csse/covid19/cases/region/update/Peru/>", socket: "country::Peru", country: "Peru" },
    { topic: "jhu/csse/covid19/cases/region/update/Mexico/>", socket: "country::Mexico", country: "Mexico" },
    { topic: "jhu/csse/covid19/cases/region/update/Argentina/>", socket: "country::Argentina", country: "Argentina" },
    { topic: "jhu/csse/covid19/cases/region/update/Chile/>", socket: "country::Chile", country: "Chile" },
    { topic: "jhu/csse/covid19/cases/region/update/Colombia/>", socket: "country::Colombia", country: "Colombia" },
    { topic: "jhu/csse/covid19/cases/region/update/Brazil/>", socket: "country::Brazil", country: "Brazil" },
    { topic: "jhu/csse/covid19/cases/region/update/Ecuador/>", socket: "country::Ecuador", country: "Ecuador" },
    { topic: "jhu/csse/covid19/cases/region/update/Bolivia/>", socket: "country::Bolivia", country: "Bolivia" },
    { topic: "jhu/csse/covid19/cases/region/update/Paraguay/>", socket: "country::Paraguay", country: "Paraguay" },
    { topic: "jhu/csse/covid19/cases/region/update/Uruguay/>", socket: "country::Uruguay", country: "Uruguay" },
    { topic: "jhu/csse/covid19/cases/region/update/Venezuela/>", socket: "country::Venezuela", country: "Venezuela" },
    { topic: "jhu/csse/covid19/cases/region/update/Suriname/>", socket: "country::Suriname", country: "Suriname" },
    { topic: "jhu/csse/covid19/cases/region/update/Guatemala/>", socket: "country::Guatemala", country: "Guatemala" },
    { topic: "jhu/csse/covid19/cases/region/update/Nicaragua/>", socket: "country::Nicaragua", country: "Nicaragua" },
    { topic: "jhu/csse/covid19/cases/region/update/Panama/>", socket: "country::Panama", country: "Panama" },
    { topic: "jhu/csse/covid19/raw", socket: "country::All", country: "All" }
]

const topics = config_countries.map(obj => obj.topic)

module.exports = { config_countries, topics }

