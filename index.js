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

        let month2 = (now.getMonth() + 2);
        let today2 = now.getFullYear() + '-' + month2 + '-' + day;
        console.log(today2);


    $("form").append(`
    <label for="State">FIRST DATE IN RANGE YYYY-MM-DD</label>
    <input type="date" id="alpha" name="State" value="${today}" required>
    <label for="numSearch">SECOND DATE IN RANGE YYYY-MM-DD</label>
    <input type="date" id="omega" name="numSearch" value="${today2}">
    <input type="submit"  value="Submit Request">`);
      
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