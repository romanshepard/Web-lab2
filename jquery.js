$(document).ready(function(){



    //fixed header
    let heightInner = $(".intro__content").height();
    


    $(window).on("scroll",function(){
        console.log(this.scrollY);

       
        if(this.scrollY >= heightInner)
        {
            $(".header").addClass("ffixed");
           
           
        }
        else 
        {
            $(".header").removeClass("ffixed");
        }
    });



     /* Menu nav toggle */
     $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    $(".single-item").slick({
        autoplay: true,
        autoplaySpeed: 1200,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });


      $("#listSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

});