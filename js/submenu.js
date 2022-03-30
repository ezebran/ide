$(".menu > li").click(function() {
    $this = $(this); 
    $this.children("ul").slideToggle("fast");
});