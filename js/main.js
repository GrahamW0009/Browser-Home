function update() {
  var now = new Date();

  var month = now.getMonth();
  var week = now.getDay();
  var day = now.getDate();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  /* Convert the hours component to 12-hour format if needed */
  hours = ( hours > 12 ) ? hours - 12 : hours;
  /* Pad the minutes and seconds with leading zeros, if required */
  hours = ( hours < 10 ? "0" : "" ) + hours;
  minutes = ( minutes < 10 ? "0" : "" ) + minutes;
  seconds = ( seconds < 10 ? "0" : "" ) + seconds;

  var months = new Array("JANUARY","FEBRUARY","MARCH","APRIL","MAY",
    "JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER");

  var weeks = new Array("SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY");

  var days = new Array ("0", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN",
    "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINETEEN", "TWENTY", 
    "TWENTY-ONE", "TWENTY-TWO", "TWENTY-THREE", "TWENTY-FOUR", "TWENTY-FIVE", "TWENTY-SIX",
    "TWENTY-SEVEN", "TWENTY-EIGHT", "TWENTY-NINE" ,"THIRTY", "THIRTY-ONE");

  $('#time').html(hours + ":" + minutes);
  $('#day').html(days[day]);
  $('#week').html(weeks[week]);
  $('#month').html(months[month]);
}

function getURLParameter(name) {
  return (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1];
}

if (getURLParameter('background') != null)
  $('html').css('background-image', 'url('+getURLParameter('background')+')');
