var selected = 0;

$(document).ready(function() {
    $('img').click(function() {
        $('#selected').val($(this).attr('id'));
        $('#choice').text('You chose x');
    });
});