const Note = require("../models/NoteSchema");

exports.createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = new Note({
      title,
      description,
    });
    const save_note_to_db = await newNote.save();
    return res.status(201).json(save_note_to_db);
    }catch (error) {
      console.log(error);
      return res.status(500).json({message:error.message});
      }
};



exports.Allnote = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "internal server error" });
  }
};
exports.getSingleNoteByTitle = async (req, res) => {
  try {
    const notes = await Note.findOne({ noteTitle: req.params.title });
    return res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "internal server error" });
  }
};
exports.deleteSingleNoteById = async (req, res) => {
  try {
    const notes = await Note.findOneAndDelete({ noteId: req.params.Id });
    return res.status(200).json(`Deleted Successfully`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "internal server error" });
  }
};
exports.updateSingleNoteById = async (req, res) => {
  try {
    const notes = await Note.findOneAndUpdate(
      { noteId: req.params.Id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "internal server error" });
  }
};
