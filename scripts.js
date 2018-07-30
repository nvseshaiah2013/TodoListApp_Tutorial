"use strict";
// $('li').click(function()
$("ul").on("click","li",function()
{
    /*
    if li is striked then unstrike
    if li is unstriked then strike
    */
  /*  if ($(this).css("text-decoration")
     ==="none solid rgb(102, 102, 102)"){
    $(this).css({
        color:'green',
        textDecoration:'line-through'
    });
}
else
{
    $(this).css({
        color:'gray',
        textDecoration:'none rgb(102,102,102)'
    });
}*/
$(this).toggleClass("complete");
});


$("ul").on("click","span",function(evt)
{
// $(this).parent().remove();
console.log($(this).parent);
$(this).parent().fadeOut(1000,function() {
    $(this).remove();
});
/*
stopPropagation function restricts the 
scope of event occurence to called element
*/
evt.stopPropagation();
});

$("input[type='text']").keypress(function(evt)
{
if(evt.which===13)
{
    // console.log("Clicked Enter!!");
    //$(this).val(); //returns the entered text
    var Todo = $(this).val();
    var len = $('li').length +3;
    $(this).val("");
    $("ul").append("<li id=no"+len+"><span><i class='fas fa-minus-circle'></i></span>" + Todo + "</li>");
}
});

$(".fa-plus").click(function()
{
$("input[type='text']").fadeToggle();
});