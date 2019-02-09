import warn from '../utils/console/warn';
import trim from '../utils/trim';

/**
 * Maps the first parameter of pageView handler depending on its format
 * @param {Object|String} config Passed configuration for pageView.
 * @return {object} Options object with page string and extraFields.
*/
export default function pageViewOptions(config, title) {
  const options = { page: '', extraFields: {} };

  if (typeof config === 'string') {
    options.page = trim(config);
  } else if (typeof config === 'object') {
    if (!config.page) warn('page cannot be an empty string in .pageview()');
    options.extraFields = {
      ...config,
      page: trim(config.page)
    };
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
