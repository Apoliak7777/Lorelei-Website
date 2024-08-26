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
            const values = Object.values(data);
            if (values.length > 0) {
                const value = values[0];
                document.getElementById(elementId).innerText = value;
            } else {
                document.getElementById(elementId).innerText = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById(elementId).innerText = 'Bot offline';
        });
}