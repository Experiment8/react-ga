function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import warn from '../utils/console/warn';
import trim from '../utils/trim';
/**
 * Maps the first parameter of pageView handler depending on its format
 * @param {Object|String} config Passed configuration for pageView.
 * @return {object} Options object with page string and extraFields.
*/

export default function pageViewOptions(config, title) {
  var options = {
    page: '',
    extraFields: {}
  };

  if (typeof config === 'string') {
    options.page = trim(config);
  } else if (_typeof(config) === 'object') {
    debugger;
    if (!config.page) warn('page cannot be an empty string in .pageview()');
    options.page = trim(config.page);
    delete config.page;
    options.extraFields = _objectSpread({}, config);
  } else {
    warn('passed config is not a recognized format, use object or string instead.');
  }

  if (options.page === '') {
    warn('page cannot be an empty string in .pageview()');
  }

  if (title) {
    options.extraFields.title = title;
  }

  return options;
}