$(function() {
        // Handle the form submission
        $('#custom-form').on('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            // Get form data
            const formData = $(this).serialize(); // Serializes the form data into a query string 
            // You can also access individual form fields like this:

            const weight = $('#weight').val();
            const height = $('#height').val();
            // Formula
            const bmi = ((weight)/(height*height*0.0001)).toFixed(2);

            $('.result1').html(bmi);
            var body = "";

            if(bmi <18.5) {
                body = "Underweight";
            } else if (bmi>=18.5 && bmi <=24.9) {
                body = "Normal";
            } else if (bmi>25 && bmi<30) {
                body = "Overweight";
            } else {body = "Obese"}

            $('.result2').html("You have a "+ body +" body mass");
        });


})