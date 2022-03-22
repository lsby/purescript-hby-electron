// on :: EventName -> (IpcMainEvent -> Json -> Task Unit) -> Task Unit
exports.on = (name) => (cb) => () => {
  var { ipcMain } = require("electron");
  return new Promise((res, rej) => {
    ipcMain.on(name, (event, arg) => {
      cb(event)(arg)();
    });
    res();
  });
};
