const express = require("express");
const {getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe");
const router = express.Router()

router.get("/",getRecipes) // Get all Recipes
router.get("/:id",getRecipe) // Get recipes ny id
router.post("/", addRecipe) // Add recipes
router.put("/:id",editRecipe) // Edit recipes
router.delete("/:id", deleteRecipe) // Delete recipes

module.exports=router;