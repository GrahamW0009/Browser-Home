;(function(window, document, undefined) {
    'use strict';

    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];

    var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'];


    var elements = {
        time:    document.getElementById('time'),
        weekday: document.getElementById('weekday'),
        month:   document.getElementById('month'),
        day:     document.getElementById('day'),
        suffix:  document.getElementById('suffix'),
    };

    function getGetOrdinal(n) {
        var s = ['th', 'st', 'nd', 'rd'],
            v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }


    function update() {
        var now = new Date();

        var month = now.getMonth();
        var weekday = now.getDay();
        var day = now.getDate();

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
        elements.weekday.innerHTML = WEEKDAYS[weekday];
        elements.month.innerHTML = MONTHS[month];
        elements.day.innerHTML = day;
        elements.suffix.innerHTML = getGetOrdinal(day);
    }

    update();
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
