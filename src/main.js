var electron = require("electron");
var { app, BrowserWindow } = require("electron");

var initialize = function () {
  // Create the browser window.
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile("index.html");
};

app.whenReady().then(initialize);
