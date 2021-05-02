const projects = [
    {
        Name: "Retro Graphics Studio",
        ProjectType: "Capstone",
        Description: "An application to create Nintendo Entertainment System Graphics and export them as a .bin file.",
        imgName: "#"
    }
]

$(function () {
    projects.forEach(element => {
        $("#portfolio-card-holder").append(createCard(element));
    });
});

function createCard(project) {
    var card = $("<div></div>");
    card.addClass("portfolio-card hover-card");

    var cardTitle = $("<p></p>");
    cardTitle.addClass("portfolio-card-tile");
    cardTitle.text(project.Name);

    var cardImage = $("<img></img>");
    cardImage.addClass("portfolio-card-image");
    cardImage.attr("src", project.imgName);

    card.append(cardTitle);
    card.append(cardImage);
    card.append(createInfoBox(project));

    card.on("click", function () {
        $(this).removeClass("hover-card");
        $(this).addClass("selected-card");
        $(this).children(".info-box").css("display", "block");
        $(this).children(".info-box").addClass("expand-info-box");
        $("#window-stopper").css("display", "block");
    })

    return card;
}

function createInfoBox(project) {
    var infoBox = $("<div></div>")
        .addClass("info-box div-centered")
        .append(
            $("<div></div>")
            .addClass("info-box-header")
            .append(
                $("<h2></h2>")
                .text(project.Name)
                .addClass("info-box-title")
            )
            .append(
            $("<a></a>")
                .text("x")
                .attr("href", "#")
                .addClass("info-box-x-button")
                .on("click", function() {
                    console.log("x has been clicked");
                    console.log($(".expand-info-box").eq(0));
                    $(".expand-info-box").eq(0).css("display", "none");
                    $(".expand-info-box").eq(0).removeClass("expand-info-box");
                    $(".selected-card").eq(0).addClass("hover-card");
                    $(".selected-card").eq(0).removeClass("selected-card");
                })
            )
        );

    return infoBox;
}