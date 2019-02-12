const zips = [];
const userZip = document.getElementById('zip').toString;
const button = document.getElementsByClassName("button");

function zipcodeCheck(){
 zips.includes(userZip) ? window.alert("We've got your area covered!") : window.alert("Sorry, we haven't expanded to your area yet :(");
}

button[0].addEventListener('click', zipcodeCheck);
