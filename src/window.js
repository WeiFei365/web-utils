import dateConstructor from './date/date-constructor';
import dateDays, { timeHour, timeDay, timeWeek } from './date/date-days';
import dateFormatUTC from './date/date-format-UTC';
import dateFormat from './date/date-format';
import dateSet from './date/date-set';

import fetchGet from './fetch/fetch-get';
import fetchPost from './fetch/fetch-post';

import hashFilter from './native/hash-filter';
import hashFrom from './native/hash-from';
import hashTo from './native/hash-to';
import jsonClone from './native/json-clone';
import jsonFrom from './native/json-from';
import jsonTo from './native/json-to';

import beautyFloat from './number/beauty-float';
import beautyLong from './number/beauty-long';
import beautyNumber from './number/beauty-number';
import beautyUnit from './number/beauty-unit';

import valiFilename from './other/vali-filename';

import { regexPhone, regexEmail, regexSPS } from './regex/const';
import regexSearchChar from './regex/search-char';

import history, { lctPush, lctReplace, lctGet, lctQuery, MVP_Store_History } from './store/history';

import { lstoreSet, lstoreGet, lstoreSave, lstoreClear, lstoreInit, lstoreKeys, MVP_Store_LocalStorage } from './store/local-storage';

import LStoreDB from './store/lstore-db';


window.webUtils = {
  dateConstructor,
  dateDays,
  timeHour,
  timeDay,
  timeWeek,
  dateFormatUTC,
  dateFormat,
  dateSet,

  fetchGet,
  fetchPost,

  hashFilter,
  hashFrom,
  hashTo,
  jsonClone,
  jsonFrom,
  jsonTo,

  beautyFloat,
  beautyLong,
  beautyNumber,
  beautyUnit,

  valiFilename,

  regexPhone,
  regexEmail,
  regexSPS,
  regexSearchChar,

  history,
  lctPush,
  lctReplace,
  lctGet,
  lctQuery,
  MVP_Store_History,

  lstoreSet,
  lstoreGet,
  lstoreSave,
  lstoreClear,
  lstoreInit,
  lstoreKeys,
  MVP_Store_LocalStorage,

  LStoreDB,
};

export default window.webUtils;
