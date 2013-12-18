function replaceContent(target, source) {
      document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
   }

function userlogin() {
document.getElementById('light').style.display='block';
document.getElementById('fade').style.display='block';
}
function userloginclose() {
document.getElementById('light').style.display='none';
document.getElementById('fade').style.display='none';
}

function userregister() {
document.getElementById('light1').style.display='block';
document.getElementById('fade1').style.display='block';
}
function userregisterclose() {
document.getElementById('light1').style.display='none';
document.getElementById('fade1').style.display='none';
}

function cleanFname() {
document.getElementById("temp1").innerHTML="";
}
function cleanLname() {
document.getElementById("temp2").innerHTML="";
}
function cleanEmail() {
document.getElementById("temp3").innerHTML="";
}
function cleanConfemail() {
document.getElementById("temp4").innerHTML="";
}
function cleanUname() {
document.getElementById("temp5").innerHTML="";
}
function cleanPass() {
document.getElementById("temp6").innerHTML="";
}
function cleanRepass() {
document.getElementById("temp7").innerHTML="";
}
function cleanUser() {
document.getElementById("temp8").innerHTML="";
}
function cleanUpass() {
document.getElementById("temp9").innerHTML="";
}


function validateRegister() {
var emailID = document.forms["register"].email.value;
var  atposition = emailID.indexOf("@");
var dotposition = emailID.lastIndexOf(".");

 if( document.forms["register"].fname.value == "" ){
	 document.getElementById("temp1").innerHTML="<p style='color:red; font-style:bold; background-color:yellow'>Please enter first name!</p>";
     return false;
   }
   if( document.forms["register"].lname.value == "" ){
     document.getElementById("temp2").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Please enter last name!</p>";
     return false;
   }
   if( document.forms["register"].email.value == "" ||
   (atposition < 1 || ( dotposition - atposition < 2 ))) {
     document.getElementById("temp3").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Please enter valid email!</p>";
     return false;
   }
   if( document.forms["register"].email.value != document.forms["register"].confemail.value) {
  document.getElementById("temp4").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Email address not the same!</p>";
   return false;
   }
   if( document.forms["register"].uname.value == "") {
  document.getElementById("temp5").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Please choose user name!</p>";
   return false;
   }
   if( document.forms["register"].pass.value == "") {
  document.getElementById("temp6").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Please choose password!</p>";
   return false;
   }
   if( document.forms["register"].pass.value != document.forms["register"].repass.value) {
   document.getElementById("temp7").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Password don't match!</p>";
   return false;
   }
  
   return true;
}

function validateLogin() {
if( document.forms["login"].uname.value == "") {
document.getElementById("temp8").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Please enter user name!</p>";
return false;
}
if( document.forms["login"].pass.value == "") {
document.getElementById("temp9").innerHTML="<p style='color:red; font-weight:bold; background-color:yellow'>Please enter password!</p>";
return false;
}
return true;
}

function validateContact() {
var emailID = document.forms["contactform"].contemail.value;
var  atposition = emailID.indexOf("@");
var dotposition = emailID.lastIndexOf(".");

if( document.forms["contactform"].contname.value == ""){
	 document.getElementById("cname").innerHTML = "<p style='color:red; font-weight:bold; background-color:yellow'>Please enter name!</p>";
     return false;
   }
   if( document.forms["contactform"].contemail.value == "" ||
   (atposition < 1 || (dotposition - atposition < 2 ))) {
   document.getElementById("cemail").innerHTML = "<p style='color:red; font-weight:bold; background-color:yellow'>Invalid email!</p>";
   return false
   }
  if( document.forms["contactform"].message.value == ""){
	 document.getElementById("cmessage").innerHTML = "<p style='color:red; font-weight:bold; background-color:yellow'>Please enter message!</p>";
     return false;
   }
  return true;
}

function cleanName() {
document.getElementById("cname").innerHTML="";
}
function cleanMail() {
document.getElementById("cemail").innerHTML="";
}
function cleanMessage() {
document.getElementById("cmessage").innerHTML="";
}

function changeSubmenu()
{
var w=window.outerWidth;
if( w <= 778) {
var elem = document.getElementById("submenu");
elem.setAttribute("style","position:relative; z-index:100;");
var style = elem.getAttribute("style");
}
if( w > 778) {
var elem = document.getElementById("submenu");
elem.setAttribute("style","position:absolute; z-index:100;");
var style = elem.getAttribute("style");
}
}
function changeContent() {
var w=window.outerWidth;
if( w <= 778) {
document.getElementById('light').style.display='none';
document.getElementById('fade').style.display='none';
}
if( w > 778) {
document.getElementById('light').style.display='block';
document.getElementById('fade').style.display='block';
}
}

function external() {
document.getElementById('light').style.display='block';
document.getElementById('fade').style.display='block';
}
function externalclose() {
document.getElementById('light').style.display='none';
document.getElementById('fade').style.display='none';
}

function external1() {
document.getElementById('light1').style.display='block';
document.getElementById('fade1').style.display='block';
}
function externalclose1() {
document.getElementById('light1').style.display='none';
document.getElementById('fade1').style.display='none';
}
function external2() {
document.getElementById('light2').style.display='block';
document.getElementById('fade2').style.display='block';
}
function externalclose2() {
document.getElementById('light2').style.display='none';
document.getElementById('fade2').style.display='none';
}
function external3() {
document.getElementById('light3').style.display='block';
document.getElementById('fade3').style.display='block';
}
function externalclose3() {
document.getElementById('light3').style.display='none';
document.getElementById('fade3').style.display='none';
}
function external4() {
document.getElementById('light4').style.display='block';
document.getElementById('fade4').style.display='block';
}
function externalclose4() {
document.getElementById('light4').style.display='none';
document.getElementById('fade4').style.display='none';
}
function external5() {
document.getElementById('light5').style.display='block';
document.getElementById('fade5').style.display='block';
}
function externalclose5() {
document.getElementById('light5').style.display='none';
document.getElementById('fade5').style.display='none';
}

/*function opwindow() {
var mywidth;
var myheight;
mywidth = (window.screen.width/2) - (200 + 10);
myheight = (window.screen.height/2) - (50 + 50);
var win2 = window.open("confirm.html","Window2","status=no,height=100,width=400,resizable=yes,left=" + mywidth + ",top=" + myheight + ",screenX=" + mywidth + ",screenY=" + myheight + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
win2.focus();
}*/

/*var imageID=0;
function changeimage(every_seconds){
    if(!imageID){
        document.getElementById("left").style.backgroundImage= "url('images/binary2.jpg')";
        imageID++;
    }else{
	if(imageID==1){
        document.getElementById("left").style.backgroundImage= "url('images/binary1.jpg')";
        imageID++;
    }else{
	if(imageID==2){
        document.getElementById("left").style.backgroundImage= "url('images/binary.jpg')";
        imageID=0;
    }}}
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*5000));
}*/

function subtitle() {
setInterval(function(){
        document.getElementById("one").style.display='block';},500);
setInterval(function(){
        document.getElementById("two").style.display='block';},1000);
setInterval(function(){
        document.getElementById("three").style.display='block';},1500);
setInterval(function(){
        document.getElementById("four").style.display='block';},2000);
setInterval(function(){
        document.getElementById("five").style.display='block';},2500);
setInterval(function(){
        document.getElementById("six").style.display='block';},3000);
setInterval(function(){
        document.getElementById("seven").style.display='block';},3500);
setInterval(function(){
        document.getElementById("eight").style.display='block';},4000);
setInterval(function(){
        document.getElementById("nine").style.display='block';},4500);
setInterval(function(){
        document.getElementById("ten").style.display='block';},5000);
setInterval(function(){
        document.getElementById("eleven").style.display='block';},5500);
setInterval(function(){
        document.getElementById("twelve").style.display='block';},6000);
setInterval(function(){
        document.getElementById("thirteen").style.display='block';},6500);
setInterval(function(){
        document.getElementById("fourteen").style.display='block';},7000);
setInterval(function(){
        document.getElementById("fifteen").style.display='block';},7500);
setInterval(function(){
        document.getElementById("sixteen").style.display='block';},8000);
}

function appendStyle(styles) {
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

var styles = ' @-webkit-keyframes main {0%   {background-image:url("images/inside3.jpg");}15%   {background-image:url("images/binary.jpg");}30%   {background-image:url("images/inside2.jpg");} 45%   {background-image:url("images/inside1.jpg");} 60% {background-image:url("images/binary1.jpg");} 75% {background-image:url("images/binary2.jpg");} 90% {background-image:url("images/binary4.jpg");} 100% {background-image:url("images/binary3.jpg");}}';
styles += ' @keyframes main { 0%   {background-image:url("images/inside3.jpg");} 15%   {background-image:url("images/binary.jpg");} 30%   {background-image:url("images/inside2.jpg");} 45%   {background-image:url("images/inside1.jpg");} 60% {background-image:url("images/binary1.jpg");} 75% {background-image:url("images/binary2.jpg");} 90% {background-image:url("images/binary4.jpg");} 100% {background-image:url("images/binary3.jpg");}}';
styles += ' @-moz-keyframes main {0%   {background-image:url("images/inside3.jpg");} 15%   {background-image:url("images/binary.jpg");} 30%   {background-image:url("images/inside2.jpg");} 45%   {background-image:url("images/inside1.jpg");} 60% {background-image:url("images/binary1.jpg");} 75% {background-image:url("images/binary2.jpg");} 90% {background-image:url("images/binary4.jpg");} 100% {background-image:url("images/binary3.jpg");}}';
styles += ' @-ms-keyframes main {0%   {background-image:url("images/inside3.jpg");} 15%   {background-image:url("images/binary.jpg");} 30%   {background-image:url("images/inside2.jpg");} 45%   {background-image:url("images/inside1.jpg");} 60% {background-image:url("images/binary1.jpg");} 75% {background-image:url("images/binary2.jpg");} 90% {background-image:url("images/binary4.jpg");} 100% {background-image:url("images/binary3.jpg");}}';
styles += ' @-o-keyframes main {0%   {background-image:url("images/inside3.jpg");} 15%   {background-image:url("images/binary.jpg");} 30%   {background-image:url("images/inside2.jpg");} 45%   {background-image:url("images/inside1.jpg");} 60% {background-image:url("images/binary1.jpg");} 75% {background-image:url("images/binary2.jpg");} 90% {background-image:url("images/binary4.jpg");} 100% {background-image:url("images/binary3.jpg");}}';
styles += ' #left { animation:main ease-in-out 40s infinite alternate; -webkit-animation:main ease-in-out 40s infinite alternate; -moz-animation:main ease-in-out 40s infinite alternate; -ms-animation:main ease-in-out 40s infinite alternate; -o-animation:main ease-in-out 40s infinite alternate; }';
styles += ' @-webkit-keyframes scroll { 0% { top: 100%; } 100% { top: -170%; }} @-moz-keyframes scroll { 0% { top: 100%; } 100% { top: -170%; }} @-ms-keyframes scroll { 0% { top: 100%; } 100% { top: -170%; }} @-o-keyframes scroll { 0% { top: 100%; } 100% { top: -170%; }} @keyframes scroll { 0% { top: 100%; } 100% { top: -170%; }}';
styles += ' #titlecontent { position: absolute; top: 100%; -webkit-animation: scroll 200s linear 1s infinite; -moz-animation: scroll 200s linear 1s infinite; -ms-animation: scroll 200s linear 1s infinite; -o-animation: scroll 200s linear 1s infinite; animation: scroll 200s linear 1s infinite; }';
//styles += ' @-webkit-keyframes pulse { 0% { -webkit-transform: scale(1.5); } 50% { -webkit-transform: scale(0.7); } 100% { -webkit-transform: scale(1.0); }}';
//styles += ' #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #ten, #eleven, #twelve, #thirteen, #fourteen, #fifteen, #sixteen { animation:pulse 1s; -webkit-animation:pulse 1s; -moz-animation: pulse 1s; -o-animation: pulse 1s;}';

window.onload = function() { appendStyle(styles); /*changeimage(2);*/ };




