let startTime; // Time when the uptime was fetched

// Function to fetch initial uptime from the server
function fetchInitialUptime(web) {
    fetch(web)
        .then(response => response.json())
        .then(data => {
            const uptime = data.uptime;
            startTime = new Date(); // Save the time when the uptime was fetched
            document.getElementById('uptime').innerText = uptime;
            updateUptimeLocally();
        })
        .catch(error => {
            console.error('Error fetching initial uptime:', error);
            if (error.message.includes('NetworkError')) {
                document.getElementById("uptime").innerText = 'Bot offline';
            } else {
                document.getElementById('uptime').innerText = 'Error fetching uptime';
            }
        });
}

// Function to calculate and update uptime locally
function updateUptimeLocally() {
    setInterval(() => {
        const currentTime = new Date();
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;

        document.getElementById('uptime').innerText = 
            `${hours}h ${minutes}m ${seconds}s`;
    }, 1000); // Update every second
}