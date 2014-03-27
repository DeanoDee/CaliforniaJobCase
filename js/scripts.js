$(document).ready(function(){
  $(".grid-toggle").click(
    function(e){
      $(".overlay, .grid-off, .grid-on").toggle();
      e.preventDefault();
    }
  );
})
