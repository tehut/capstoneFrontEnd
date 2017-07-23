import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import StudentView from './student_view';
import StudentList from '../collections/student_list';
import Student from '../models/student';
import Contract from '../models/contract';
import ContractList from '../collections/contract_list';
var createPdf = require('pdfmake-browserified');
var Cookies = require('js-cookie');

var StudentListView = Backbone.View.extend({
  initialize: function(options) {
    this.movieTemplate = _.template($("#movie-card-template").html());
    this.listElement = this.$(".movie-card");

    this.studentList = [];

    this.listenTo(this.model,   '#search', this.callApi);
    this.listenTo(this.model, 'add', this.addStudent);
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, '#library', this.makeAPDF);
  },

  render: function() {
    this.listElement.empty();
    this.studentList.forEach(function(studentView){
      studentView.render();
      this.listElement.prepend(studentView.$el);
    },this);

    return this;
  },

  events: {
    'click #search': 'callApi',
    'click #test': 'Log',
    'click #library': 'makeAPDF',


  },


  makeAPDF: function (event){

    event.preventDefault();
    var token =  Cookies.get('token');
    console.log(token);
    var applicantBirthdayList = new StudentList({url:'http://localhost:3000/api/v1/children.json'});
    applicantBirthdayList.fetch({
      headers: {'Authorization': 'Basic ' + token},
      success: function(model){
        var birthdayListArray = [["First Name", "Last Name", "Birthdate", "Age as of Today"]];
        var birthdayList = model.forEach(function(item){
          if (item.get('first_name')) {
            birthdayListArray.push([item.attributes.first_name , item.attributes.last_name , item.attributes.birth_date, item.attributes.age.toString() ] );
          }
        });



        //dd is pdfMake convention for 'document definiton'
        var dd = {
          content: [
            {text: 'Applicant Birthday List', style:{italics:true, fontSize: 40, margin: [0,20]}},
            {
              table: {
                widths:[100, 100,100,100],
                body:
                birthdayListArray

              }
            }
          ]
        }
        createPdf(dd).download();
      }
    });
  },

  createStudent: function(event) {
    event.preventDefault();
    var rawStudent = this.getInput();
    this.model.create(rawStudent);
    this.clearInput();
  },
  addStudent: function(student) {
    var studentView = new StudentView({
      model: student,
      template: this.movieTemplate,
      movieSearchTemplate : this.movieSearchTemplate
    });
    this.studentList.push(studentView);
  },
  callApi: function(event){
    var token = Cookies.get('token');
    var studentList = new StudentList({url:'http://localhost:3000/api/v1/children.json'});
    var tc_url = 'http://localhost:3000/api/v1/children.json';
    var options = {
      url: tc_url,
      model: Student,
      method: 'GET'
    };
    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;

    studentList.fetch({headers:{'Authorization': 'Basic ' + token}});
    var c_options = {
      el: $('main'),
      model: studentList,
      template: _.template($("#movie-card-template").html())
    };
    var studentListDisplay = new StudentListView(c_options);

    studentListDisplay.render();

  }



});

export default StudentListView;
