const arrCruise = [
    {
        name :"HAWAII",
        price :"626",
        description :"Hawaii is a beautiful series of volcanic U.S. islands in the Pacific Ocean. It could be an expensive getaway, but if you experience the wonders of the islands on Hawaiian island cruises, you'll save a ton of money without sacrificing the experience, as your food, lodging, and inter-island transportation are included in one low price with Hawaii cruise deals.",
        image : "luke-mckeown-nlyWZtWTzCo-unsplash.jpg",
        date : "8 NIGHTS",
        depart : "DEPART FROM Vancouver, Canada 9 am",
        destination : ["DESTINATION Honolulu, Hawaii 7 am"],
        singleDestination : "Single Destination: Yes",
        multiDestination : "Multi Destination: No",
        roundTrip :"Round Trip : Yes",
    },
    {
        name :"MEXICO",
        price :"233",
        description :"Cruisers love Mexico's delicious food, soulful mariachi music, and zest for life. When you cruise to Mexico, departure ports are often in the southern U.S., such as Los Angeles, San Diego, Miami, New Orleans, Tampa, or Galveston.",
        image : "jorge-zapata-zISkTiXiAxM-unsplash (1).jpg",
        date : "4 NIGHTS",
        depart : "DEPART FROM California at  9 am",
        destination : ["DESTINATION: Ensenada - Mexico 8 am"],
        singleDestination : "Single Destination: No",
        multiDestination: "Multi Destination: Yes",
        roundTrip :"Round Trip : Yes",
    },
    {
        name :"CARIBBEAN",
        price :"189",
        description :"A Caribbean cruise is one of the most popular and inexpensive ways to tour and explore this region, and with CruiseMate, you can visit a huge selection of Caribbean cruise destinations with itineraries on many different ships and cruise lines, including discount Caribbean cruises from Princess, Holland America, Norwegian, Carnival, Royal Caribbean, and more.",
        image : "rick-jamison-9CJTrF-HnlU-unsplash.jpg",
        date : "3 NIGHTS",
        depart : "DEPART FROM Miami, at 9AM",
        destination : ["DESTINATION Puerto Plata, Dominican Republic 7Am"],
        singleDestination : "Single Destination: Yes",
        multiDestination: "Multi Destination: No",
        roundTrip :"Round Trip : No",
    },
    {
        name :"BERMUDA",
        price :"509",
        description :"Experience the allure of Bermuda on a luxurious cruise, indulging in exquisite beaches, historic charm, and vibrant marine life. From pink sandy shores to pastel-hued architecture, this journey weaves relaxation and exploration into an unforgettable island escape.",
        image : "sandra-seitamaa-COsskg4ilTQ-unsplash.jpg",
        date : "6 NIGHTS",
        depart : "DEPART FROM New York, 9AM",
        destination : ["DESTINATION BERMUDA, 7AM"],
        singleDestination : "Single Destination: No",
        multiDestination: "Multi Destination: Yes",
        roundTrip :"Round Trip : Yes",
    }
    
];

let appliedSort = "low to high";

$(document).ready(function() {
  loadCruise(arrCruise);
  filterSortCruise();

  $("input[name='durationRadio']").change(function() {
      filterSortCruise();
  });

  $("input[name='sortCheckbox']").change(function() {
      appliedSort = $(this).val();
      filterSortCruise();
  });

  $("#allDestinations").change(function() {
    if ($(this).is(":checked")) {
        $("input[name='durationRadio']").prop("checked", false);
        $("input[name='destinationRadio']").prop("checked", false);
        appliedSort = "low to high";
    }
    filterSortCruise();
  });

  $("input[name='destinationRadio']").change(function() {
      filterSortCruise();
  });

  $("input[name='rowBoatCheckbox']").change(function() {
      filterSortCruise();
  });

  $("input[name='roundCheckbox']").change(function() {
      filterSortCruise();
  });
});

function filterSortCruise() {
  let filterSortedArrCruise = [...arrCruise];

  const selectedDuration = $("input[name='durationRadio']:checked").val();

  if (selectedDuration === "short") {
      filterSortedArrCruise = filterSortedArrCruise.filter((cruise) => parseInt(cruise.date) <= 5);
  } else if (selectedDuration === "long") {
      filterSortedArrCruise = filterSortedArrCruise.filter((cruise) => parseInt(cruise.date) > 5);
  }

  const selectedDestination = $("input[name='destinationRadio']:checked").val();

  if (selectedDestination === "Single Destination") {
      filterSortedArrCruise = filterSortedArrCruise.filter((cruise) => cruise.singleDestination === "Single Destination: Yes");
  } else if (selectedDestination === "Multi Destination") {
      filterSortedArrCruise = filterSortedArrCruise.filter((cruise) => cruise.multiDestination === "Multi Destination: Yes");
  }

  const isRowBoatSpecialChecked = $("#rowBoatSpecial").is(":checked");

  if (isRowBoatSpecialChecked) {
      filterSortedArrCruise = filterSortedArrCruise.sort((a, b) => {
          return a.price - b.price;
      });
  }

  const isRoundCheckboxChecked = $("#roundSort").is(":checked");

  if (isRoundCheckboxChecked) {
      filterSortedArrCruise = filterSortedArrCruise.filter((cruise) => cruise.roundTrip === "Round Trip : Yes");
  }

  if ($("#allDestinations").is(":checked")) {
      loadCruise(filterSortedArrCruise);
  } else {
      if (appliedSort === "low to high" && !isRowBoatSpecialChecked) {
          filterSortedArrCruise = filterSortedArrCruise.sort((a, b) => {
              return a.price - b.price;
          });
      } else if (appliedSort === "high to low" && !isRowBoatSpecialChecked) {
          filterSortedArrCruise = filterSortedArrCruise.sort((a, b) => {
              return b.price - a.price;
          });
      }

      $("#cruise-list").empty();
      loadCruise(filterSortedArrCruise);
  }
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
        currentChild.find("#singleDestination").text(cruise.singleDestination);
        currentChild.find("#multiDestination").text(cruise.multiDestination);
        currentChild.find("#roundTrip").text(cruise.roundTrip);

        currentChild.find(".btn-now").click(function() {
          const selectedCruise = cruiseCard[i];
          bookCruise(selectedCruise);
      });
    }
    
}

function bookCruise(selectedCruise) {
  let selectedCruises = JSON.parse(localStorage.getItem('selectedCruises')) || [];

  selectedCruises.push(selectedCruise);

  localStorage.setItem('selectedCruises', JSON.stringify(selectedCruises));
}


$(document).ready(function(){
    $("#welcomeText").text("Welcome Zander");
    loadCruise(arrCruise);
    filterSortCruise();
});

const apiKey = 'c27ccbfda2b5d0748a8b4eb974479ec1';
const cities = ['Mexico', 'Hawaii', 'Bermuda', 'Santo Domingo'];
let currentCityIndex = 0;

    // fetch weather data
    function fetchWeatherData(city) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          const temperatureKelvin = data.main.temp;
          const temperatureCelsius = temperatureKelvin - 273.15;
          const weatherDescription = data.weather[0].description;
          const weatherData = `${temperatureCelsius.toFixed(2)}°C - ${weatherDescription}`;

            $('.city-text h2').text(city);
            $('.weather-data').text(weatherData);
        },
        error: function(error) {
          console.error('Error fetching weather data:', error);
        }
      });
    }

    function updateDisplayedCity() {
        const city = cities[currentCityIndex];
        fetchWeatherData(city);
    }

    $('#nextCity').click(function() {
        currentCityIndex = (currentCityIndex + 1) % cities.length;
        updateDisplayedCity();
      });
      
      $('#prevCity').click(function() {
        currentCityIndex = (currentCityIndex - 1 + cities.length) % cities.length;
        updateDisplayedCity();
      });

      $(document).ready(function() {
        updateDisplayedCity();
      });

    // Calender

function generateCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    const calendar = document.getElementById('calendar');
    
    
    const monthTitle = document.getElementById('currentMonth');
    monthTitle.textContent = new Date(year, month, 1).toLocaleString('default', { month: 'long' });
    
   
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const headerRow = document.createElement('tr');
    daysOfWeek.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    

    let dayCounter = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (i === 0 && j < firstDay) {
          
          cell.textContent = '';
        } else if (dayCounter <= daysInMonth) {
          
          cell.textContent = dayCounter;
          dayCounter++;
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
    
    table.appendChild(thead);
    table.appendChild(tbody);
    calendar.appendChild(table);
  }
  
 
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  generateCalendar(currentYear, currentMonth);
  
