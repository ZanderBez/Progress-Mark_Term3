const selectedCruises = JSON.parse(localStorage.getItem('selectedCruises'));


if (selectedCruises && selectedCruises.length > 0) {
    
    selectedCruises.forEach(function (selectedCruise, index) {
       
        const newRow = document.createElement('tr');

        const cruiseNameCell = document.createElement('td');
        cruiseNameCell.textContent = selectedCruise.name;

        const totalDaysCell = document.createElement('td');
        totalDaysCell.textContent = selectedCruise.date;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${selectedCruise.price}`;

        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn btn-secondary';
        removeButton.addEventListener('click', function () {
            selectedCruises.splice(index, 1);
            localStorage.setItem('selectedCruises', JSON.stringify(selectedCruises));
            newRow.remove();
        });

        newRow.appendChild(cruiseNameCell);
        newRow.appendChild(totalDaysCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(removeButtonCell);
        removeButtonCell.appendChild(removeButton);

        const cruiseDetailsBody = document.getElementById('cruise-details-body');
        cruiseDetailsBody.appendChild(newRow);
        });

        document.getElementById('remove-all-button').addEventListener('click', function () {
        removeAllCruises();
        });

    function removeAllCruises() {
        selectedCruises.length = 0;
        localStorage.removeItem('selectedCruises');
        const cruiseDetailsBody = document.getElementById('cruise-details-body');
        cruiseDetailsBody.innerHTML = '';
    }
}

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}




