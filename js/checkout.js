// Retrieve the selected cruises from local storage
const selectedCruises = JSON.parse(localStorage.getItem('selectedCruises'));

// Check if there are selected cruises to display
if (selectedCruises && selectedCruises.length > 0) {
    // Loop through the selected cruises and display their details
    selectedCruises.forEach(function (selectedCruise, index) {
        // Create a new row for each cruise
        const newRow = document.createElement('tr');

        // Create table data (cell) for cruise name, total days, and price
        const cruiseNameCell = document.createElement('td');
        cruiseNameCell.textContent = selectedCruise.name;

        const totalDaysCell = document.createElement('td');
        totalDaysCell.textContent = selectedCruise.date;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${selectedCruise.price}`;

        // Create a "Remove" button
        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn btn-danger';
        removeButton.addEventListener('click', function () {
            // Remove the selected cruise from the table and local storage
            selectedCruises.splice(index, 1);
            localStorage.setItem('selectedCruises', JSON.stringify(selectedCruises));
            newRow.remove(); // Remove the row from the table
        });

        // Append cells and button to the new row
        newRow.appendChild(cruiseNameCell);
        newRow.appendChild(totalDaysCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(removeButtonCell);
        removeButtonCell.appendChild(removeButton);

        // Append the new row to the table body
        const cruiseDetailsBody = document.getElementById('cruise-details-body');
        cruiseDetailsBody.appendChild(newRow);
    });
} else {
    // Display a message if no cruises are selected
    console.log("No cruises selected.");
}



