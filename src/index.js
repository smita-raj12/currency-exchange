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
    $("#update").text(response.time_last_update_utc);
    $("#next").text(response.time_next_update_utc)
  }else{
    $(".showErrors").html('There was an error in your selected input,' +'<br>' + 'Please select valid amount and country name');
    $("#output").hide();
  }  
}

$(document).ready(function() {
  $('form#currencycheck').submit(function(event) {
    event.preventDefault();
    let amount =  parseInt($('#currency').val());
    let selectedCountry = $("#countries").val();
    CurrencyService.getCurrency(selectedCountry,amount)
      .then(function(response) {
        $("#output").show();
        getElements(response);
      });
  });
});