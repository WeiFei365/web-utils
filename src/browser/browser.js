import Bowser from 'bowser';


const { browser, platform, os } = Bowser.parse(window.navigator.userAgent);

export function isFirefox() {
  return browser.name === 'Firefox';
}

export function isWeChat() {
  return browser.name === 'WeChat';
}

export function isSafari() {
  return browser.name === 'Safari';
}

export function isChrome() {
  return browser.name === 'Chrome';
}
// 浏览器是否是现代浏览器
export function isModern() {
  return isFirefox() || isWeChat() || isSafari() || isChrome();
}
// 设备是否为：电脑
export function isDesktop() {
  return platform.type === 'desktop';
}
// 设备是否为：手机
export function isMobile() {
  return platform.type === 'mobile';
}
// 设备是否为：平板
export function isTablet() {
  return platform.type === 'tablet';
}
// 操作系统是否为：
export function isIOS() {
  return os.name === 'iOS';
}
// 操作系统是否为：
export function isWindows() {
  return os.name === 'Windows';
}
// 操作系统是否为：
export function isAndroid() {
  return os.name === 'Android';
}
// 操作系统是否为：
export function isMacOS() {
  return os.name === 'macOS';
}
// 浏览器版本号
export function browserVersion() {
  return browser.version || '';
}
// 操作系统版本号
export function osVersion() {
  return os.version || '';
}
