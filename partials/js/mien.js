$(document).ready(function () {

    $('.imag_row img').click(function (e) {
        var attr = $(e.target).attr('src');
        $('.top_image img').attr('src', attr);
        $(e.target).parent().css('background', '#707070').siblings().css('background', '#b6b6b6');
    });

    $('.top_image img').click(function (e) {
        $('body').css('overflow', 'hidden');
        $(document).scrollTop(0);
        var over = $(e.target).attr('src');
        $('#img_overflow').show();
        $('.over_container img').attr('src', over);
        $('.imag_row img').each(function (index, item) {
            if (over === $(item).attr('src')) {
                $('.img_of').text(index + 1)
            }
        });
    });

    $('.closeIcone').click(function () {$('#img_overflow').hide()});
        

    document.onkeydown = function(e) {
        e = e || window.event;
        var isEscape = false;
        if ("key" in e) {
            isEscape = (e.key === "Escape" || e.key === "Esc");
        } else {
            isEscape = (e.keyCode === 27);
        }
        if (isEscape) {
            $('#img_overflow').hide();
            $('body').css('overflow', 'auto');
        }
    };

    /* Start change img on Click. */

    var len = $('.imag_row img').length - 1;
    $('.img_cpunt').text(len + 1);

    $('.trans_right, #img_overflow img').click(function (e) {
        var getAttr = $(e.target).siblings('img').attr('src') || $(e.target).attr('src');
        $('.imag_row img').each(function (index, item) {
            if (getAttr === $(item).attr('src')) {
                if (len === index) index = -1;
                $('.img_of').text((index + 1) + 1);
                $('#img_overflow img').attr('src', $('.imag_row img').eq(index + 1).attr('src'));
            }
        });
    });


    $('.trans_left').click(function (e) {
        var getAttr = $(e.target).siblings('img').attr('src');
        $('.imag_row img').each(function (index, item) {
            if (getAttr === $(item).attr('src')) {
                --index
                if (index === -1) index = len;
                $('.img_of').text(index + 1);
                $('#img_overflow img').attr('src', $('.imag_row img').eq(index).attr('src'));
            }
        });
    });

    /* End change img on Click. */

    var viewer = new ViewBigimg()
    $('#search-plus').on('click', function (){
        viewer.show($('#zoom').attr('src'));
     });

});