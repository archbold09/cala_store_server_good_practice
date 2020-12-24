const express = require("express");
const CategoryService = require("../services/categories");
const Category = require('../models/categories')
function categoriesApi(app) {
  const router = express.Router();
  app.use("/api/categories", router);
  const CategoriesService = new CategoryService();

  router.get("/", async (req,res) => {
      try{
          const categories = await CategoriesService.getCategories()
        //   const categories = await CategoriesService.getCategories()
        res.status(200).json({
              data:categories,
              message:'Categories listed'
          })
      } catch (error) {
        console.log(`Error: ${error}`);
      }
  });
}
module.exports = categoriesApi;
