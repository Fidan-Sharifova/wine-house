const express=require("express")
const app= express()
const cors=require("cors")
const mongoose=require("mongoose")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://Fidan_Sharifova:fidan_2004@cluster0.zlx6suq.mongodb.net/").then(res=>{
    console.log("connected mongodb")
})
const router = require("./router/index.routes")
app.use("/wines",router)

app.listen(1000, ()=>{
    console.log("app running on 1000")
})
