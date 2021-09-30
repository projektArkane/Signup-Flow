var getRawTemplate = document.getElementById("raw-template").innerHTML;
var template = Handlebars.compile(getRawTemplate);
var data = template();

document.getElementById("handle").innerHTML = data;

function openNav() {
     document.getElementById("mySidenav").style.width = "280px";
}

function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
}

function validate(boxid, textid) {
     if (document.getElementById(boxid).checked) {
          document.getElementById(textid).style.color = "#EB612F";
     } else {
          document.getElementById(textid).style.color = "#939599";
     }
}

function allFucntion() {
     if (document.getElementById("all-checkbox").checked) {

          document.getElementById("all-text").style.color = "#EB612F";
          document.getElementById("delivered-checkbox").checked = true;
          document.getElementById("delivered-text").style.color = "#EB612F";
          document.getElementById("pending-checkbox").checked = true;
          document.getElementById("pending-text").style.color = "#EB612F";
          document.getElementById("refund-checkbox").checked = true;
          document.getElementById("refund-text").style.color = "#EB612F";
          
     } else {
          document.getElementById("all-text").style.color = "#939599";
          document.getElementById("delivered-checkbox").checked = false;
          document.getElementById("delivered-text").style.color = "#939599";
          document.getElementById("pending-checkbox").checked = false;
          document.getElementById("pending-text").style.color = "#939599";
          document.getElementById("refund-checkbox").checked = false;
          document.getElementById("refund-text").style.color = "#939599";
     }
}

function secallFunction() {
     if (document.getElementById("secall-checkbox").checked) {

          document.getElementById("service-checkbox").checked = true;
          document.getElementById("exclusive-checkbox").checked = true;
          document.getElementById("collection-checkbox").checked = true;
          document.getElementById("live-checkbox").checked = true;
          document.getElementById("gift-checkbox").checked = true;

          document.getElementById("secall-text").style.color = "#EB612F";
          document.getElementById("service-text").style.color = "#EB612F";
          document.getElementById("exclusive-text").style.color = "#EB612F";
          document.getElementById("collection-text").style.color = "#EB612F";
          document.getElementById("live-text").style.color = "#EB612F";
          document.getElementById("gift-text").style.color = "#EB612F";

     } else {
          document.getElementById("service-checkbox").checked = false;
          document.getElementById("exclusive-checkbox").checked = false;
          document.getElementById("collection-checkbox").checked = false;
          document.getElementById("live-checkbox").checked = false;
          document.getElementById("gift-checkbox").checked = false;

          document.getElementById("secall-text").style.color = "#939599";
          document.getElementById("service-text").style.color = "#939599";
          document.getElementById("exclusive-text").style.color = "#939599";
          document.getElementById("collection-text").style.color = "#939599";
          document.getElementById("live-text").style.color = "#939599";
          document.getElementById("gift-text").style.color = "#939599";
     }
}

