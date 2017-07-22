
function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}
function loadOrCreateCookies(){
  if(getCookie('cb1')==null)
    $('#cb1').val("#3a3a3a");
  else
    $('#cb1').val(getCookie('cb1'));
  if(getCookie('cb2')==null)
    $('#cb2').val("#18BC9C");
  else
    $('#cb2').val(getCookie('cb2'));
  if(getCookie('cb3')==null)
    $('#cb3').val("#686868");
  else
    $('#cb3').val(getCookie('cb3'));
  if(getCookie('cb4')==null)
    $('#cb4').val("#0091e9");
  else
    $('#cb4').val(getCookie('cb4'));
  if(getCookie('cb5')==null)
    $('#cb5').val("#ff3f00");
  else
    $('#cb5').val(getCookie('cb5'));
  if(getCookie('cb6')==null)
    $('#cb6').val("#ffb100");
  else
    $('#cb6').val(getCookie('cb6'));
}
$(document).ready(function(){
  loadOrCreateCookies();
  $('input[type="text"]').keyup(function(){
    setCookie(this.id,this.value);
  });
  $('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    var term = $('#'+this.value).val();
    $("#round").css("background-color", term);
  });
  $('input[type="radio"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    var term = $('#'+this.value).val();
    $("#round").css("background-color", term);
  });
});
