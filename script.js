function getMedicine() {
    fetch('http://127.0.0.1:8000/medicine/get_medicine/')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Обробка отриманих даних
            const medicineContainer = document.getElementById('medicine-container');
            if (medicineContainer) {
                medicineContainer.innerHTML = JSON.stringify(data);
            }
        });
}

function getPurchase() {
    fetch('http://127.0.0.1:8000/medicine/get_purchase/')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Обробка отриманих даних
            const purchaseContainer = document.getElementById('purchase-container');
            if (purchaseContainer) {
                purchaseContainer.innerHTML = JSON.stringify(data);
            }
        });
}

function getDemand() {
    fetch('http://127.0.0.1:8000/medicine/get_demand/')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Обробка отриманих даних
            const demandContainer = document.getElementById('demand-container');
            if (demandContainer) {
                demandContainer.innerHTML = JSON.stringify(data);
            }
        });
}
