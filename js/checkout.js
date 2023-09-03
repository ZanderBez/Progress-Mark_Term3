const selectedCruises = JSON.parse(localStorage.getItem('selectedCruises'));


if (selectedCruises && selectedCruises.length > 0) {
    
        let totalQuantity = 0;
        let totalPrice = 0;
        const cruiseCounts = {};
       
        selectedCruises.forEach(function (selectedCruise, index) {
            const cruiseName = selectedCruise.name;

        if (!cruiseCounts[cruiseName]) {
            cruiseCounts[cruiseName] = 1;
        } else {
            cruiseCounts[cruiseName]++;
        }

        const newRow = document.createElement('tr');

        const quantityCell = document.createElement('td');
        quantityCell.textContent = cruiseCounts[cruiseName]; 

        totalQuantity++;

        const cruiseNameCell = document.createElement('td');
        cruiseNameCell.textContent = selectedCruise.name;

        const totalDaysCell = document.createElement('td');
        totalDaysCell.textContent = selectedCruise.date;

        const priceCell = document.createElement('td');
        priceCell.textContent = `$${selectedCruise.price}`;

        totalPrice += parseFloat(selectedCruise.price);

        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn btn-secondary';
        removeButton.addEventListener('click', function () {
            selectedCruises.splice(index, 1);
            localStorage.setItem('selectedCruises', JSON.stringify(selectedCruises));
            newRow.remove();
            updateTotal();
        });

        newRow.appendChild(quantityCell);
        newRow.appendChild(cruiseNameCell);
        newRow.appendChild(totalDaysCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(removeButtonCell);
        removeButtonCell.appendChild(removeButton);

        const cruiseDetailsBody = document.getElementById('cruise-details-body');
        cruiseDetailsBody.appendChild(newRow);
        });

        updateTotal();

        document.getElementById('remove-all-button').addEventListener('click', function () {
        removeAllCruises();
        });

    function removeAllCruises() {
        selectedCruises.length = 0;
        localStorage.removeItem('selectedCruises');
        const cruiseDetailsBody = document.getElementById('cruise-details-body');
        cruiseDetailsBody.innerHTML = '';
        totalPrice = 0;
        updateTotal();
    }

    function updateTotal() {
        const totalOrder = document.querySelector('.total-order h2');
        totalOrder.textContent = `Total Order: $${totalPrice.toFixed(2)}`;
    }
}

let popup = document.getElementById("popup");

    
function openPopup(){
    
    totalPrice = 0;
    updateTotal();

    const cruiseDetailsBody = document.getElementById('cruise-details-body');
    cruiseDetailsBody.innerHTML = '';

    localStorage.removeItem('selectedCruises');
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}




