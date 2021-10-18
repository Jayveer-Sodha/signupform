import $ from 'jquery';


let pillButtonOnText = $('.pill-button-selection_on'),
    pillButtonOffText = $('.pill-button-selection_off'),
    pillButtonHighlight = $('.pill-button-highlight'),
    pillButtonOnTextWidth = pillButtonOnText.outerWidth(),
    pillButtonOffTextWidth = pillButtonOffText.outerWidth(),
    pillButtonOnTextPosition = pillButtonOnText.position(),
    pillButtonOffTextPosition = pillButtonOffText.position(),
    pillButtonInput = $('.pill-button-input');

$('.pillButtonHighlight').css('width', pillButtonOnTextWidth);

$('.pill-button-selection').on('click', function() {
  if(!$(this).hasClass('pill-button-selection_active')) {
    $('.pill-button-selection').removeClass('pill-button-selection_active');
    $(this).addClass('pill-button-selection_active');

    if($(this).hasClass('pill-button-selection_off') && pillButtonInput.prop('checked',true)) {
      pillButtonInput.prop('checked',false);
      pillButtonHighlight.css({
        'width': pillButtonOffTextWidth,
        'left': pillButtonOffTextPosition.left
      });
      console.log("Is Checked - OFF");
    }
    else {
      pillButtonInput.prop('checked',true);
      pillButtonHighlight.css({
        'width': pillButtonOnTextWidth,
        'left': pillButtonOnTextPosition.left
      });
      console.log("Is Checked - ON");
    }
  }
});

if(pillButtonInput.prop('checked',true)) {// default on cold start
  console.log('is checked - cold start');
  pillButtonHighlight.css('width', pillButtonOnTextWidth);
} else {
  console.log('is not checked - cold start');
  pillButtonHighlight.css('width', pillButtonOffTextWidth);
}