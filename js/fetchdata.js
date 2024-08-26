function fetchData(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extract the first value from the response object, ignoring the key
            const value = Object.values(data)[0];
            document.getElementById(elementId).innerText = value;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById(elementId).innerText = 'Bot offline';
        });
}