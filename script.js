checkTime();
checkTodo();

// global
var current = $('#current'); // gets current time from id

// displays date on jumbotron
current = current.text(moment().format("MMMM Do YYYY")); // 

// Checks the time and determines color of each time section
function checkTime() {
    $('.time-block').each(function() {
        var timeID = parseInt(($(this)).attr('id')); // compares to current hour
        var hour = moment().format('H'); // displays current hour
        var textarea = $(this).children('.description') // changes color of block depending on time

        if (timeID == hour) { textarea.addClass('present'); } else if (timeID > hour) { textarea.addClass('future'); } else { textarea.addClass('past'); }
    })

}
// stores to local storage
function checkTodo() {
    $('.time-block').each(function() {
        if (localStorage.getItem(parseInt(($(this)).attr('id'))) === null) { return; } else {
            $(this).children('.description').val(localStorage.getItem(parseInt(($(this)).attr('id'))));
        }
    })
}
// triggers button when clicked
$('.fa-save').click(function(event) {
    var t = $(this);
    localStorage.setItem((t.parents('.row').attr('id')), t.parent().siblings('.description').val())
});