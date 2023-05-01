var randomQ = randomInt(0, 14);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var quoteElem = document.getElementById('quote');

quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
  var quotes = [
    'Menurut kamu, apa alasan kita masih bertahan selama ini?',
    'Kejadian apa yang selalu terkenang di ingatanmu tentang kita?',
    'Apa moment paling memalukan yang kita alami bersama?',
    'Bagaimana kamu menjelaskan hubungan kita kepada orang yang tidak kamu kenal?',
    'Apa hal yang selalu ingin kamu ungkapkan kepadaku namun belum bisa kamu ungkapkan?',
    'Apa yang menurutmu bisa kita lakukan untuk memperkuat hubungan kita?',
    'Jika kelak kamu tidak bersamaku, apa yang akan kamu lakukan?',
    'Apa kamu pernah merasa tidak nyaman bercerita ke aku tentang suatu hal? Kenapa?',
    'Sebutkan hal yang tidak sehat dalam hubungan ini dan bagaimana cara memperbaikinya?',
    'Jika hubungan kita berakhir, apa harapanmu untukku?',
    'Jika aku harus pindah kota, apa yang akan kamu lakukan?',
    'Apakah virginitas pasangan menjadi salah satu faktor pertimbanganmu?',
    'Sebutkan hal yang paling romantis yang pernah kulakukan untukmu? Jelaskan?',
    'Adakah topik yang selalu jadi pertengkaran diantara kita? Apa solusinya?',
    'DISINI',
  ];

  return quotes[n];
}
