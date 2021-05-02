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

function createCard(element) {
    var card = $("<div></div>");
    card.addClass("portfolio-card hover-card");

    var cardTitle = $("<p></p>");
    cardTitle.addClass("portfolio-card-tile");
    cardTitle.text(element.Name);

    var cardImage = $("<img></img>");
    cardImage.addClass("portfolio-card-image");
    cardImage.attr("src", element.imgName);

    var infoBox = $("<div></div>");
    infoBox.addClass("info-box div-centered");

    card.append(cardTitle);
    card.append(cardImage);
    card.append(infoBox);

    card.on("click", function () {
        $(this).removeClass("hover-card");
        $(this).children(".info-box").css("display", "block");
        $(this).children(".info-box").addClass("expand-info-box");
        $("#window-stopper").css("display", "block");
    })

    return card;
}

