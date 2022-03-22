// reply :: IpcMainEvent -> EventName -> Json -> Task Unit
exports.reply = (event) => (name) => (args) => () => {
  return new Promise((res, rej) => {
    event.reply(name, args);
    res();
  });
};

// setReturnValue :: IpcMainEvent -> Json -> Task Unit
exports.setReturnValue = (event) => (args) => () => {
  return new Promise((res, rej) => {
    event.returnValue = args;
    res();
  });
};
