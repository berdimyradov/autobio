// NOTE: see: https://raw.githubusercontent.com/akzhy/Vara/master/src/vara.js
// "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json";
export const FONTS =
  "https://raw.githubusercontent.com/berdimyradov/berdimyradov.github.io/master/src/assets/fonts/shadows-into-light.json";

export const drawWorkaround = (callback: Function) => {
  // Note: Async loading of fonts
  // NOTE: see: https://raw.githubusercontent.com/akzhy/Vara/master/src/vara.js
  // TODO: try to patch vara.js
  setTimeout(() => {
    callback();
  }, 100);
};

export const preLoadAssetsForVara = () => {
  fetch(FONTS);
};
