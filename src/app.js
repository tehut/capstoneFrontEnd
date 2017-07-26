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
  stringHtml += "<section id='site'>";
  stringHtml += "  <header class= \"row 13\">";
  stringHtml += "    <h3 id='page-title' class=\"columns large-4 medium-4 small-12\" >";
  stringHtml += "      Student Information";
  stringHtml += "    <\/h3>";
  stringHtml += "        <hr>";
  stringHtml += "  <\/header>";
  stringHtml += "  <main>";
  stringHtml += "";
  stringHtml += "    <section class=\" columns large-4 small-12\">";
  stringHtml += "      <form class=\"form-horizontal\">";
  stringHtml += "        <\/div>";
  stringHtml += "        <div>";
  stringHtml += "            <div class=\"control-group\">";
  stringHtml += "              <label> Choose Classroom";
  stringHtml += "                <select>";
  stringHtml += "                  <option value=633> South Campus <\/option>";
  stringHtml += "                  <option value=634> North: Ladybug <\/option>";
  stringHtml += "                  <option value=635>North: Butterly <\/option>";
  stringHtml += "                <\/select>";
  stringHtml += "              <\/label>";
  stringHtml += "            <\/div>";
  stringHtml += "        <\/div>";
  stringHtml += "        <div>";
  stringHtml += "            <div class=\"control-group\">";
  stringHtml += "              <label> Choose Operation";
  stringHtml += "                <select>";
  stringHtml += "                  <option value=633> Download Applicant Age List <\/option>";
  stringHtml += "                  <option value=634> Download Potty Training Report <\/option>";
  stringHtml += "                  <option value=635>Download Class Birthday List <\/option>";
  stringHtml += "                <\/select>";
  stringHtml += "              <\/label>";
  stringHtml += "            <\/div>";
  stringHtml += "        <\/div>";
  stringHtml += "      <\/form>";
  stringHtml += "";
  stringHtml += "      <button type=\"submit\" class=\"button woogs\" id=\"search\">Download Class Email List<\/button>";
  stringHtml += "      <button type=\"submit\" class=\"button\" id=\"library\">Download Applicant Age List<\/button>";
  stringHtml += "";
  stringHtml += "    <\/div>";
  stringHtml += "";
  stringHtml += "  <\/section>";
  stringHtml += "";
  stringHtml += "";
  stringHtml += "<\/section >";
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
