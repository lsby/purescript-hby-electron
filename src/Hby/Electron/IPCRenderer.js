// send :: EventName -> Json -> Task Unit
exports.send = (name) => (args) => () => {
  return new Promise((res, rej) => {
    window.ipcRenderer.send(name, args);
    res();
  });
};

// on :: EventName -> (IpcRendererEvent -> Json -> Task Unit) -> Task Unit
exports.on = (name) => (cb) => () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      window.ipcRenderer.on(name, (event, args) => {
        cb(event)(args)();
      });
      res();
    }, 0);
  });
};

// sendSync :: EventName -> Json -> Task Json
exports.sendSync = (name) => (args) => () => {
  return new Promise((res, rej) => {
    var c = window.ipcRenderer.sendSync(name, args);
    res(c);
  });
};
