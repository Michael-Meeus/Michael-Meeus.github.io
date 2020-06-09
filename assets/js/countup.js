// Set the date we're counting down to
var countUpDate = new Date("Feb 24, 2020 20:00:00").getTime();
document.getElementById("uptimer").innerHTML = "82 days, 1 hour, 15 minutes";


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var time = now - countUpDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("uptimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (now > new Date("Jun 3, 2020 18:00:00")) {
    clearInterval(x);
    document.getElementById("uptimer").innerHTML = "Normaal is ek weg.";
  }
}, 1000);
