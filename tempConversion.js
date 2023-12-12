
        // Function to convert Celsius to Fahrenheit
        function celsiusToFahrenheit(celsius) {
            var fahrenheit = (celsius * 9/5) + 32;
            return celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
        }

        // Function to convert Fahrenheit to Celsius
        function fahrenheitToCelsius(fahrenheit) {
            var celsius = (fahrenheit - 32) * 5/9;
            return fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
        }

        // Example usage:
        var celsiusTemp = 25; 
        var fahrenheitTemp = 77; 

        // Convert and display temperature conversions
        var celsiusToFahrenheitResult = celsiusToFahrenheit(celsiusTemp);
        var fahrenheitToCelsiusResult = fahrenheitToCelsius(fahrenheitTemp);

        document.write("<h2>Temperature Conversions:</h2>");
        document.write("<p>" + celsiusToFahrenheitResult + "</p>");
        document.write("<p>" + fahrenheitToCelsiusResult + "</p>");