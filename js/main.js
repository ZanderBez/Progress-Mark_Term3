const cruise = [
    {
        name :"HAWAII",
        price :"1000",
        description :"Hawaii is a beautiful series of volcanic U.S. islands in the Pacific Ocean. It could be an expensive getaway, but if you experience the wonders of the islands on Hawaiian island cruises, you'll save a ton of money without sacrificing the experience, as your food, lodging, and inter-island transportation are included in one low price with Hawaii cruise deals.",
        image : "luke-mckeown-nlyWZtWTzCo-unsplash.jpg",
        date : "8 NIGHTS",
        depart : "DEPART FROM VANCOUVER, CANADA 9AM",
        destination : "DESTINATION HONOLULU, HAWAII 7AM",
    },
    {
        name :"HAWAII",
        price :"1000",
        description :"Hawaii is a beautiful series of volcanic U.S. islands in the Pacific Ocean. It could be an expensive getaway, but if you experience the wonders of the islands on Hawaiian island cruises, you'll save a ton of money without sacrificing the experience, as your food, lodging, and inter-island transportation are included in one low price with Hawaii cruise deals.",
        image : "luke-mckeown-nlyWZtWTzCo-unsplash.jpg",
        date : "8 NIGHTS",
        depart : "DEPART FROM VANCOUVER, CANADA 9AM",
        destination : "DESTINATION HONOLULU, HAWAII 7AM",
    },
    {
        name :"HAWAII",
        price :"1000",
        description :"Hawaii is a beautiful series of volcanic U.S. islands in the Pacific Ocean. It could be an expensive getaway, but if you experience the wonders of the islands on Hawaiian island cruises, you'll save a ton of money without sacrificing the experience, as your food, lodging, and inter-island transportation are included in one low price with Hawaii cruise deals.",
        image : "luke-mckeown-nlyWZtWTzCo-unsplash.jpg",
        date : "8 NIGHTS",
        depart : "DEPART FROM VANCOUVER, CANADA 9AM",
        destination : "DESTINATION HONOLULU, HAWAII 7AM",
    },
    {
        name :"HAWAII",
        price :"1000",
        description :"Hawaii is a beautiful series of volcanic U.S. islands in the Pacific Ocean. It could be an expensive getaway, but if you experience the wonders of the islands on Hawaiian island cruises, you'll save a ton of money without sacrificing the experience, as your food, lodging, and inter-island transportation are included in one low price with Hawaii cruise deals.",
        image : "luke-mckeown-nlyWZtWTzCo-unsplash.jpg",
        date : "8 NIGHTS",
        depart : "DEPART FROM VANCOUVER, CANADA 9AM",
        destination : "DESTINATION HONOLULU, HAWAII 7AM",
    }
];

function loadCruise() {
    for (let i = 0; i < cruise.length; i++) {
        const cruise = cruise[i];

        $("#cruiseContainer").append($("#cruiseTemplate").html());

        let currentChild = $("#cruiseContainer").children().eq(i + 1);

        currentChild.find(".img-fluid.rounded-start").attr('src', 'assets/' + cruise.image);
        currentChild.find("#nameText").text(cruise.name);
        currentChild.find("#priceText").text('$' + cruise.price);
        currentChild.find("#descriptionText").text(cruise.description);
        currentChild.find("#dateText").text(cruise.date);
        currentChild.find("#departText").text(cruise.depart);
        currentChild.find("#destinationText").text(cruise.destination);
    }
}

