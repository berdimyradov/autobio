export const drawWorkaround = (callback: Function) => {
  // Note: Async loading of fonts
  // NOTE: see: https://raw.githubusercontent.com/akzhy/Vara/master/src/vara.js
  // TODO: try to patch vara.js
  setTimeout(() => {
    callback();
  }, 1500);
};
