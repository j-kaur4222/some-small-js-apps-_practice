    // Function to calculate dog's age in dog years
    function calculateDogAge(puppyAge, conversionRate = 7) {
        var dogAge = puppyAge * conversionRate;
        return "Your doggie is " + dogAge + " years old in dog years!";
    }

    // Call the function three times with different values
    var age1 = calculateDogAge(1); 
    var age2 = calculateDogAge(2, 6); 
    var age3 = calculateDogAge(3, 8); 

    // Display the results on the webpage
    document.write("<h2>Age 1:</h2>");
    document.write("<p>" + age1 + "</p>");

    document.write("<h2>Age 2:</h2>");
    document.write("<p>" + age2 + "</p>");

    document.write("<h2>Age 3:</h2>");
    document.write("<p>" + age3 + "</p>");