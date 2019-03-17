var speakeasy = require('speakeasy');
var QRCode = require('qrcode');

module.exports = function (app) {
    var secret = speakeasy.generateSecret({name:"Sensedia Challenge",issuer:"NodeAPI",length:20});

    // Generates the QRCode and the Secret to be used in Google Authenticator
    QRCode.toDataURL(secret.otpauth_url, function(err, data_url) {      
      // Displays the data (qrcode and secret) to the user and provides the Token input to send the validation.
        app.get('/authentication', function (req, res) {
            var html='';
            html +="<body>";
            html += "<form action='/validation'  method='post' name='form1'>";
            html += "<img src='" + data_url + "'></br>";
            html += "<p> Secret: "+ secret.base32+"</p>";
            html += "<p> Token: <input type= 'text' name='token'>";
            html += "<input type='submit' value='Validate'></p>";   
            html += "</form>";
            html += "</body>";
            res.send(html);
        });
      });

    // Validates the token generated by Google Authenticator that was inputed by the user
    app.post('/validation', function (req, res) {  
        var tokenValidation = speakeasy.totp.verify({
            secret: secret.base32,
            encoding: 'base32',
            token: req.body.token
        });
        if (tokenValidation)  
            res.status(201).send("Access allowed.");
        else   
            res.status(401).send("Access denied.");
        });
};