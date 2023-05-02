var randomQ = randomInt(0, 30);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var quoteElem = document.getElementById('quote');

quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
  var quotes = [
    'Everything takes longer than you think.',
    'DISINI',
    'DISINI',
    'DISINI',
  ];

  return quotes[n];
}
