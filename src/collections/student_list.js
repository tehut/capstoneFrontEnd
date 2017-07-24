import Student from '../models/student';
import $ from 'jquery'
import _ from 'underscore'
import AuthCollection from './auth_collection'
var StudentList = Backbone.Collection.extend({
  model: Student,
  url: 'http://transparentclassroom.com/api/v1/children.json',
  comparator: 'age',

  // parse: function(data) {
  //   return data;
  // },
  initialize: function(options) {

    // console.log(options);
  },

});

export default StudentList;
