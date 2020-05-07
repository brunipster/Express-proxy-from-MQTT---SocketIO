const config_countries = [
    { topic: "jhu/csse/covid19/cases/region/update/US/>", socket: "coutry::US", country: "US" },
    { topic: "jhu/csse/covid19/cases/region/update/Peru/>", socket: "coutry::Peru", country: "Peru" },
    { topic: "jhu/csse/covid19/cases/region/update/Mexico/>", socket: "coutry::Mexico", country: "Mexico" },
    { topic: "jhu/csse/covid19/cases/region/update/Argentina/>", socket: "coutry::Argentina", country: "Argentina" },
    { topic: "jhu/csse/covid19/cases/region/update/Chile/>", socket: "coutry::Chile", country: "Chile" },
    { topic: "jhu/csse/covid19/cases/region/update/Colombia/>", socket: "coutry::Colombia", country: "Colombia" },
    { topic: "jhu/csse/covid19/cases/region/update/Brazil/>", socket: "coutry::Brazil", country: "Brazil" },
    { topic: "jhu/csse/covid19/cases/region/update/Ecuador/>", socket: "coutry::Ecuador", country: "Ecuador" },
    { topic: "jhu/csse/covid19/cases/region/update/Bolivia/>", socket: "coutry::Bolivia", country: "Bolivia" },
    { topic: "jhu/csse/covid19/cases/region/update/Paraguay/>", socket: "coutry::Paraguay", country: "Paraguay" },
    { topic: "jhu/csse/covid19/cases/region/update/Uruguay/>", socket: "coutry::Uruguay", country: "Uruguay" },
    { topic: "jhu/csse/covid19/cases/region/update/Venezuela/>", socket: "coutry::Venezuela", country: "Venezuela" },
    { topic: "jhu/csse/covid19/cases/region/update/Suriname/>", socket: "coutry::Suriname", country: "Suriname" },
    { topic: "jhu/csse/covid19/cases/region/update/Guatemala/>", socket: "coutry::Guatemala", country: "Guatemala" },
    { topic: "jhu/csse/covid19/cases/region/update/Nicaragua/>", socket: "coutry::Nicaragua", country: "Nicaragua" },
    { topic: "jhu/csse/covid19/cases/region/update/Panama/>", socket: "coutry::Panama", country: "Panama" },
    { topic: "jhu/csse/covid19/raw", socket: "country::All", country: "All" }
]

const topics = config_countries.map(obj => obj.topic)

module.exports = { config_countries, topics }

