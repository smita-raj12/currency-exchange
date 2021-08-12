import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.service.js';

function clearFields() {
  $('#currency').text("");
  $('.showErrors').text("");
  $('.rupees').text("");
}

function getElements(response) {
    let amount =  parseInt($('#currency').val());
    if(response.conversion_rates.USD >= 1){
      const indianRupees = amount * response.conversion_rates.INR;
      $('#rupees').text(indianRupees);
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