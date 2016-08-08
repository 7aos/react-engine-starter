var _ = require('lodash');

module.exports = function(state, action) {
  if (state === undefined) {
    return {};
  }
  return _.assign({}, state);
};
