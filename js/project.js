// api call for search by doctor
// https://api.betterdoctor.com/2016-03-01/doctors?name=Steven&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${apiKey}

// api call for search by keyword
// https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${apiKey}

// PROMISE API CALL FOR SEARCH BY DOCTOR
export function apiCallDoctor(inputName, apiKey, addToPage) {
  let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputName}&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response){
    let doctorInfo = JSON.parse(response);
    addToPage(doctorInfo);
  });
}


// PROMISE API CALL FOR SEARCH BY KEYWORD
export function apiCallKeyword(inputKeyword, apiKey, addToPage) {
  let promise = new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputKeyword}&location=45.523062%2C-122.676482%2C100&user_location=45.523062%2C-122.676482&skip=0&limit=10&user_key=${apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response){
    let illnessSearch = JSON.parse(response);
    addToPage(illnessSearch);
  });
}
