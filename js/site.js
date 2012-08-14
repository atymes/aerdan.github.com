$(document).ready(function() {
    if ($.cookie('text-shadow') == 'no') {
        $('body').css('text-shadow', 'none');
        $('#no-shadow').attr('checked', 'checked');
    }
    $('#no-shadow').click(function(){
        if ($.cookie('text-shadow') == 'no') {
            $.cookie('text-shadow', 'yes');
        } else {
            $.cookie('text-shadow', 'no');
        }
    });
    $('#style').change(function() {
        $.cookie('stylesheet', $('#style').val());
    });
    if (!$.cookie('stylesheet')) {
        $.cookie('stylesheet', 'ff4');
    } else {
        $('#style').val($.cookie('stylesheet'));
    }
    var style = $.cookie('stylesheet');
    if (style != 'ff4') {
        $("head").append('<link href="/css/' + style + '.css" rel="stylesheet">');
    }
});

