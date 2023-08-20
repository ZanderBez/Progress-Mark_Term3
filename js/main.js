const arrCruise = [
    {
        name :"HAWAII",
        price :"626",
        description :"Hawaii is a beautiful series of volcanic U.S. islands in the Pacific Ocean. It could be an expensive getaway, but if you experience the wonders of the islands on Hawaiian island cruises, you'll save a ton of money without sacrificing the experience, as your food, lodging, and inter-island transportation are included in one low price with Hawaii cruise deals.",
        image : "luke-mckeown-nlyWZtWTzCo-unsplash.jpg",
        date : "8 NIGHTS",
        depart : "DEPART FROM Vancouver, Canada 9 am",
        destination : "DESTINATION Honolulu, Hawaii 7 am",
    },
    {
        name :"MEXICO",
        price :"233",
        description :"Cruisers love Mexico's delicious food, soulful mariachi music, and zest for life. When you cruise to Mexico, departure ports are often in the southern U.S., such as Los Angeles, San Diego, Miami, New Orleans, Tampa, or Galveston.",
        image : "jorge-zapata-zISkTiXiAxM-unsplash (1).jpg",
        date : "4 NIGHTS",
        depart : "DEPART FROM California at  9 am",
        destination : "DESTINATION: Ensenada - Mexico 8 am",
    },
    {
        name :"CARIBBEAN",
        price :"189",
        description :"A Caribbean cruise is one of the most popular and inexpensive ways to tour and explore this region, and with CruiseMate, you can visit a huge selection of Caribbean cruise destinations with itineraries on many different ships and cruise lines, including discount Caribbean cruises from Princess, Holland America, Norwegian, Carnival, Royal Caribbean, and more.",
        image : "rick-jamison-9CJTrF-HnlU-unsplash.jpg",
        date : "3 NIGHTS",
        depart : "DEPART FROM Miami, at 9AM",
        destination : "DESTINATION Puerto Plata, Dominican Republic 7Am",
    },
    {
        name :"BERMUDA",
        price :"509",
        description :"Experience the allure of Bermuda on a luxurious cruise, indulging in exquisite beaches, historic charm, and vibrant marine life. From pink sandy shores to pastel-hued architecture, this journey weaves relaxation and exploration into an unforgettable island escape.",
        image : "sandra-seitamaa-COsskg4ilTQ-unsplash.jpg",
        date : "6 NIGHTS",
        depart : "DEPART FROM New York, 9AM",
        destination : "DESTINATION BERMUDA, 7AM",
    }
];

let appliedSort = "low to high";

    $(document).ready(function(){
    loadCruise(arrCruise);
    filterSortCruise()
    
    })

    $(document).ready(function() {
        loadCruise(arrCruise);
    });
    
    $("input[name='sortRadio']").click(function(){
        appliedSort = $(this).attr('value');
    
        console.log(appliedSort)
        filterSortCruise();
    });
    
    function filterSortCruise() {
    
        let filterSortedArrCruise = [...arrCruise];
    
        if (appliedSort == "low to high"){
    
            // Sort the plants from lowest to highest
            filterSortedArrCruise = filterSortedArrCruise.sort((a,b) => {
                return a.price - b.price;
            });
        }else if (appliedSort == "high to low") {
            filterSortedArrCruise = filterSortedArrCruise.sort((a, b) => {
                return b.price - a.price;
            });
        }
        loadCruise(filterSortedArrCruise);
    }

function loadCruise(cruiseCard) {

    console.log(arrCruise);

    $("#cruiseContainer").empty();

    for (let i = 0; i < cruiseCard.length; i++) {
        const cruise = cruiseCard[i];

        console.log(cruise);

        $("#cruiseContainer").append($("#cruiseTemplate").html());

        let currentChild = $("#cruiseContainer").children().eq(i);

        currentChild.find(".img-fluid").attr('src', 'assets/' + cruise.image);
        currentChild.find("#nameText").text(cruise.name);
        currentChild.find("#priceText").text('$' + cruise.price);
        currentChild.find("#descriptionText").text(cruise.description);
        currentChild.find("#dateText").text(cruise.date);
        currentChild.find("#departText").text(cruise.depart);
        currentChild.find("#destinationText").text(cruise.destination);
    }
    
}

const apiKey = 'c27ccbfda2b5d0748a8b4eb974479ec1';

    // fetch weather data
    function fetchWeatherData(city) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=c27ccbfda2b5d0748a8b4eb974479ec1`;

      $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          const temperatureKelvin = data.main.temp;
          const temperatureCelsius = temperatureKelvin - 273.15;
          const weatherDescription = data.weather[0].description;
          const weatherData = `${temperatureCelsius.toFixed(2)}°C - ${weatherDescription}`;

          $(`.city-text:contains('${city}')`).siblings('.weather-data').text(weatherData);
        },
        error: function(error) {
          console.error('Error fetching weather data:', error);
        }
      });
    }

    $(document).ready(function() {
      // Fetch weather data for each city
      fetchWeatherData('Mexico');
      fetchWeatherData('Hawaii');
      fetchWeatherData('Bermuda');
      fetchWeatherData('Caribbean')
    });
