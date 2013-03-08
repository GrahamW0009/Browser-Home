function update() {
  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();
  /* Convert the hours component to 12-hour format if needed */
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
  /* Pad the minutes and seconds with leading zeros, if required */
  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  $('#time').html(currentHours + ":" + currentMinutes);
}