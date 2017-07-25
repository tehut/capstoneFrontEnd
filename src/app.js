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
      el: $('#foundation'),
      model: 'Student',
      method: 'GET',
      template: _.template($("#site-template").html()),
    };
  // });

    //
    // var studentListDisplay = new StudentListView(options);
    //  studentListDisplay.render();




  // $('#order-form').hide();

  // $('#library').click(function() {
  // studentList.fetch();
  // });

});
//
function loadQuickbooks($el) {
  $el.html('<h1>Quickbooks, baby foo foo</h1>')
}

function loadForms($el) {

      var studentListDisplay = new StudentListView(options);
       studentListDisplay.render();
  // $el.html('<h1>Let us print forms</h1>')
  // $.getScript('https://wmsfront.herokuapp.com/build/app.bundle.js', function(){console.log("TG: successfully loaded script")})
}

console.log(
  'stuff you can play with',
  'currentClassroomId', tc.env.currentClassroomId,
  'currentSchoolId', tc.env.currentSchoolId,
  'currentUserId', tc.env.currentUserId,
  'firstClassroomId', tc.env.firstClassroomId,
  'assetHost', tc.env.assetHost,
  'canEdit', tc.env.canEdit
)

$(function() {
  if (!tc.env.canEdit) return;

  tc.Plugins.menuControl.primary.add('Quickbooks', tc.utils.schoolUrl('networks/wedgwood/school/quickbooks'), 'usd')
  tc.Plugins.menuControl.primary.add('Print Forms', tc.utils.schoolUrl('networks/wedgwood/school/forms'), 'print')

  if (document.URL.endsWith('/networks/wedgwood/school/quickbooks')) {
    loadQuickbooks($('#foundation'))
  } else if (document.URL.endsWith('/networks/wedgwood/school/forms')) {
    loadForms($('#foundation'))
  }
})
