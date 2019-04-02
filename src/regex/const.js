// 手机号码
export const regexPhone = () => /^1[0-9]{10}$/;

// 电子邮箱
export const regexEmail = () => /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

// 特殊字符
export const regexSpecial = () => /\/|\\|>|》|<|《|\?|？|:|：|"|“|”|'|‘|’|\^|·|~|!|！|;|；|\*|&|%|\$|￥|#|@|\n|\f|\r|\t|\v/;
export const regexSpecialG = () => new RegExp(regexSpecial().source, 'g');

// 正则中的特殊字符
export const regexSPS = () => [ // ^$.*+-?=!:|\/()[]{}
  '^',
  '$',
  '.',
  '*',
  '+',
  '-',
  '?',
  '=',
  '!',
  ':',
  '|',
  '\\',
  '/',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
];
