const zips = [];
const userZip = document.getElementById('zip').toString;
const button = document.getElementsByClassName("button");

function zipcodeCheck(){
 if (zips.includes(userZip)){
   return window.alert("We've got your area covered!");
 } else {
  return window.alert("Sorry, we haven't expanded to your area yet :(");
 }   
}

button[0].addEventListener('click', zipcodeCheck);
