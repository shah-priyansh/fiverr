const express = require("express");

const note = require("../controler/card");

const router = express.Router();

router.post("/create-note", note.createCard);
router.get("/get-notes", note.getCards);
router.get("/get-notebyId/:id", note.getCardbyid);
router.post("/update-note/:id", note.editCard);
router.delete("/delete-note/:id", note.removeCard);

module.exports = router;
