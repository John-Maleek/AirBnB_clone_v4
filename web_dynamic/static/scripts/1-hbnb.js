$(document).ready(function () {
  const $amenitiesCheck = $('input[type=checkbox]');
  const $selectedAmenities = $('div.amenities h4');
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
});
