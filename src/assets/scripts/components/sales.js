$(document).ready(function () {
    let maxLength;
    window.innerWidth > 576 ? maxLength = 250 : maxLength = 150;
    let ellipsestext = '...';
    let moretext = 'PRIKAZI JOS';
    let lesstext = 'PRIKAZI MANJE';

    $('.sales__sale-description').each(function () {
        let myStr = $(this).text();
        if ($.trim(myStr).length > maxLength) {
            let newStr = myStr.substring(0, maxLength);
            let removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
            let Newhtml = newStr + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="sales__sale-read-more ReadMore">' + moretext + '</a></span>';
            $(this).html(Newhtml);
        }
    });

    $('.ReadMore').click(function () {
        if ($(this).hasClass('less')) {
            $(this).removeClass('less');
            $(this).html(moretext);
        } else {
            $(this).addClass('less');
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
