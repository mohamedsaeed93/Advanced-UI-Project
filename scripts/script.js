jQuery(document).ready(function($) {
  var slider = $('.default-slider').unslider({
    arrows: false
  });
  slider.on('unslider.change', function(event, index, slide) {
    current = $('#preview').css('left');
    current = 617+20*index;
    current = current+'px';
    $('#preview').css('left',current);
  });
});
