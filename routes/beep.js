const express = require('express');
const router = express.Router();
const db = require('../database');
const bodyParser = require('body-parser');

router.get('/', async (req, res) => {
  try {
    // Get the mainCollection from the database
    const collection = await db.mainCollection();
    
    // Find documents where notify is 0
    const results = await collection.find({ notify: 0 }).toArray();
    
    const rowCount = results.length;
    
    if (rowCount > 0) {
      // Send a JSON response indicating that audio should be played
      res.json({ playAudio: true });
    } else {
      res.json({ message: 'No' });
    }
  } catch (err) {
    console.error('Error executing the query: ' + err.stack);
    return res.status(500).send('Error fetching data from the database.');
  }
});

module.exports = router