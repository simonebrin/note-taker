const router = require('express').Router();
const {
  findById,
  createNewNote,
} = require('../../lib/notes');
const notes  = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let currentNotes = notes;
  res.json(currentNotes);
});

router.get('/notes/:id', (req, res) => {
  let currentNotes = notes;
  res.json(currentNotes[req.params.id-1])
});

router.post('/notes', (req, res) => {
  let currentNotes = notes;
  currentNotes.push(req.body);
  res.json(currentNotes);

});

router.delete('/notes/:id', (req, res) => {
  let currentNotes = notes;
  currentNotes.splice(req.params.id-1, 1)
  res.json(currentNotes)
})

module.exports = router;

const newNote = {
  title: "New note to save",
  text: "new notes text"
}

const arrayOfAllNotes = []
arrayOfAllNotes.push(newNote)