const express = require("express");
const {getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload} = require("../controller/recipe");
const verifyToken = require("../middleware/auth");
const router = express.Router()

router.get("/",getRecipes) // Get all Recipes
router.get("/:id",getRecipe) // Get recipes ny id
router.post("/", upload.single('file'),verifyToken, addRecipe) // Add recipes
router.put("/:id",editRecipe) // Edit recipes
router.delete("/:id", deleteRecipe) // Delete recipes

module.exports=router;