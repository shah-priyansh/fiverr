const express = require("express");

const note = require("../controler/card");

const router = express.Router();

router.post("/create-card", note.createCard);
router.get("/get-cards", note.getCards);
router.get("/get-cardbyId/:id", note.getCardbyid);
router.post("/update-card/:id", note.editCard);
router.delete("/delete-card/:id", note.removeCard);

module.exports = router;
