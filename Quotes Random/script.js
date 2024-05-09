// JavaScript code

const QuoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const shareBtn = document.querySelector(".share");

// array of quotes
const quotesArray = [
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison, type.fit"
  },
  {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra, type.fit"
  },
  {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln, type.fit"
  },
  {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe, type.fit"
  },
  {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer, type.fit"
  },
  {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu, type.fit"
  },
  {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg, type.fit"
  },
  {
    "text": "Well begun is half done.",
    "author": "Aristotle, type.fit"
  },
  {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
  },
  {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster, type.fit"
  },
  {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha, type.fit"
  },
  {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer, type.fit"
  },
  {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch, type.fit"
  },
  {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark, type.fit"
  },
  {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer, type.fit"
  },
  {
    "text": "Today is the tomorrow we worried about yesterday.",
    "author":  "type.fit"
  }
]

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "Loading...";
    // Randomly select a quote from the array
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    const result = quotesArray[randomIndex];
    QuoteText.innerText = result.text;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
}

quoteBtn.addEventListener("click", randomQuote);

// Share button
shareBtn.addEventListener("click", event => {
    if (navigator.share) {
        navigator.share({
            title: 'Quote of the Day',
            text: QuoteText.innerText + '--' + authorName.innerText,
        }).then(() => console.log("successful share"))
          .catch((error) => console.log("Error sharing", error));
    } else {
        alert("The current Browser does not support the share function. please, share link manually");
    }
});

// Audio reading
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(QuoteText.innerText + 'by' + authorName.innerText);
    speechSynthesis.speak(utterance);
});

// Copy button
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(QuoteText.innerText + ' __ ' + authorName.innerText);
    alert("Quote copied to clipboard.");
});
// Add a search input
const searchInput = document.querySelector(".search");

function searchQuote() {
    const searchText = searchInput.value.toLowerCase();
    for (let quote of quotesArray) {
        if (quote.text.toLowerCase().includes(searchText) || quote.author.toLowerCase().includes(searchText)) {
            QuoteText.innerText = quote.text;
            authorName.innerText = quote.author;
            break;
        }
    }
}

searchInput.addEventListener("input", searchQuote);
