import warn from '../utils/console/warn';
import trim from '../utils/trim';

/**
 * Maps the first parameter of pageView handler depending on its format
 * @param {Object|String} config Passed configuration for pageView.
 * @return {object} Options object with page string and extraFields.
*/
export default function pageViewOptions(config, title) {
  let options = { page: '', hitType: 'pageview' };

  switch (typeof config) {
    case 'string':
      options.page = trim(config);
      break;

    case 'object':
      if (!config.page) warn('page cannot be an empty string in .pageview()');
      options = {
        ...config,
        hitType: options.hitType,
        page: trim(config.page)
      };
      break;

    default:
      warn('passed config is not a recognized format, use object or string instead.');
      break;
  }

  if (options.page === '') warn('page cannot be an empty string in .pageview()');

  if (title) options.title = title;

  return options;
}
