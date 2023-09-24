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


      

      $(".everything__items").on('mouseenter',function(){
          
          $(".offcanvas").toggleClass("show");

        if($(".offcanvas").has("show"))
        {
           $(".offcanvas").on('mouseleave',function(){
               $(this).removeClass("show");
               $(this).addClass("hiding");
              
              
           });
           $(".offcanvas").removeClass("hiding");
        }


        

      });

      $('#table').bootstrapTable();
    

  $.ajax({
    url: "https://64baee415e0670a501d6bfa2.mockapi.io/list",
    method: "GET",
    dataType: "json",
    success: function(data) {


      
        const tableBody = $('#dataTable tbody');
        

        data.forEach((item, index) => {
          const row = $('<tr></tr>');
          row.append(`<td>${index + 1}</td>`);
          row.append(`<td>${item.name}</td>`);
          row.append(`<td>${item.author}</td>`);
          row.append(`<td>${item.year}</td>`);
          tableBody.append(row);
        });
      
    
      




    },
    error: function(error) {
      console.log("Error retrieving data:", error);
    },
  });


  const apiKey = '9988b93aeadd4eb39d3173145231809';
  const cities = ['New York', 'London', 'Tokyo', 'Rostov', 'Taganrog','Krasnodar','Vladivostok','Los Angeles']; 

  const tableBody2 = $('#dataTable2 tbody');
        

  cities.forEach((item, index) => {

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${item}`;

    $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        
        const cityName = data.location.name;
        const temperature = data.current.temp_c; // Температура в градусах Цельсия
        const weatherDescription = data.current.condition.text;
        const time = data.location.localtime;

       

        const row = $('<tr></tr>');
        row.append(`<td>${index}</td>`);
          row.append(`<td>${cityName}</td>`);
          row.append(`<td>${temperature}</td>`);
          row.append(`<td>${weatherDescription}</td>`);
          row.append(`<td>${time}</td>`);
          tableBody2.append(row);



      },
      error: function(error) {
        console.log(`Error fetching data for ${city}:`, error);
      }
    });
    


    
  });



});