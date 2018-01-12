import { apiCallDoctor } from './../js/project.js';
var apiKey = require('./../.env').apiKey;

function addToPage(doctorInfo){
  console.log(doctorInfo);
  
}

$(document).ready(function(){
  let inputName = "steve";
  apiCallDoctor(inputName, apiKey);
});
