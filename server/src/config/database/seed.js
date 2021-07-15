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

        let timeSeriesData = [{
                brand: 'Tesla Model 3',
                color: '#880009',
                image: 'https://cdn.motor1.com/images/mgl/NYkQn/s3/2021-tesla-model-3.webp',
                matricule: 'SIUU-8767',
                description: 'La Model 3 est disponible avec une transmission intégrale Dual Motor, des freins et des jantes 20” Performance ainsi que des suspensions rabaissées pour un contrôle total, quelles que soient les conditions météorologiques. Un aileron arrière en fibre de carbone améliore également la stabilité à grande vitesse. La Model 3 accélère de 0 à 100 km/h* en seulement 3,3 secondes.'
            },
            {
                brand: 'Porche 911',
                color: '#f0f0f0',
                image: 'https://files.porsche.com/filestore/image/multimedia/none/911-tus-modelimage-sideshot/thumbnail/930894f2-6214-11ea-80c8-005056bbdc38/porsche-thumbnail.png',
                matricule: 'YUETYE-675',
                description: `La Porsche 911 est une voiture de sport haut de gamme fabriquée par la firme allemande Porsche. La première génération est commercialisée en 1964, intégralement conçue par la firme de Stuttgart. Cinquante ans plus tard, le modèle emblématique de Porsche en conserve l'esthétique générale et le nom. La 911 est toujours produite et commercialisée dans sa dernière version en date, la 992. L'architecture du moteur est restée inchangée jusqu'à aujourd'hui. Il s'agit du 6-cylindres à plat (flat-six), disposé en porte-à-faux arrière.`
            },
            {
                brand: 'Lambourgini Huracán',
                color: '#84980f',
                image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/hero-banner/huracan/11_03_evo_fluo_lancio/11_23/Huracan_Evo_Fluo_cc-verde_shock-sceneplate_env.png',
                matricule: 'TYR-67556',
                description: `L'Huracán est une supercar du constructeur automobile italien Lamborghini. Dévoilée lors du salon international de l'automobile de Genève 2014, elle succède à la Gallardo en utilisant un moteur V10 de`
            },

        ];


        collection.insertMany(timeSeriesData);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();