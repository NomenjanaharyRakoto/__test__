const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: '../.env' })

console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.Promise = global.Promise

const database = mongoose.connection


database.on('error', (err) => {
    console.log(`Can't connect to database ====> ${err}`);
})

database.on('open', () => {
    console.log(`Database connected successfully`);
})

const server = app.listen(process.env.APP_PORT || 5001, () => {
    console.log(`server run on http://localhost:${server.address().port}`);
})