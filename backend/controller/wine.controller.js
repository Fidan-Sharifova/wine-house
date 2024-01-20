const dataModel=require("../models/wine.models")

const dataController={
    get: async(req,res)=>{
        try {
            const datas= await dataModel.find({})
            res.send(datas)
        } catch (error) {
            res.send("item not found")
        }
    },
    post: async(req,res)=>{
        try {
            const {image,name,desc,price}=req.body
            const newData= new dataModel({image,name,desc,price})
            await newData.save()
            res.send("new item added")
        } catch (error) {
            res.send("an error occurred while posting data")
        }
    },
    getById:async (req,res)=>{
        try {
            const {id}= req.params
            const oneData=await dataModel.findById(id)
            res.send(oneData)
        } catch (error) {
            res.send("error")
        }
    },
    delete: async (req,res)=>{
        try {
            const {id}=req.params
            await dataModel.findByIdAndDelete(id)
            res.send("item deleted")
        } catch (error) {
            res.send("an error occurred while deleting data")
        }
    }
}

module.exports= dataController