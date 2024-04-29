 $(document).ready(function(){
    
    


        
    var testimonialData = [
        {
        text: "I can't express enough how much your product has changed my life! As someone with food allergies, dining out used to be a constant source of stress and anxiety for me",
          author: "Kathleen G.",
          source: "Google"
        },
        {
          text: "...I often felt left out or misunderstood, and it was challenging to find places that could accommodate my dietary needs",
          author: "Sarah M.",
          source: "Yelp"
        },
        {
          text: " I no longer have to worry about accidental exposure to allergens or feeling excluded from social gatherings",
          author: "Megan D.",
          source: "Google"
        },
        {
          text: " Thank you for making the world a more inclusive and allergy-aware place!",
          author: "Conor J.",
          source: "App Store"
        }
    ]


    var template = $("#testimonial-template").html();

    for (var i = 0; i <testimonialData.length; i++) {
        var rendered = Mustache.render(template, testimonialData[i]);
        $("#testimonials-container").html(rendered);
    }

    // Define your Mustache template
    

    // Render the template with the testimonial data
  

    // Insert the rendered HTML into the testimonials container
    
 })
 


