        // Function to calculate lifetime supply of a snack
        function calculateSupply(age, amountPerDay) {
            // Constants
            var maxAge = 80; // Maximum age
            var daysPerYear = 365; // Days in a year
            var lifetimeSupply = Math.round((maxAge - age) * daysPerYear * amountPerDay);

            return "You will need " + lifetimeSupply + " to last you until the ripe old age of " + maxAge;
        }

        // Call the function three times with different values
        var supply1 = calculateSupply(30, 2); // 30 years old, 2 units per day
        var supply2 = calculateSupply(25, 1.5); // 25 years old, 1.5 units per day
        var supply3 = calculateSupply(40, 3.5); // 40 years old, 3.5 units per day

        // Display the results on the webpage
        document.write("<h2>Supply 1:</h2>");
        document.write("<p>" + supply1 + "</p>");

        document.write("<h2>Supply 2:</h2>");
        document.write("<p>" + supply2 + "</p>");

        document.write("<h2>Supply 3:</h2>");
        document.write("<p>" + supply3 + "</p>");