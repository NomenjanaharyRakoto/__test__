const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {

    const uri = "mongodb://localhost:27017/carcomments";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("carcomments").collection("cars");
        collection.drop();
        let timeSeriesData = [];

        for (let i = 0; i < 10; i++) {
            const brand = faker.company.companyName();
            const color = faker.internet.color();
            const image = faker.image.imageUrl()
            const matricule = faker.random.alphaNumeric().toUpperCase()
            const newCar = {
                brand: brand,
                color: color,
                image: image,
                matricule: matricule
            }
            timeSeriesData.push(newCar);
        }
        collection.insertMany(timeSeriesData);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();