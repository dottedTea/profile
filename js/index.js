$(function() {
    let aboutTop = $('.about-container').position().top;
    let linksTop = $('.links').position().top;
    //console.log("scrollTop: "+linksTop);
    let defaultHeightOrange = $(window).height()-linksTop;
    $('.background-orange').height(defaultHeightOrange);
    $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        // console.log("scrollTop: "+scrollTop);
        $('.background-orange').height(defaultHeightOrange+scrollTop);
        let icon_vh = scrollTop * (68 / aboutTop);
        if(icon_vh <= 68) {
            $('#img-icon').height(32 + icon_vh + "vh");
        }
    });

    let srcAry = ["./img/tea2.png", "./img/tea1.png"];
    let i = 0;
    setInterval(function() {
        if (i === srcAry.length) {
            i = 0;
        }
        $('#img-icon').attr('src', srcAry[i]);
        i++;
    }, 1000);
});