$(document).ready(function () {
  const amenitiesLst = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenitiesLst[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenitiesLst[$(this).attr('data-name')];
    }
    const name = Object.keys(amenitiesLst);
    $('.amenities h4').text(name.sort().join(', '));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'OK'){
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
