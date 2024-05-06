 $(document).ready(function(){
    
    


        
    var testimonialData = [
        {
        text: "Thanks to WeEat, dining out is no longer a source of anxiety for me. I used to worry constantly about accidental exposure to allergens, but now I can enjoy meals with friends and family without fear. The app has truly made a positive impact on my life, making dining experiences more inclusive and allergy-aware. Thank you, WeEat!",
          author: "Kathleen G.",
          source: "Google",
          pathsource: "socials/google.png",
          pathauthor: "users/people_1.png"

        },
        {
          text: "...I often felt left out or misunderstood, and it was challenging to find places that could accommodate my dietary needs",
          author: "Sarah M.",
          source: "Yelp",
          pathsource: "socials/yelp.png",
          pathauthor: "users/people_2.png"

        },
        {
         text: "WeEat has transformed the way I dine out. Previously, I felt excluded from social gatherings because of my allergies, but now I can confidently join in the fun. Dining out has become a joyous experience filled with delicious meals and cherished moments. I'm grateful to WeEat for making the world a more inclusive place.",
          author: "Megan D.",
          source: "Google",
          pathsource: "socials/google.png",
          pathauthor: "users/people_3.png"
        },
        {
          text: "Since discovering WeEat, I no longer feel like an outsider when dining out. The app's allergy-aware features have made me feel safe and included, allowing me to enjoy meals with friends and family without worry. WeEat has truly improved my dining experience and enriched my life. Thank you for creating such a valuable tool",
          author: "Conor J.",
          source: "App Store",
          pathsource: "socials/appstore.png",
          pathauthor: "users/people_4.png"
        }
    ];


    var template = $("#testimonial-template").html();
    Mustache.parse(template);
    var rendered = "";


    var fullPage = $("#testimonials-container").hasClass("full-page");

    if (fullPage) {
      for (var i = 0; i <testimonialData.length; i++) {
        rendered += Mustache.render(template, testimonialData[i]);
        
    }

    } else {
      rendered += Mustache.render(template, testimonialData[0]);
    }


    $("#testimonials-container").html(rendered);


    
 });
 


