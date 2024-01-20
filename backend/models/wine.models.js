const mongoose= require("mongoose")

const dataModel= mongoose.model("datas", new mongoose.Schema({
    image:String,
    name:String,
    desc:String,
    price:Number
}))

module.exports= dataModel