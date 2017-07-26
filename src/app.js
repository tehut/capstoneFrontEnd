// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
var _ = require('lodash');
import StudentListView from 'views/student_list_view';
import StudentList from 'collections/student_list';

var Cookies = require('js-cookie');

// import LoginView from 'views/login.js'


var studentList = new StudentList();

// ready to go
$(document).ready(function() {


});
//
function loadQuickbooks($el) {
  $el.html('<h1>Quickbooks, baby foo foo</h1>')
}

function loadForms($el) {
  var stringHtml="";
  stringHtml += "<!DOCTYPE html>";
  stringHtml += "<html lang=\"en\">";
  stringHtml += "<head>";
  stringHtml += "  <meta charset=\"utf-8\">";
  stringHtml += "  <link rel=\"stylesheet\" type=\"text\/css\" href=\"css\/_settings.css\">";
  stringHtml += "  <link rel=\"stylesheet\" type=\"text\/css\" href=\"css\/foundation.css\">";
  stringHtml += "  <link rel=\"stylesheet\" type=\"text\/css\" href=\"css\/styles.css\">";
  stringHtml += "";
  stringHtml += "  <title>WMS <\/title>";
  stringHtml += "<\/head>";
  stringHtml += "<body>";
  stringHtml += "<section id='site'>";
  stringHtml += "  <header class= \"row 13\">";
  stringHtml += "    <h2 id='page-title' class=\"columns large-4 medium-4 small-12\" >";
  stringHtml += "      Student Information";
  stringHtml += "    <\/h2>";
  stringHtml += "        <hr>";
  stringHtml += "  <\/header>";
  stringHtml += "  <main>";
  stringHtml += "";
  stringHtml += "      <section class=\" columns large-2 medium-4 small-5\">";
  stringHtml += "        <form class=\"form-horizontal\">";
  stringHtml += "            <button type=\"submit\" class=\"button\" id=\"library\">Download All Applicant Age List<\/button>";
  stringHtml += "        <p>";
  stringHtml += "          <div>";
  stringHtml += "              <div class=\"control-group\">";
  stringHtml += "                <label> Child ID#<\/label>";
  stringHtml += "        <p>";
  stringHtml += "                  <input type=\"text\" id=\"childID\"> <\/input>";
  stringHtml += "";
  stringHtml += "              <\/div>";
  stringHtml += "          <\/div>";
  stringHtml += "        <\/form>";
  stringHtml += "        <button type=\"submit\" class=\"button\" id=\"search\">Download this Child's Forms <\/button>";
  stringHtml += "      <\/div>";
  stringHtml += "";
  stringHtml += "    <\/section>";
  stringHtml += "  <\/section>";
  stringHtml += "";
  stringHtml += "<\/script>";
  stringHtml += "<\/main>";
  stringHtml += "";
  stringHtml += "";
  stringHtml += "<\/body>";
  stringHtml += "<\/html>";
  stringHtml += "";


  $('#foundation').html(stringHtml);
  var options = {
    el: $('#foundation'),
    model: 'Student',
    method: 'GET',
    template: _.template($("#site-template").html()),
  };
  var preloadSite =  _.template($("#site-template").html());
  var studentListDisplay = new StudentListView(options);
  studentListDisplay.render();


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
