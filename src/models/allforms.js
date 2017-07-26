import Backbone from 'backbone';
import $ from 'jquery';
var _ = require('lodash');

var  AllForms = Backbone.Model.extend({
  initialize: function(attributes, options) {
    this.calculateBirthday(attributes.birth_date);
  },

  calculateBirthday: function(rawBirthDate) {
    var today = new Date();
    if (!rawBirthDate) {
      this.set('age', 3);
      return;
    }

    var birthdate = new Date(rawBirthDate);
    var cur = new Date();
    var diff = cur-birthdate;
    var age = Math.floor(diff/31536000000);
    this.set('age',age)
  }
});


export default AllForms
