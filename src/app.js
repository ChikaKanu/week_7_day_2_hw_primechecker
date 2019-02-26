const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const PrimeChecker = require('./models/prime_checker.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formview = new FormView();
  formview.bindEvents();

  const primechecker = new PrimeChecker();
  primechecker.bindEvents();

  const resultview = new ResultView();
  resultview.bindEvents();

});
