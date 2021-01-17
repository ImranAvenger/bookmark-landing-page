$(document).ready(function(){
    $(".js_navigation").waypoint(function(direction){
    if (direction == "down") {
        $("nav").addClass("sticky");
    } 
    else {
        $("nav").removeClass("sticky");
    }
});