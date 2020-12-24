const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: { type: String, required: [true, "Nombre obligatorio"] },
});
module.exports = model("Category", CategorySchema)
