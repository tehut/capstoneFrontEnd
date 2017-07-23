import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
var Cookies = require('js-cookie');

var authSyncFunction = function(syncFn) {
  return function(method, model, options) {
      options = options || {};

      var beforeSend = options.beforeSend,
          error = options.error;

      _.extend(options, {
          // Add auth headers
          beforeSend: function(xhr) {
              xhr.setRequestHeader('Authorization', "Bearer " + yourTokenHere);
              if (beforeSend) return beforeSend.apply(this, arguments);
          },

          // handle unauthorized error (401)
          error: function(xhr, textStatus, errorThrown) {
              if (error) error.call(options.context, xhr, textStatus, errorThrown);
              if (xhr.status === 401) {
                  Backbone.history.navigate('login');
              }
          }
      });

      return syncFn.call(this, method, model, options);
  };
};

var AuthModel = Backbone.Model.extend({sync: authSyncFunction(Backbone.Model.sync)});


export default AuthModel;
