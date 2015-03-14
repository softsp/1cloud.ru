// Generated by CoffeeScript 1.9.1
(function() {
  var createServer, deleteServer, editServer, getAction, getAllActions, getAllServers, getImages, getServer, prepareOptions, request, setPower;

  request = require('request');

  prepareOptions = function(url, key, type, data) {
    var tmp;
    if (type == null) {
      type = 'GET';
    }
    if (data == null) {
      data = null;
    }
    tmp = {};
    tmp.headers = {
      Authorization: 'Bearer ' + key
    };
    tmp.uri = url;
    tmp.json = true;
    tmp.method = type;
    tmp.body = data;
    return tmp;
  };

  getImages = function(token, callback) {
    return request(prepareOptions("https://api.1cloud.ru/image", token), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  getAllServers = function(token, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server", token), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  getServer = function(token, id, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server/" + id, token), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  getAllActions = function(token, id, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server/" + id + "/action", token), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  getAction = function(token, id, actionID, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server/" + id + "/action/" + actionID, token), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  setPower = function(token, id, type, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server/" + id + "/action", token, 'POST', {
      Type: type
    }), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  createServer = function(token, params, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server", token, 'POST', params), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  deleteServer = function(token, id, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server/" + id, token, 'DELETE'), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  editServer = function(token, id, params, callback) {
    return request(prepareOptions("https://api.1cloud.ru/server/" + id, token, 'PUT', params), (function(_this) {
      return function(err, res, body) {
        if (!err) {
          return callback(res.statusCode, body);
        }
      };
    })(this));
  };

  module.exports.getImages = getImages;

  module.exports.getAllServers = getAllServers;

  module.exports.getServer = getServer;

  module.exports.getAllActions = getAllActions;

  module.exports.getAction = getAction;

  module.exports.setPower = setPower;

  module.exports.createServer = createServer;

  module.exports.deleteServer = deleteServer;

  module.exports.editServer = editServer;

}).call(this);

//# sourceMappingURL=1cloud.js.map
