$(function(){
  // Init
  $('section').hide();
  $('section[data-name=home]').show();
  // Button Click
  $('button, a').on('click',function(){
    action = $(this).attr('data-action');
    switch (action) {
      case "":
        break;
      case "reload":
        window.location.reload();
        break;
      default:
        $('section').hide();
        $('section[data-name='+action+']').show();
        break;
    }
  });
});