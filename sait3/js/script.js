"use strict";

var reviewForm = document.querySelector(".form");
var btnSendForm = document.querySelector("#send-form");
var popupSent = document.querySelector(".success-popup");
var popupError = document.querySelector(".failure-popup");

btnSendForm.addEventListener("click", function(event) {
  event.preventDefault();

  if (reviewForm.checkValidity()) {
    popupSent.classList.add("popup-open");
  } else {
    popupError.classList.add("popup-open")
  }
});

if(popupSent != null) {
  var ClosePopupSent = popupSent.querySelector("#popup-close");

  ClosePopupSent.addEventListener("click", function(event) {
    event.preventDefault();
    popupSent.classList.remove("popup-open");
  });
}

if(popupError != null) {
  var ClosePopupError = popupError.querySelector("#popup-failure-close");

  ClosePopupError.addEventListener("click", function(event) {
    event.preventDefault();
    popupError.classList.remove("popup-open");
  });
}
