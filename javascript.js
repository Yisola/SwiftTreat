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

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

