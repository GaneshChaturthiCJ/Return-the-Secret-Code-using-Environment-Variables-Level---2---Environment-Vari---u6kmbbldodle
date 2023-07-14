const express = require('express');
const app = express();
app.use(express.json());

require("dotenv").config();

function encryptString(str) {
  let encrypted = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let encryptedCharCode = (charCode + 13) % 256;
    encrypted += String.fromCharCode(encryptedCharCode);
  }
  return encrypted;
}

// Write a GET route which encrypts the secret code and returns it to the client
/*
Sample Output: 
HTTP Status Code: 200
{
  "secret": "<encrypted value>"
}

Use the encryptString function given above to encrypt the secret code
*/

app.get("/api/get-env", (req, res) => {
  //Write your code here
  console.log(process.env.SECRET);
  const encryptedMsg = encryptString(process.env.SECRET);
  console.log(encryptedMsg);

  res.status(200).json({
    secret: encryptedMsg,
  });
});

module.exports = app;
