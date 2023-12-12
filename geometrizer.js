  // Function to calculate the circumference of a circle
  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    return "The circumference is " + circumference.toFixed(2);
}

// Function to calculate the area of a circle
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return "The area is " + area.toFixed(2);
}

// Example usage:
var radius = 5; // Replace with your desired radius

// Calculate and display the circumference and area
var circumferenceResult = calcCircumference(radius);
var areaResult = calcArea(radius);

document.write("<h2>Circle Properties:</h2>");
document.write("<p>" + circumferenceResult + "</p>");
document.write("<p>" + areaResult + "</p>");