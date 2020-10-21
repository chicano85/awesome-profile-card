'use strict';
const inputList = document.querySelectorAll('.js-fill__input');
let data = {
  fullName: '',
  job: '',
  mail: '',
  telephone: '',
  linkedin: '',
  github: '',
};
const saveField = function (event) {
  data[event.currentTarget.id] = event.currentTarget.value;
  render();
}

function render(event){
  document.querySelector("#js-fullName-card").innerHTML = data.fullName
  || "Barry Allen - Flash" ;
  document.querySelector("#js-job-card").innerHTML = data.job
  || "The Fastest Men Alive" ;
  document.querySelector("#js-telephone-card").href = data.telephone || "#"
  document.querySelector("#js-mail-card").href = data.mail
  || "#" ;
  document.querySelector("#js-linkedin-card").href = data.linkedin
  || "#" ;
  document.querySelector("#js-github-card").href = data.github
  || "#" ;

}

for (const eachElement of inputList) {
  eachElement.addEventListener('input', saveField);
}



const shareLink = document.querySelector('.js-link');
const btnTwitter = document.querySelector('.js-share');
const clickShare = document.querySelector(".js-share__button");
const openTwitter = function (event) {
  event.preventDefault();
  shareLink.classList.add("js__show");
  clickShare.classList.add("shareSent");
};
btnTwitter.addEventListener('click', openTwitter);


const btnReset = document.querySelector(".js-sectionOneBtn");

function resetForm(){
  for(const input of inputList){
    input.value = "";
  }
  data.fullName = "";
  data.job = "";
  data.telephone = "";
  data.mail = "";
  data.linkedin = "";
  data.github = "";
  render();
}

btnReset.addEventListener("click", resetForm);
render();