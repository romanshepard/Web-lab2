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



});