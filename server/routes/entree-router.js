const express = require("express");
const router = express.Router();
const EntreeController = require("../controllers/entree-controller");

// Create Dish
router.post("/", EntreeController.createEntree);
// Read Dishes
router.get("/", EntreeController.readEntrees);

module.exports = router;
