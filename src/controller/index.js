const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.action('content', 'list');
    // return this.display('index_index');
  }
};
