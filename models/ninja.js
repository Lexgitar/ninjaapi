const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//geo loc schema
const GeoSchema = new Schema({
    type:{
        type:String,
        default: "Point"
    },
    coordinates:{
        type:[Number],
        index: "2dsphere"
    }
})



//schema and model
mongoose.Promise = global.Promise

const NinjaSchema = new Schema({
    name: {
        type: String,
        required:[true, 'field required!']
    },
    rank:{
        type: String,
    },
    available:{
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
    
})

const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja