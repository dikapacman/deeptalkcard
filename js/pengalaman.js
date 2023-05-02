var randomQ = randomInt(0, 40);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var quoteElem = document.getElementById('quote');

quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
  var quotes = [
    'Kapan terakhir kali kamu mematahkan hati seseorang? Ceritakan',
    'Ceritakan luka terdalammu. Sejauh apa proses pemulihannya saat ini?',
    'Deskripsikan tipikal hari dimana kamu merasa bahagia!',
    'Apakah kamu masih merasa tidak percaya diri di lingkunganmu sekarang?',
    'Hal apa yang paling kamu syukuri?',
    'Ceritakan sebuah peristiwa yang menjadi titik balik hidupmu!',
    'Pernahkah kamu merasa hampa? Ceritakan',
    'Pernahkah kamu mencoba menjadi orang lain untuk menyesuaikan diri di lingkungan baru? Ceritakan',
    'Ceritakan waktu dimana kamu berada di titik terendahmu? Bagaimana kamu mengatasinya?',
    'Sejauh ini, apa penyesalan terbesar dalam hidupmu? Mengapa?',
    'Adakah hal baru yang kamu pelajari tentang dirimu dari hubungan terakhirmu?',
    'Coba ceritakan perpisahan yang paling membekas di hati kamu',
    'Sesering apa kamu menunjukkan emosimu yang sebenarnya ke lawan bicaramu?',
    'Ada ga sih hal yang kamu harap bisa kamu ungkapkan lebih jujur ke orang tua mu? Kalau ada, apa dan mengapa?',
    'Drama/series/film apa yang memberikan pembelajaran terbesar ke hidupmu?',
    'Saat ini, kamu merasa paling bersalah ke siapa? Mengapa?',
    'Ceritain memori yang paling berkesan di hidup kamu, tetapi nggak mau kamu ulang',
    'Apa hal kecil dan sepele yang dapat merusak mood/harimu?',
    'Ada ga sih orang yang mengubah hidupmu? Siapa dan kenapa?',
    'Kapan terakhir kali kamu menangis? Mengapa?',
    'Dari 1-5, seberapa bahagia kamu sekarang? Mengapa?',
    'Pernahkah kamu terlibat di cinta segitiga? Ceritain dong',
    'Apa yang paling kamu syukuri dari pertemanan kita?',
    'Apa satu hal tentang kamu yang gak diketahui banyak orang?',
    'Apa privilege terbesar yang kamu punya?',
    'Apa ucapan/lirik/quotes/kutipan terbaik yang pernah kamu dengar?',
    'Sebutkan hal yang paling kamu banggakan?',
    'Jika kamu dapat menghapus satu ingatan peristiwa dari pikiran Anda, apakah itu dan mengapa?',
    'Apa lagu/film/makanan yang membuatmu teringat akan seseorang? Siapa orang tersebut? Ceritakan',
    'Apa keputusan tersulit yang pernah kamu ambil? Bagaimana hasilnya sekarang?',
    'Apakah kamu saat ini menyimpan dendam terhadap siapa pun atau apa pun?',
    'Pernahkah kamu menangis di tempat umum? Apakah alasannya?',
    'Pada umur berapa kamu pertama kali berciuman? Ceritakan',
    'Sebutkan satu hal yang belum bisa kamu relakan sampai saat ini?',
    'Sebutkan sebuah kenyataan pahit yang sampai saat ini masih kamu sangkal?',
    'Apa hal hal kecil yang kamu lakukan untuk mengapresiasi dirimu sendiri?',
    'Batasan apa yang pernah dan telah kamu tetapkan untuk orang orang di hidupmu?',
    'Adakah satu hal yang sangat kamu perjuangkan namun sekarang harus kamu relakan?',
    'Menurutmu kamu tipikal orang yang lebih sering mengambil keputusan berdasarkan logika atau perasaan? Mengapa?',
    'Ketika seseorang menanyakan bagaimana kabarmu, seberapa sering kamu menjawab dengan jujur?',
  ];

  return quotes[n];
}
