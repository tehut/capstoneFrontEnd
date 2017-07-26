
import $ from 'jquery';
import _ from 'underscore';
import StudentListView from 'views/student_list_view';
import StudentList from 'collections/student_list';
var Cookies = require('js-cookie');


var studentList = new StudentList();

// ready to go
$(document).ready(function() {
var options = {
  el: $('#foundation'),
  model: 'Student',
  method: 'GET',
};

var studentListDisplay = new StudentListView(options);

})
