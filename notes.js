const fs = require('fs');

// File path to store our notes
const DATA_FILE = 'notes.json';

// Helper function to read notes from the JSON file
function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync(DATA_FILE);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        // If the file doesn't exist yet, return an empty array
        return [];
    }
}

// Helper function to save notes back to the JSON file
function saveNotes(notes) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
}

// Capture command-line arguments
const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add') {
    if (!argument) {
        console.log('Error: Please provide a note to add. Example: node notes.js add "Buy groceries"');
        process.exit(1);
    }
    const notes = loadNotes();
    notes.push({ text: argument });
    saveNotes(notes);
    console.log('Success: Note added!');

} else if (command === 'list') {
    const notes = loadNotes();
    if (notes.length === 0) {
        console.log('Your notes list is empty.');
    } else {
        console.log('Your Notes:');
        notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note.text}`);
        });
    }

} else if (command === 'delete') {
    const notes = loadNotes();
    const noteIndex = parseInt(argument) - 1;

    if (isNaN(noteIndex) || noteIndex < 0 || noteIndex >= notes.length) {
        console.log('Error: Please provide a valid note number to delete. Example: node notes.js delete 1');
        process.exit(1);
    }

    const removedNote = notes.splice(noteIndex, 1);
    saveNotes(notes);
    console.log(`Success: Deleted note -> "${removedNote[0].text}"`);

} else {
    console.log('Invalid command. Use: add, list, or delete.');
    console.log('Examples:');
    console.log('  node notes.js add "My note"');
    console.log('  node notes.js list');
    console.log('  node notes.js delete 1');
}