import { apiCallDoctor } from './../js/project.js';
var apiKey = require('./../.env').apiKey;

function addToPage(doctorInfo){
  if (doctorInfo.meta.count === 0) {
    alert("Sorry, no doctors met your search criteria. Please try your search again.");
  } else {
    for (var i = 0; i < doctorInfo.data.length; i++) {
      console.log(i);
      $('#doctorSearchResponse').append(`
        <p class="listing">Name: ${doctorInfo.data[i].profile.first_name}  ${doctorInfo.data[i].profile.last_name}<br>
          <a href="${doctorInfo.data[i].profile.image_url}" target="_blank">Website</a><br>Accepts new patients: ${doctorInfo.data[i].practices[0].accepts_new_patients}<br>
          Address: ${doctorInfo.data[i].practices[0].visit_address.street}<br>
          ${doctorInfo.data[i].practices[0].visit_address.city} OR ${doctorInfo.data[i].practices[0].visit_address.zip}<br>
          Phone: ${doctorInfo.data[i].practices[0].phones[0].number}
           </p>`);
    }
  }
}

$(document).ready(function(){
  $("form#nameSearch").submit(function(event) {
    event.preventDefault();
    let inputName = $("#doctorName").val();
     apiCallDoctor(inputName, apiKey, addToPage);
     // $("#doctorSearchResponse").text(result);
     $("#nameSearch").reset(0);
  });
});
