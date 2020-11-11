$(document).ready(function(){
        // $("#foto").attr("src", "file/diah8.png");

        var timezone = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
        var greeting;
        var time = new Date(timezone).getHours();
        if (time > 00 && time <= 10) {
          greeting = "Selamat Pagi";
        } else if (time > 10 && time <= 14) {
          greeting = "Selamat Siang";
        } else if (time > 14 && time <= 18) {
          greeting = "Selamat Sore";
        } else {
          greeting = "Selamat Malam";
        }
        // document.getElementById("greeting").innerHTML = greeting+" Mbak Diah";

        var d = new Date(timezone);
        var n = d.getDate();
        var greetings = [
          'Happy working 😊',
          'Semangat kerjanya 🍉',
          'Jangan mandi sampe lewat maghrib.',
          'Kalo mau ngiler usahakan tidak ada yang melihat',
          'Jangan begadang, kalau tiada artinya',
          'Istirahat yang cukup',
          'Alhamdulillah hari terakhir puasa syawal. Semangat',
          'Ubah insecure menjadi bersyukur',
          'Hati-hati berangkat kerjanya',
          'Stay safe pake masker',
          'Selalu sedia jas hujan',
          'Jaga kesehatan, makan yang teratur',
          'Berkabarlah kalau sempat',
          'Olahraga yuk',
          'Pengen deh sekali-kali nonton film bareng.',
          'Bangun yuk, bangun rumah tangga misalnya',
          'Jangan makan pedes-pedes',
          'Aku suka ngobrol ngalor-ngidul bareng',
          'Aku suka pertanyaan-pertanyaan anda yang tidak penting itu',
          'Aku suka jika anda membagikan sesuatu (di internet) kepada saya',
          'Aku suka nada bicara anda',
          'Aku suka jika anda mengabari tanpa disuruh',
          'Aku suka tingkah konyol anda'
        ];

        $("#text").html(greetings[Math.floor(Math.random() * greetings.length)]);

        var foto = [
          'diah5.png',
          'diah1.png',
          'diah8.png',
          'diah3.png',
          'diah7.png',
          'diah4.png',
          'diah6.png',
          'diah2.png'
        ];
        var pos = 0;
        var pos2 = 0;
        function change_album(pos){
          var url = 'file/'+foto[pos];
          $("#foto").attr("src", url);
        }

        setInterval(function () {
          pos == foto.length ? pos = 0:pos;
          pos2 == greetings.length ? 0:pos2; 
          change_album(pos);
          $("#text").html(greetings[Math.floor(Math.random() * greetings.length)]);
          pos++;
          pos2++;
        },3000);

      });