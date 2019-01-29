import {
  lstoreSet,
  lstoreGet,
  // lstoreSave,
  // lstoreClear,
  // lstoreInit,
  lstoreKeys,
  // MVP_Store_LocalStorage,
} from '../../store/local-storage';


// 初始化需要和浏览器 localStorage 交互的数据 KEY
lstoreKeys({
  romKey0: 'string',
  romKey1: (v, store, dft) => {
    v = dft.object(v, store, dft);
    v.array = dft.arrayNumber(v, store, dft);
    return v;
  },
});

console.log(lstoreGet('romKey0'));
console.log(lstoreGet('romKey1.0'));

lstoreSet('romKey0', '你好');
// 这里, 不推荐深层次的 set, 比如: lstoreSet('romKey1.0', 123), 因为这并不会自动的 save
lstoreSet('romKey1', {});


console.log(lstoreGet('ramKey0'));

lstoreSet('ramKey0', [1, 2, 3]);

console.log(lstoreGet('ramKey0'));
