import $ from 'jquery';

$(document).ready(function() {
    $('body').append(
        $('<h1></h1>').text('Holberton Dashboard'),
        $('<p></p>').text('Dashboard data for the students'),
        $('<p></p>').text('Copyright - Holberton School'),
    );
    });