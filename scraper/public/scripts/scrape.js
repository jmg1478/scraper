$(document).ready(function () {
    $.getJSON("/displayInfo", function (response) {
        console.log(responce);
        responce.forEach(function (article) {
            console.log(article);
            var divOne = "<div class='col 8 m8 offset-m2'>";
            divOne += "<div class='article-box'>"
            divOne += "<div class='article-title'>";
            divOne += "<h3>" + article.title + "</h3>";
            divOne += "</div>";
            divOne += "<div class='article-link'>";
            divOne += "<a href=" + article.link + ">" + 'View Article' + "</a>";
            divOne += "</div>";
            divOne += "<div class='article-addNote'>";
            divOne += "<p>" + 'Your Notes' + "</p>";
            divOne += "<form action='/submit' method='post'>" +
                "<textarea class='form-control' rows='3' name='body'>" +
                "Write Note Here</textarea></br>" +
                "<input type='submit' class='btn btn-default'></form>";
            divOne += "</div>";
            divOne += "</div>";
            divOne += "</div>";



            $(".row").append(divOne);

        });
    });
});