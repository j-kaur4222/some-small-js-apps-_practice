     // Function to tell a fortune
     function tellFortune(numChildren, partnerName, location, jobTitle) {
        var fortune = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " 
        + numChildren + " kids.";
        return fortune;
    }

    // Call the function three times with different values
    var fortune1 = tellFortune(2, "Alice", "New York", "Web Developer");
    var fortune2 = tellFortune(0, "John", "Los Angeles", "Teacher");
    var fortune3 = tellFortune(3, "Emily", "San Francisco", "Doctor");

    // Display the fortunes on the webpage
    document.write("<h2>Fortune 1:</h2>");
    document.write("<p>" + fortune1 + "</p>");

    document.write("<h2>Fortune 2:</h2>");
    document.write("<p>" + fortune2 + "</p>");

    document.write("<h2>Fortune 3:</h2>");
    document.write("<p>" + fortune3 + "</p>");