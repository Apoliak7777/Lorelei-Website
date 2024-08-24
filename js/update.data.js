// Call fetchData to update specific elements

document.addEventListener('DOMContentLoaded', () => {
    fetchInitialUptime('http://localhost:8000/uptime');
    if (document.getElementById('ping-info')) {
        fetchData('http://localhost:8000/ping', 'ping');
    }
    if (document.getElementById('guilds-info')) {
        fetchData('http://localhost:8000/guilds', 'guilds');
    }
});
