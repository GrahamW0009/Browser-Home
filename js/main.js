;(function(window, document, undefined) {
    'use strict';

    var MONTHS = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY',
                    'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

    var WEEKDAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY',
                    'THURSDAY', 'FRIDAY', 'SATURDAY'];

    var DAYS = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN',
                'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN',
                'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN',
                'NINETEEN', 'TWENTY', 'TWENTY-ONE', 'TWENTY-TWO', 'TWENTY-THREE',
                'TWENTY-FOUR', 'TWENTY-FIVE', 'TWENTY-SIX', 'TWENTY-SEVEN',
                'TWENTY-EIGHT', 'TWENTY-NINE' ,'THIRTY', 'THIRTY-ONE'];


    var elements = {
        time:    document.getElementById('time'),
        day:     document.getElementById('day'),
        weekday: document.getElementById('weekday'),
        month:   document.getElementById('month'),
    };


    function update() {
        var now = new Date();

        var month = now.getMonth();
        var weekday = now.getDay();
        var day = now.getDate() - 1;

        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();


        // Convert the hours component to 12-hour format if needed
        hours = ( hours > 12 ) ? hours - 12 : hours;

        // Pad the hours, minutes & seconds with leading zeros, if required
        hours = ( hours < 10 ? '0' : '' ) + hours;
        minutes = ( minutes < 10 ? '0' : '' ) + minutes;
        seconds = ( seconds < 10 ? '0' : '' ) + seconds;


        // Update elements
        elements.time.innerHTML = hours +':'+ minutes;
        elements.day.innerHTML = DAYS[day];
        elements.weekday.innerHTML = WEEKDAYS[weekday];
        elements.month.innerHTML = MONTHS[month];
    }

    setInterval(update, 1000);


    //
    // Custom background image JS
    //

    function getURLParameter(name) {
        return (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[null,null])[1];
    }

    if (getURLParameter('background') !== null) {
        var imgURL = getURLParameter('background');
        document.body.style['background-image'] = 'url('+imgURL+')';
    }

})(this, this.document);
