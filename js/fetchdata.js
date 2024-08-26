function fetchData(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                // Handle HTTP errors
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById(elementId).innerText = data.guilds || data.count;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Different messages for different types of errors
            if (error.message.includes('NetworkError')) {
                document.getElementById(elementId).innerText = 'Bot offline';
            } else {
                document.getElementById(elementId).innerText = "Bot offline";
            }
        });
}