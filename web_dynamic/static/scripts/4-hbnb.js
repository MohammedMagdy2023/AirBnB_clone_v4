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

  const URL = 'http://0.0.0.0:5001/api/v1/places_search/';
  $.ajax({
    url: URL,
    type: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({}),
    success: function (places) {
      for (const place of places) {
        const article = ['<article>',
          '<div class="title_box">',
        `<h2>${place.name}</h2>`,
        `<div class="price_by_night">$${place.price_by_night}</div>`,
        '</div>',
        '<div class="information">',
        `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
        `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
        `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
        '</div>',
        '<div class="description">',
        `${place.description}`,
        '</div>',
        '</article>'];
        $('SECTION.places').append(article.join(''));
      }
    },
    error: function (error) {
      console.log(error);
    }
  });

  $(button).on('click', function () {
    const amenities = Object.values(amenitiesLst);
    $.ajax({
      url: URL,
      type: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({
        amenities: amenities
      }),
    })});
});
