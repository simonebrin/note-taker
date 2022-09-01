const router = require('express').Router();
const {
  findById,
  createNewNote,
  deleteNote,
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
  let newNotes = createNewNote(req.body, notes)
  res.json(newNotes);

});

router.delete('/notes/:id', (req, res) => {
  let newNotes = deleteNote(req.params.id-1, notes)
  res.json(newNotes);
  // currentNotes.splice(req.params.id-1, 1)
})

module.exports = router;

// const newNote = {
//   title: "New note to save",
//   text: "new notes text"
// }

// const arrayOfAllNotes = []
// arrayOfAllNotes.push(newNote)