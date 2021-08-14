import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.service.js';

function getElements(response){

  if(response.target_code){
    $("#code").text(response.target_code);
    $("#rate").text(response.conversion_rate);
    $("#amount").text(response.conversion_result);
    
  }else{
    $("#output").hide();
    $(".showErrors").html('There was an error in your selected input,' +'<br>' + 'Please select valid amount and country name');
  }  
}

$(document).ready(function() {
  $('form#currencycheck').submit(function(event) {
    event.preventDefault();
    let amount =  parseInt($('#currency').val());
    let selectedCountry = $("#countries").val();
    CurrencyService.getCurrency(selectedCountry,amount)
      .then(function(response) {
        getElements(response);
      });
  });
});