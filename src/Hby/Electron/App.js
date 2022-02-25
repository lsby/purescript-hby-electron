// onActivate :: Task Unit -> Task Unit
exports.onActivate = (cb) => () => {
  var { app } = require("electron");
  return new Promise((res, rej) => {
    app.on("activate", cb);
    res();
  });
};

// onWindowAllClosed :: Task Unit -> Task Unit
exports.onWindowAllClosed = (cb) => () => {
  var { app } = require("electron");
  return new Promise((res, rej) => {
    app.on("window-all-closed", cb);
    res();
  });
};

// quit :: Task Unit
exports.quit = () => {
  var { app } = require("electron");
  return new Promise((res, rej) => {
    app.quit();
    res();
  });
};

// whenReady :: Task Unit
exports.whenReady = () => {
  var { app } = require("electron");
  return new Promise((res, rej) => {
    app.whenReady().then(() => res());
  });
};
