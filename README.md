# Google Authenticator API

This project works integrated with Google Authenticator app and provides an authentication API to read a qrcode or a secret and validate the token generate after the app input.

## Getting Started

The version available runs on a localhost server by the url http://localhost:8080/authentication after install and running.

### Prerequisites

The prerequesites needed are:
* Node.js v6.10.1+
* Any browser (e.g. Google Chrome, Safari, Internet Explorer)
* Internet connection to download the packages

### Installing

After clone or download the project, the install occurs according to the follow command inside your local folder:

```
npm install
```

## Running the project

To start the server, inside the project folder put the line below in your command line tool:

```
npm start
```
After see the message "Server online", go to a browser and put http://localhost:8080/authentication

## Running the tests

To run some tests is recommended to download the Google Authenticator app on Apple ou Google stores.
After register yourself on the app, you can choose the input format (QRCode or manual) to send the information and validate the token created by the app.

## Built With

* [Node.js](https://nodejs.org/en/) - The Javascript runtime used
* [Visual Studio Code](https://code.visualstudio.com/) - Source code editor

## Versioning

For now, this is an one shot version (v.1.0.0) until new requisites be demanded.

## Author

* **Lucas Ferrari** - *Initial work* - [ruhferrari](https://github.com/ruhferrari)

## License
No license.

