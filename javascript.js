$(".services-box").on("mouseenter", function(){
        $(this).find(".service-title").css("color", "#fff");
        $ (this).find(".service-summary").css("color", "#fff");
        $(this).find(".read-more").css("color", "#fff");
 });

 $(".services-box").on("mouseleave", function(){
    $(this).css("backgroundColor", "#fff");
    $(this).find(".service-title").css("color", "#0f123b");
    $ (this).find(".service-summary").css("color", "#7b7c93");
    $(this).find(".read-more").css("color", "#207ef7");
});

// $(".ser-con__btn").hover(function(){
//     $(".service-btn").
    
// })


// $("button").on("mouseleave", function(){
//     $(this).css("font-weight", "normal");
//  }); */

// //  $('div').fadeOut();
 
//  $("button").on("click", function(){
//     $('div').fadeOut(1000, function(){
//         $(this).remove();
//     });
//  });

// $(".ser-con__btn").on("mouseenter", function(){
//     $(".service-btn").fadeIn(700, function(){
//         $(this).css({
//             backgroundColor: "#0f123b",
//             // color: "#fff"
//         });
//     });
//  });

//  $(".ser-con__btn").on("mouseleave", function(){
//     $(".service-btn").fadeOut(700, function(){
//         $(this).css({
//             backgroundColor: "#207ef7",
//             // color: "#fff"
//         });
//     });
//  });