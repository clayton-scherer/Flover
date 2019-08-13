const mongoose = require("mongoose");

module.exports = mongoose.model("Entree", {
  name: { type: String },
  ingredients: [{ type: String }],
  cookTime: { type: String },
  pictureURL: { type: String }
});
