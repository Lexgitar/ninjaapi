const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect('mongodb+srv://xxx@cluster0.mzc2gzr.mongodb.net/');
        console.log(`Db Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB