window.webUtils = window.webUtils || {};

export default function setWindow(name, func) {
  window.webUtils[name] = func;
}
