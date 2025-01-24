const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  const { content, userId } = req.body;
  const newNote = new Note({ content, userId });
  await newNote.save();
  res.status(201).send('Note created');
};

exports.getNotes = async (req, res) => {
  const { userId } = req.query;
  const notes = await Note.find({ userId });
  res.status(200).json(notes);
};

