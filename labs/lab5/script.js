$(document).ready(() => {
  $('.datepicker').datepicker({ dateFormat: 'yyyy-mm-dd' });
  $('.slider').slider({
    range: true,
    min: 0,
    max: 500,
    values: [35, 200],
    slide: function (event, ui) {
      $('#price').val('$' + ui.values[0] + ' - $' + ui.values[1]);
    },
  });
  $('#price').val(
    '$' +
      $('.slider').slider('values', 0) +
      ' - $' +
      $('.slider').slider('values', 1)
  );
  $('.menu').menu();
  $('#gallery1').unitegallery();
  $('#gallery2').unitegallery({
    gallery_theme: 'slider',
  });
  $('#gallery3').unitegallery({
    gallery_theme: 'slider',
  });
  $('.gifplayer').gifplayer({ label: 'play' });
});
