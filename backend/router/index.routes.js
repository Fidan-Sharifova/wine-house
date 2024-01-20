const express=require("express")
const dataController= require("../controller/wine.controller")
const router= express.Router()

router.get("/",dataController.get)
router.post("/",dataController.post)
router.get("/:id", dataController.getById)
router.delete("/:id", dataController.delete)

module.exports=router