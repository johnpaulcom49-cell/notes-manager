# Command-Line Notes Manager

A lightweight CLI tool built with core Node.js to save, list, and delete notes in a JSON file without using external npm packages.

## Features
* **Add Notes:** Append new items to your saved list.
* **List Notes:** View all current notes along with their item numbers.
* **Delete Notes:** Remove specific notes by their item number[cite: 1].
* **Automatic Storage:** Automatically generates a `notes.json` file if one does not exist[cite: 1].

---

## How to Run

### 1. Add a Note
To add a new note, run:
```bash
node notes.js add "Your note text here"