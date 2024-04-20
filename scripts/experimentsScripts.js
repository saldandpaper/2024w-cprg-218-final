document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');
    const fetchButton = document.getElementById('fetch-button');

    fetchButton.addEventListener('click', () => {
        fetch('https://api.breakingbadquotes.xyz/v1/quotes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                const quote = data[0].quote;
                const author = data[0].author;
                quoteContainer.innerHTML = `<p>"${quote}" <br></br> <span class="author">- ${author}</span></p>`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteContainer.innerHTML = '<p>Failed to fetch quote.</p>';
            });
    });
});
