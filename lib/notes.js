const fs = require('fs');
const path = require('path');


function findById(id, zookeepers) {
  const result = zookeepers.filter(zookeeper => zookeeper.id === id)[0];
  return result;
}

function createNewNote(newNote, allNotes) {
  console.log("adding new note");
  allNotes.push(newNote);
  console.log(allNotes)
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    // JSON.stringify({ allNotes }, null, 2)
    JSON.stringify(allNotes)
  );
  return allNotes;
}

function deleteNote(id, notes) {
  console.log("delete new note");
  console.log(notes);
  notes.splice(id, 1);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    // JSON.stringify({ notes }, null, 2)
    JSON.stringify(notes)
  );
  return notes;
}


module.exports = {
  findById,
  createNewNote,
  deleteNote,
};
