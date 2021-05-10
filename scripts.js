const projects = [
    {
        Name: "Retro Graphics Studio (Prototype)",
        ProjectType: "Capstone",
        Description: "An application to create Nintendo Entertainment System Graphics and export them as a .bin file.",
        thumbnailImage: "",
        carouselImages: [],
        projectURL: ""
    },
    {
        Name: "something",
        ProjectType: "",
        Description: "",
        thumbnailImage: "",
        carouselImages: [],
        projectURL: ""
    }
]

$(function () {
    projects.forEach(element => {
        $("#portfolio-card-holder").append(createCard(element));
        $("#info-box-holder").append(createInfoBox(element));
    });
});

function createCard(project) {
    var card = $("<div></div>");
    card.addClass("portfolio-card hover-card");

    var cardTitle = $("<p></p>");
    cardTitle.addClass("portfolio-card-title");
    cardTitle.text(project.Name);

    var cardImage = $("<img></img>");
    cardImage.addClass("portfolio-card-image");
    cardImage.attr("src", project.thumbnailImage);

    card.append(cardTitle);
    card.append(cardImage);

    card.on("click", function () {
        var cardIndex = $(this).index();
        console.log(cardIndex);
        $(this).removeClass("hover-card");
        $(this).addClass("selected-card");
        $(".info-box").eq(cardIndex).css("display", "block");
        $(".info-box").eq(cardIndex).addClass("expand-info-box");
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
            $("<button></button>")
                .text("x")
                .addClass("info-box-x-button")
                .on("click", function () {
                    $(".expand-info-box").eq(0).css("display", "none");
                    $(".expand-info-box").eq(0).removeClass("expand-info-box");
                    $(".selected-card").eq(0).addClass("hover-card");
                    $(".selected-card").eq(0).removeClass("selected-card");
                    $("#window-stopper").css("display", "none");
                })
            )
        );

    return infoBox;
}