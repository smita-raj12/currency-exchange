import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.service.js';

function clearFields() {
  $('#currency').text("");
  $('.showErrors').text("");
  $('.amount').text("");
}

function getElements(response) {
  let amount =  parseInt($('#currency').val());
  let selectedCountry = $("#countries").val();
  if(response.conversion_rates.USD >= 1 && selectedCountry === "INR"){
    const convertedIndianAmount = amount * response.conversion_rates.INR;
    $('#amount').text(convertedIndianAmount);
  }

  if(response.conversion_rates.USD >= 1 && selectedCountry === "LYD"){
    const convertedLibiyaAmount = amount * response.conversion_rates.LYD;
    $('#amount').text(convertedLibiyaAmount);
  } 

  if(response.conversion_rates.USD >= 1 && selectedCountry === "SSP"){
    const convertedSudanAmount = amount * response.conversion_rates.SSP;
    $('#amount').text(convertedSudanAmount);
  } 

  if(response.conversion_rates.USD >= 1 && selectedCountry === "SYP"){
    const convertedSyriaAmount = amount * response.conversion_rates.SYP;
    $('#amount').text(convertedSyriaAmount);
  }

  if(response.conversion_rates.USD >= 1 && selectedCountry === "MUR"){
    const convertedMauritiusAmount = amount * response.conversion_rates.MUR;
    $('#amount').text(convertedMauritiusAmount);
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