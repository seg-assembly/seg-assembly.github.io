const projects = [
  {
    Name: "Retro Graphics Studio",
    ProjectType: "Capstone with Continued Development",
    Description:
      "An application to create Retro Video Game Graphics and export them as files readable by homebrew applications/games.\
            The initial implementation of Retro Graphics Studio was developed as my college capstone and only supported creating\
            graphics tiles for the Nintendo Entertainment System. I plan on continuing development on this project and, hopefully,\
            expand it into a larger project for more than just Homebrew Graphics.",
    thumbnailImage: "",
    carouselImages: [
      {
        img: "./images/retro_graphics_studio_capstone_screenshot.png",
        desc: "Screenshot of Finished Capstone",
      },
    ],
    links: [
      {
        url: "https://github.com/seg-assembly/retro_gfx_studio",
        linkDesc: "Retro Graphics Studio GitHub Repository",
        symbol: "",
      },
    ],
  },
];

$(function () {
  projects.forEach((element) => {
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
    $(".info-box").eq(cardIndex).css("display", "flex");
    $(".info-box").eq(cardIndex).addClass("expand-info-box");
    $("#window-stopper").css("display", "block");
  });

  return card;
}

function createInfoBox(project) {
  var infoBox = $("<div></div>")
    .addClass("info-box div-centered")
    .append(
      $("<div></div>")
        .addClass("info-box-header")
        .append($("<h2></h2>").text(project.Name).addClass("info-box-title"))
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
    )
    .append(
      $("<div></div>")
        .addClass("info-box-body")
        .append(
          $("<div></div>")
            .addClass("info-box-image-carousel")
            .append(
              $("<div></div>")
                .addClass("info-box-carousel-image-container")
                .append(
                  $("<img></img>")
                    .addClass("info-box-carousel-image")
                    .attr("src", project.carouselImages[0].img)
                )
              // .append(
              //     $("<span></span>")
              //     .addClass("info-box-carousel-image-desc")
              //     .text(project.carouselImages[0].desc)
              // )
            )
        )
        .append(
          $("<div></div>")
            .addClass("info-box-project-description-container")
            .append(
              $("<p></p>")
                .addClass("info-box-project-description")
                .text(project.Description)
            )
        )
        .append($("<div></div>").addClass("info-box-link-container"))
    );

  return infoBox;
}
