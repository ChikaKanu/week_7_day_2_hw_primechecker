const PubSub = require('../helpers/pub_sub.js');
const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-checked', (event) => {
  const typeOfNumber = event.detail;
  console.log(typeOfNumber);
  this.displayResult(typeOfNumber)

})
};


ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  console.log(`result element`,resultElement);
  resultElement.textContent = `The number is ${result}`;
};

module.exports = ResultView
