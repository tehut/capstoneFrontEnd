import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
var StudentView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(options) {
    this.template = options.template;
    this.movieSearchTemplate = options.movieSearchTemplate;
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
      var html = this.template({student: this.model.toJSON()});
      this.$el.html(html)
      this.delegateEvents();
      return this
  },
  events: {
    "click #add": "orderMovie",
    "click #open": "openForm"
  }
});

export default StudentView;
