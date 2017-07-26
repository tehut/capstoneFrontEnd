import AllForms from '../models/allforms';

var AllFormsList = Backbone.Collection.extend({
  model: AllForms,
  url: 'http://localhost:3000/api/v1/forms.json?child_id=',

  initialize:function(options) {


}

});

export default AllFormsList;
