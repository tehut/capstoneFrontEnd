import Student from '../models/student';

var StudentList = Backbone.Collection.extend({
  model: Student,
  url: 'http://localhost:3000/api/v1/children.json',
  comparator: 'age',


  initialize: function(options) {

  },

});

export default StudentList;
