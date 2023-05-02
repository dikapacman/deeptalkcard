var randomQ = randomInt(0, 53);
function randomInt(lowest, size) {
  return Math.floor(Math.random() * size) + lowest;
}

var quoteElem = document.getElementById('quote');

quoteElem.innerHTML = getQuote(randomQ);

function getQuote(n) {
  var quotes = [
    'Jika hidupku tersisa 1 minggu dari sekarang, aku akan ______',
    'Jika bisa memutar kembali waktu aku akan ______',
    'Siapa orang terakhir yang ingin kamu temui sebelum meninggal?',
    'Bagaimana kamu mengetahui jika kamu sedang jatuh cinta?',
    'Apa kamu ingin memiliki tato? Kenapa?',
    'Pilih satu : Dibenci atau Dilupakan',
    'Apa arti rumah menurutmu?',
    'Bagaimana pendapatmu tentang kesempatan kedua?',
    'Bagaimana perasaanmu akhir akhir ini? Mengapa?',
    'Sebutkan hal yang tidak akan dipercaya oleh dirimu di waktu kecil dari dirimu yang sekarang?',
    'Adakah sosok yang akan kamu selamatkan meskipun mengorbankan nyawamu sendiri?',
    'Sebutkan satu ketakutanmu yang ingin kamu kalahkan?',
    'Jika kamu bisa terlahir kembali, apakah kamu tetap memilih untuk menjadi dirimu yang sekarang atau tidak? Mengapa?',
    'Apa sesuatu yang selalu ingin kamu lakukan tetapi hingga sekarang belum kamu lakukan? Mengapa kamu belum melakukannya?',
    'Bagaimana kamu melihat dirimu sendiri 5 tahun dari sekarang?',
    'Menurutmu, bagaimana cara paling tepat untuk membanggakan orang tuamu? Kenapa? ',
    'Apakah kamu suka membandingkan perkembangan hidupmu dengan orang lain? Mengapa?',
    'Apa arti kebahagiaan buat kamu?',
    'Apakah kepercayaan itu diberikan atau diperjuangkan? Mengapa?',
    'Adakah ekspektasi keluarga/teman yang membebanimu? Ceritakan?',
    'Apa 3 hal yang paling berharga di dunia bagimu? Mengapa?',
    'Sebutkan satu mimpi yang ingin kamu wujudkan jika tahu kamu tidak bisa gagal',
    'Adakah seseorang yang kamu rindukan sekarang? Apa yang ingin kamu sampaikan?',
    'Apa larangan dari orang tua yang paling tidak kamu setujui? Mengapa?',
    'Kamu paling suka kalau dipuji karena apa sih?',
    'Apa pandanganmu jika mantanmu pacaran dengan sahabatmu?',
    'Kalau bisa memilih, lebih baik pergi ke masa depan atau kembali ke masa lalu? Mengapa?',
    'Kamu lebih pilih ditinggalkan atau meninggalkan?',
    'Menurutmu, kapan waktu yang tepat untuk merelakan atau tetap berjuang?',
    'Aku mau ngucapin terima kasih banyak ke diriku, karena_____',
    'Aku ingin meminta maaf kepada diriku sendiri karena_____',
    'Kamu tuh paling benci orang yang kayak gimana sih?',
    'Apakah saat ini kamu merasa sudah/dekat/jauh dari sukses? Mengapa?',
    'Semoga kita bisa menormalisasi_____',
    'Jika kita semua akan tenggelam dan kamu hanya bisa menyelamatkan satu orang di antara semua pemain di sini, siapa yang akan kamu pilih? Mengapa?',
    'Kamu percaya ga sama cinta pada pandangan pertama? Mengapa?',
    'Prinsip apa yang selalu kamu pegang teguh?',
    'Menurut kamu, hidup yang sempurna itu kayak gimana?',
    'Kamu mau hidup sampai umur berapa?',
    'Ketika suatu hari kamu meninggal, kamu pengen sahabat kamu melakukan apa?',
    'Kesalahan seperti apa yang gak bakal bisa kamu maafin?',
    'Apa hal yang bikin kamu langsung ilfeel ke lawan jenis?',
    'Menurutmu, tiap orang memiliki kesempatan yang sama nggak?',
    'Apa jenis truma masa kecil/masalah mental yang kamu miliki?',
    'Apa sifat yang paling kamu kagumi dari orang yang paling Anda tidak sukai?',
    'Jika gaji dan pendidikan tidaklah penting, kamu ingin menjadi apa?',
    'Jika kamu dapat mengubah satu hal tentang fisik dirimu sendiri, apa yang akan kamu ubah?',
    'Kamu paling benci ditanya perihal apa? Mengapa?',
    'Apa mimpi terbesar dalam hidupmu dan apa yang telah kamu lakukan untuk mencapainya?',
    'Jika bisa terlahir kembali, Apakah kamu ingin menjadi anak tunggal, sulung, tengah, atau bungsu? Mengapa?',
    'Bagaimana pandanganmu tentang hubungan beda agama? ',
    'Menurutmu apakah menikah adalah sebuah keharusan? Pada umur berapa kamu ingin menikah?',
    'Bagaimana kamu ingin diingat saat kamu meninggal?',
  ];

  return quotes[n];
}