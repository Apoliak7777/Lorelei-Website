document.addEventListener('DOMContentLoaded', () => {
    // Function to load content from a file into a specific element
    function loadComponent(element) {
        const filePath = element.getAttribute('file');
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                element.innerHTML = html;
            })
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    }

    // Find all elements with the 'file' attribute and load content into them
    document.querySelectorAll('[file]').forEach(loadComponent);
});