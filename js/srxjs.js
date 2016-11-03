if($(".srx_exam")!=undefined){
    var srx_a=parseInt($('.srx_exam2').height())
    $(".srx_yy").css({height:srx_a-72})
}else if($(".srx_exam2")!=undefined){
    var srx_a=parseInt($('.srx_exam').height())
    $(".srx_yy").css({height:srx_a-72})
}