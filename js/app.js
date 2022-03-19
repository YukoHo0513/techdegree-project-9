const project = $(".p-item");
const overlay = $(".overlay");
const xSign = $(".fa-times");

project.click(function(e) {
    if ($(e.target).hasClass("fa-times")) {
        $(e.target).parent().parent().removeClass("d-block");
    } else {
        $(this).children().last().addClass("d-block");
    }
})


