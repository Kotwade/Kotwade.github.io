'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.main-nav__toggle');
var pageBody = document.querySelector('.page-body');
var siteListLink = document.querySelectorAll('.site-list__link');

pageHeader.classList.remove('page-header--nojs');

if (headerToggle) {
  headerToggle.addEventListener('click', function () {
    pageHeader.classList.toggle('page-header--opened');
    pageBody.classList.toggle('page-body--opened');
  });

  siteListLink.forEach(function (item) {
    item.addEventListener('click', function () {
      pageBody.classList.remove('page-body--opened');
    });
  });
}

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support) {
    document.body.classList.add('webp');
  }
});
