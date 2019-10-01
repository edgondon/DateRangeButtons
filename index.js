'use strict';

function showEvents(alpha, omega) {
    $("#datez").append(`<p>${alpha}</p>;
            <p>${omega}</p>
            `);
      
    }
  
    function datesinConsole() {
        let now = new Date();
        let month = (now.getMonth() + 1);               
        let day = now.getDate();
        if (month < 10) 
            month = "0" + month;
        if (day < 10) 
            day = "0" + day;
        let today = now.getFullYear() + '-' + month + '-' + day;
        console.log(today);
    };







function watchEnter() {
    datesinConsole();
    $('form').submit(event => {
        event.preventDefault();
        $('#datez').empty();
        const alpha = $('#alpha').val();
        const omega = $('#omega').val();
        showEvents(alpha, omega);

    });
}

$(watchEnter);