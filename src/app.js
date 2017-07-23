// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import StudentListView from 'views/student_list_view';
import StudentList from 'collections/student_list';
var Cookies = require('js-cookie');
// import LoginView from 'views/login.js'


var studentList = new StudentList();

// ready to go
$(document).ready(function() {
//
$('#login').click(function(event){
  // event.preventDefault;
  var  email = $('#inputEmail').val();
  var password = $('#inputPassword').val();
  var hash =  btoa(email + ':' + password);
  var tok =  hash;
  //
  // console.log(tok);
  Cookies.set('token', tok);
  console.log(Cookies.get('token'));

})

    var options = {
      el: $('body'),
      model: 'Student',
      method: 'GET',
      template: _.template($("#movie-card-template").html()),
    };
  // });


    var studentListDisplay = new StudentListView(options);
     studentListDisplay.render();




  // $('#order-form').hide();

  // $('#library').click(function() {
  // studentList.fetch();
  // });

});
