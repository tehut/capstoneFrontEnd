import Backbone from 'backbone';

var  Student = Backbone.Model.extend({

  initialize: function(attributes, options) {
    this.calculateBirthday(attributes.birth_date);
  },

  calculateBirthday: function(rawBirthDate) {
    var today = new Date();
    if (!rawBirthDate) {
      console.log("DPR: rawBirthDate was " + rawBirthDate);
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


export default Student
