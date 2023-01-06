 // Get the current date
  var currentDate = new Date();

  // Get the current year, month, and day
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var day = currentDate.getDate();

  // Get the month name
  var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
  var monthName = monthNames[month];

  // Set the text of the element with id "current-date" to the current date
  document.getElementById("current-date").innerHTML = monthName + " " + day + ", " + year;
