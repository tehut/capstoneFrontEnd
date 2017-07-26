import Student from '../models/student';
import $ from 'jquery'
import _ from 'underscore'
import AuthCollection from './auth_collection'
var ContractList = AuthCollection.extend({
  model: Student,
  url: 'http://transparentclassroom.com/api/v1/forms.json',
  comparator: 'Schedule',
  parse: function(data) {
    return data.fields;
  },
  initialize: function(options) {
  },

});

export default ContractList;
