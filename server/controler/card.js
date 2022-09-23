const Card = require("../models/cards");

const createCard = async (req, res) => {
  const card = req.body;
  const newcard = new Card(card);
  try {
    await newcard.save();
    res.status(200).json("create note succesfully");
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getCards = async (req, res) => {
  try {
    const data = await Card.find({});
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getCardbyid = async (req, res) => {
  try {
    const data = await Card.findOne({ _id: req.params.id });
    return res.send(data);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const editCard = async (req, res) => {
  try {
    var id = { _id: req.params.id };
    const cardinfo = req.body;
    const data = await Card.findByIdAndUpdate(id, cardinfo);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const removeCard = async (req, res) => {
  try {
    await Card.deleteOne({ _id: req.params.id });
    res.status(200).json("delete successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createCard,
  getCards,
  getCardbyid,
  editCard,
  removeCard,
};
