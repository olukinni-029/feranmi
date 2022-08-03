const express = require('express');
const router = express.Router();
const {
    createNote,
    Allnote,
    getSingleNoteByTitle,
    deleteSingleNoteById,
    updateSingleNoteById,

} =require('../controllers/note.controller');

router.post('/notes',createNote);
router.get('/notes',Allnote);
router.get('/notes/:Title',getSingleNoteByTitle);
router.delete('/notes/:Id',deleteSingleNoteById);
router.put('/notes/:Id',updateSingleNoteById);

module.exports=router;
