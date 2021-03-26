$(window).scroll(function() {
var scrollTop = $(this).scrollTop();
if(scrollTop>50){
$("#navbar").addClass("ea55_com_header");
}else{
$(".ea55_com_header").removeClass("ea55_com_header");
}
});