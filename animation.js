
$("#hide").click(function(){

$("#div").hide(2000);

})


$("#show").click(function(){

    $("#div").show(2000);
    
})

    
$("#toggle").click(function(){

    $("#div").toggle(2000);
    
 })

     
$("#fadeout").click(function(){

    $("#div").fadeOut(2000);
    
 })

 $("#fadein").click(function(){

    $("#div").fadeIn(2000);
    
 })

 $("#fadetoggle").click(function(){

    $("#div").fadeToggle(2000);
    
 })

 $("#fadeto").click(function(){

    $("#div").fadeTo(2000,0.5);
    
 })

 $("#slideup").click(function(){

    $("#div").slideUp(2000);
    
 })

 $("#slidedown").click(function(){

    $("#div").slideDown(2000);
    
 })

 $("#slidetoggle").click(function(){

    $("#div").slideToggle(2000);
    
 })

 $("#animate").click(function(){

    $("#div").animate({height:"300px",width:"1000px"},2000);
    
 })