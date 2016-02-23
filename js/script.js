/**
 * Created by regi1836 on 23/02/2016.
 */

function setTheme(theme) {
    console.log('sæt theme: ' + theme);
    $.mobile.activePage.find('.ui-btn').not('.ui-li-divider').removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-hover-a ui-btn-hover-b ui-btn-hover-c ui-btn-hover-d ui-btn-hover-e').addClass('ui-btn-up-' + theme).attr('data-theme', theme);
    $.mobile.activePage.find('.ui-header, .ui-footer').removeClass('ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e').addClass('ui-bar-' + theme).attr('data-theme', theme);
    $.mobile.activePage.removeClass('ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e').addClass('ui-body-' + theme).attr('data-theme', theme);
    $.mobile.activePage.find('.ui-li-divider').each(function (index, obj) {
        if ($(this).parent().attr('data-divider-theme') == 'undefined') {
            $(this).removeClass('ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e').addClass('ui-bar-b').attr('data-theme', 'b');
        }
    });
}

$(document).bind('pagebeforeshow', function () {
    setTheme(localStorage.getItem('theme'));
});

$(document).ready(function () {
    console.log('side');
    $('#theme-choice').submit(function (event) {
        event.preventDefault();
        localStorage.setItem('theme', $('#theme').val());
    });
    setTheme(localStorage.getItem('theme'));
});
