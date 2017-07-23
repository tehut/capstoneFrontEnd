import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
// var pdfmake = require 'pdfmake';
var StudentView = Backbone.View.extend({
  // tagName: 'li',
  initialize: function(options) {
    this.template = options.template;
    this.movieSearchTemplate = options.movieSearchTemplate;
    this.listenTo(this.model, 'change', this.render);
  },




  render: function() {
  console.log(this);
      var html = this.template({student: this.model.toJSON()});
      //
      this.$el.html(html)
      this.delegateEvents();

// console.log('hi');


    return this
  },
  events: {
    // "click .show-details": "onClick",
    // "click .delete-button": "deleteMovie",
    "click #add": "orderMovie",
    "click #open": "openForm"
    // "click #rent: "

  }




});

export default StudentView;
