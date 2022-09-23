const Note = require("../models/Notes");

const createNote = async (req, res) => {
  const note = req.body;
  const newnote = new Note(note);
  try {
    await newnote.save();
    res.status(200).json("create note succesfully");
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const data = await Note.find({});
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getNotebyid = async (req, res) => {
  try {
    const data = await Note.findOne({ _id: req.params.id });
    return res.send(data);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const editNote = async (req, res) => {
  try {
    var id = { _id: req.params.id };
    const noteinfo = req.body;
    const data = await Note.findByIdAndUpdate(id, noteinfo);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const removeNote = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id });
    res.status(200).json("delete successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNotebyid,
  editNote,
  removeNote,
};
