// Get references to HTML elements where we'll display the quote and author
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const button = document.getElementById('newQuoteBtn');

// We'll store the quotes in this array after we fetch them
let quotes = [];

// Fetch the quotes from the online JSON file (only once, on page load)
fetch('https://mgungorchamp.github.io/mycat/quotes.json')
    .then(res => res.json()) // Convert the response to a JavaScript object
    .then(data => {
        quotes = data;                                                                 // Store the quotes
        showRandomQuote();                                                         // random quote
    })
    .catch(err => { //GIVEN
        // If something goes wrong (e.g., no internet), show a message
        quoteText.textContent = 'Could not load quote.';
        console.error(err); // Print the actual error to the console for debugging
    });

// This function picks a random quote and updates the text on the page
function showRandomQuote() {
                                                                                        // add if quotes
    if (quotes.length === 0) return;

    // Pick a random index between 0 and quotes.length - 1 - GIVEN
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote object from the array
    const selected = quotes[randomIndex];

                                                                                        // quote and author
    quoteText.textContent = `"${selected.quote}"`;
    quoteAuthor.textContent = `— ${selected.author}`;
}

// When the button is clicked, call the function to show a new random quote
button.addEventListener('click', showRandomQuote);
