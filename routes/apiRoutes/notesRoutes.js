const router = require('express').Router();
const {
  findById,
  createNewNote,
} = require('../../lib/notes');
const notes  = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let currentNotes = notes;
  req.json(currentNotes);
});

router.get('/notes/:id', (req, res) => {
  
});


module.exports = router;
