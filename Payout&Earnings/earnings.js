// ========= Total-Earnings ==============

// var totalEarnings = 560400;
// totalEarnings = totalEarnings.toString();
// var lastThree = totalEarnings.substring(totalEarnings.length-3);
// var otherNumbers = totalEarnings.substring(0,totalEarnings.length-3);
// if(otherNumbers != '')
//     lastThree = ',' + lastThree;
// var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

var totalEarnings = 560400;
var commaFormatted = (totalEarnings).toLocaleString('en-IN');

document.getElementById("total-earnings-amt").innerHTML = `&#8377 ${commaFormatted}`;

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// ================ Side-Navbar ===================================

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

          const colorElementsList = document.querySelectorAll("#all-text, #delivered-text, #pending-text, #refund-text");

          const colorElementsArray = [...colorElementsList];
          colorElementsArray.forEach(element => {
               element.style.color = "#EB612F";
          });

          const checkboxElementsList = document.querySelectorAll("#delivered-checkbox, #pending-checkbox, #refund-checkbox");

          const checkboxElementsArray = [...checkboxElementsList];
          checkboxElementsArray.forEach(element => {
               element.checked = true;
          });

     } else {

          const colorElementsListTwo = document.querySelectorAll("#all-text, #delivered-text, #pending-text, #refund-text");

          const colorElementsArrayTwo = [...colorElementsListTwo];
          colorElementsArrayTwo.forEach(element => {
               element.style.color = "#939599";
          });

          const checkboxElementsListTwo = document.querySelectorAll("#delivered-checkbox, #pending-checkbox, #refund-checkbox");

          const checkboxElementsArrayTwo = [...checkboxElementsListTwo];
          checkboxElementsArrayTwo.forEach(element => {
               element.checked = false;
          });

     }
}

function secallFunction() {
     if (document.getElementById("secall-checkbox").checked) {

          const checkboxElementsList = document.querySelectorAll("#service-checkbox, #exclusive-checkbox, #collection-checkbox, #live-checkbox, #gift-checkbox");

          const checkboxElementsArray = [...checkboxElementsList];
          checkboxElementsArray.forEach(element => {
               element.checked = true;
          });

          const colorElementsList = document.querySelectorAll("#secall-text, #service-text, #exclusive-text, #collection-text, #live-text, #gift-text");

          const colorElementsArray = [...colorElementsList];
          colorElementsArray.forEach(element => {
               element.style.color = "#EB612F";
          });

     } else {

          const checkboxElementsListTwo = document.querySelectorAll("#service-checkbox, #exclusive-checkbox, #collection-checkbox, #live-checkbox, #gift-checkbox");

          const checkboxElementsArrayTwo = [...checkboxElementsListTwo];
          checkboxElementsArrayTwo.forEach(element => {
               element.checked = false;
          });


          const colorElementsListTwo = document.querySelectorAll("#secall-text, #service-text, #exclusive-text, #collection-text, #live-text, #gift-text");

          const colorElementsArrayTwo = [...colorElementsListTwo];
          colorElementsArrayTwo.forEach(element => {
               element.style.color = "#939599";
          });

     }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// ============================= Changing-Tabs ======================================

function hideEarningsPage() {
     document.getElementById("earnings-tab").classList.add("hidden");
     document.getElementById("payouts-tab").classList.remove("hidden");

     document.getElementById("payout-btn").style.color = "rgba(30, 34, 40, 1)";
     document.getElementById("earnings-btn").style.color = "rgba(147, 149, 153, 1)";
}

function showEarningnsPage() {
     document.getElementById("earnings-tab").classList.remove("hidden");
     document.getElementById("payouts-tab").classList.add("hidden");

     document.getElementById("payout-btn").style.color = "rgba(147, 149, 153, 1)";
     document.getElementById("earnings-btn").style.color = "rgba(30, 34, 40, 1)";
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// =====================================================================================

// var earning = document.getElementById("earnings-tab");

var xhr = new XMLHttpRequest();
xhr.open("GET", "earnings.json");

xhr.onload = function () {
     if (xhr.status == 200) {
          var data = JSON.parse(xhr.responseText);
          // console.log(data[2].pending);

          var insertHTML = function (ourData) {
               var rawTemplate = document.getElementById("earnings-raw-template").innerHTML;
               var template = Handlebars.compile(rawTemplate);
               var generatedHTML = template(ourData);

               document.getElementById("earnings-tab").innerHTML += generatedHTML;

          };
          insertHTML(data);
     }
}

xhr.send();

// =====================================

var sxhr = new XMLHttpRequest();
sxhr.open("GET", "payouts.json");

sxhr.onload = function () {
     if (sxhr.status == 200) {
          var data = JSON.parse(sxhr.responseText);
          console.log(data[1].amount);

          var insertHTML = function(ourData) {
               var rawTemplate = document.getElementById("payouts-raw-template").innerHTML;
               var template = Handlebars.compile(rawTemplate);
               var generatedHTML = template(ourData);
               document.getElementById("payouts-tab").innerHTML += generatedHTML;
          }
          insertHTML(data);
     }
}

sxhr.send(); 

