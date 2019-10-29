function Logger(name) {
  this.name = name;
}

const proto = Logger.prototype;

proto.log = function(msg) {
  console.log(`${this.name}: ${msg}`);
};

proto.info = function(msg) {
  console.log(`${this.name} info: ${msg}`);
};

proto.verbose = function (msg) {
  console.log(`${this.name} verbose: ${msg}`);
};

module.exports = Logger;

// usage:
const DBLogger = new Logger('DB')
DBLogger.info('info 类信息！');
// ...