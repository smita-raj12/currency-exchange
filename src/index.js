import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.service.js';

function clearFields() {
  $('#currency').val("");
  $('.showErrors').text("");
  $('.rupees').text("");
}

function getElements(response) {
  if (response.conversion_rates.USD === 1) {
    $('#rupees').text(response.conversion_rates.INR);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#currencycheck').click(function() {
    let amount = $('#currency').val();
    clearFields();
    CurrencyService.getCurrency(amount)
      .then(function(response) {
        getElements(response);
      });
  });
});