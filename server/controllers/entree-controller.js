const Entree = require("../models/entree");
class EntreeController {
  // Create Entree
  static async createEntree(req, res, next) {
    const name = req.body.name;
    const ingredients = req.body.ingredients;
    const cookTime = req.body.cookTime;
    const pictureURL = req.body.pictureURL;

    Entree.create({
      name: name,
      ingredients: ingredients,
      cookTime: cookTime,
      pictureURL: pictureURL
    });

    res.json(await Entree.find());
  }
  // Read Entrees
  static async readEntrees(req, res, next) {
    res.json(await Entree.find());
  }
  // Read Entree
  // Update Entree
  // Delete Entree
}

module.exports = EntreeController;
