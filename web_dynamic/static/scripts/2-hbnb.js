$(document).ready(function () {
    const $amenitiesCheck = $('input[type=checkbox]');
    const $selectedAmenities = $('div.amenities h4');
    const $statusIndicator = $('div#api_status');
    const statusUri = 'http://localhost:5001/api/v1/status/';
    const obj = {};

  $amenitiesCheck.click(function () {
    if ($(this).is(':checked')) {
      obj[$(this).data('id')] = $(this).data('name');
      $selectedAmenities.text(Object.values(obj).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete obj[$(this).data('id')];
      $selectedAmenities.text(Object.values(obj).join(', '));
    }
  });

  $.ajax({
    url: statusUri,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      if (data.status === 'OK') {
        $statusIndicator.addClass('available');
      } else {
        $statusIndicator.removeClass('available');
      }
    }
  });
});