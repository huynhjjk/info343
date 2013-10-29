/* A list that can be dragged and dropped */
$(function() {
  $( "#sortable1, #sortable2" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
});

/* A horizontal accordion */
$(document).ready(function(){
 
    activeItem = $("#accordion li:first");
    $(activeItem).addClass('active');
 
    $("#accordion li").hover(function(){
        $(activeItem).animate({width: "50px"}, {duration:300, queue:false});
        $(this).animate({width: "450px"}, {duration:300, queue:false});
        activeItem = this;
    });
 
});

/* A progress bar that monitors some kind of user input (0-100 user clicks for example) */
$(function() {
    $( "#progressbar" ).progressbar({
      value: 10
    })
    .data("value","10");
    
    $("#plus").click(function() {
        var currValue = $( "#progressbar" ).data("value");
        currValue = parseInt(currValue) ? parseInt(currValue) : 0;
        if(currValue <= 100) {
            $( "#progressbar" ).progressbar({
              value: currValue+1
            }).data("value",currValue+1);
            $("#progressLabel").html((currValue+1)+"%");
        }    
    });
    
    $("#minus").click(function() {
        var currValue = $( "#progressbar" ).data("value");
        currValue = parseInt(currValue) ? parseInt(currValue) : 0;
        if(currValue > 0) {
            $( "#progressbar" ).progressbar({
              value: currValue-1
            }).data("value",currValue-1);
            $("#progressLabel").html((currValue-1)+"%");
        }    
    });
    
  }); 

/* one event-based animation */
  $(function() {
    var state = true;
    $( "#button" ).click(function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#f0ad4e",
          color: "#fff",
          width: 600
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  });

/* other event-based animation */
$(document).ready(function(){
  $("#enlarge").click(function(){
    $("#enlarge").animate({
      left:'250px',
      height:'+=150px',
      width:'+=150px'
    });
  });
});
