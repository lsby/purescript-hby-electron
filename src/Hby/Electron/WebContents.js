// openDevTools :: WebContents -> Task Unit
exports.openDevTools = (wc) => () => {
  return new Promise((res, rej) => {
    wc.openDevTools();
    res();
  });
};
