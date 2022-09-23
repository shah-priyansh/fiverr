const express = require("express");

const note = require("../controler/note");

const router = express.Router();

router.post("/create-note", note.createNote);
router.get("/get-notes", note.getNotes);
router.get("/get-notebyId/:id", note.getNotebyid);
router.post("/update-note/:id", note.editNote);
router.delete("/delete-note/:id", note.removeNote);

module.exports = router;
