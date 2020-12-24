const Mongoose = require("../db/mongo.js");
const Category = require('../models/categories')

class CategoryService {
  constructor() {
    this.schema = Category;
    this.mongoDB = new Mongoose();
  }

  async getCategories() {
    // const [categories] = await this.mongoDB.getAll(this.schema);
    const categories = await this.mongoDB.getAll(this.schema);
    return categories || [];
  }
}
module.exports = CategoryService;
