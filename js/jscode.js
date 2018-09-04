$('.close').on('click', function () {
    $('.overlay').slideUp();
});

$('.short').on('click', "a", function (e) {
    e.preventDefault();
    txt = $(this).text();
    $('.overlay').find(".content").text(txt).end().slideDown();
});

$('tbody tr').each(function (i, v) {
    $(v).prepend("<td><img class='delete_img' src='../images/delete.png' width='30px' height='30px'></td>")

})


$('.delete_img').on('click', function(e) {
    ans = confirm("می خواهید این ردیف را پاک کنید؟")
    if (ans){
        $(this).remove()
    }
});