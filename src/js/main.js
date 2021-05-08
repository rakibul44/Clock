function time() {
    var ti = new Date(),
    hour = ti.getHours(),
    minit = ti.getMinutes(),
    sec = ti.getSeconds(),
    meridiem = 'PM';
    
    if ( hour < 12 ) {
        meridiem = "AM";
        }
    
    // 24 to 12
    if ( hour> 12 ) {
            hour = hour - 12;
        }
    // 
    
    if (hour == 0) {
        hour= 12;
        }
    
    
    if (hour < 10) {
        hour = '0' + hour;
        }
    
    if (minit < 10) {
        minit = '0' + minit;
        }
    
    if (sec < 10) {
        sec = '0' + sec;
        }

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minit;
    document.getElementById('second').innerHTML = sec;
    document.getElementById('meridiem').innerHTML = meridiem;
    document.getElementById('time').innerHTML= hour + ':' + minit + ':' + sec + ' ' + meridiem;
}

setInterval(time, 100);