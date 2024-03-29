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
});
