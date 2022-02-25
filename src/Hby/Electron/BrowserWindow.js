// newBrowserWindow :: BrowserWindowConf -> Task BrowserWindow
exports.newBrowserWindow = (conf) => () => {
  var { BrowserWindow } = require("electron");
  return new Promise((res, rej) => {
    var c = new BrowserWindow(conf);
    res(c);
  });
};

// loadFile :: BrowserWindow -> PathString -> Task Unit
exports.loadFile = (bw) => (path) => () => {
  return new Promise((res, rej) => {
    bw.loadFile(path);
    res();
  });
};

// getAllWindows :: Task (Array BrowserWindow)
exports.getAllWindows = () => {
  var { BrowserWindow } = require("electron");
  return new Promise((res, rej) => {
    var c = BrowserWindow.getAllWindows();
    res(c);
  });
};

// getWebContents :: BrowserWindow -> WebContents
exports.getWebContents = (bw) => {
  return bw.webContents;
};
// loadURL :: BrowserWindow -> UrlString -> Task Unit
exports.loadURL = (bw) => (url) => () => {
  return new Promise((res, rej) => {
    bw.loadURL(url);
    res();
  });
};
