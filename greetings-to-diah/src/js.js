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
document.getElementById("greeting").innerHTML = greeting+" Mbak Diah";

var d = new Date(timezone);
var n = d.getDay();
var greetings = [
	'greeting 1',
	'Happy working 😊, Semangat puasanya 🍉',
	'I ❤️ you , Semangat kerjanya 🍉',
	'Jangan mandi sampe lewat maghrib.',
	'Kalo mau ngiler usahakan tidak ada yang melihat',
	'Jangan begadang, kalau tiada artinya',
	'Istirahat yang cukup, Semangat puasanya',
	"Alhamdulillah hari terakhir puasa syawal. Semangat",
	'Ubah insecure menjadi bersyukur',
	'Hati-hati berangkat kerjanya',
	'Stay safe pake masker',
	'Selalu sedia jas hujan',
	'Jaga kesehatan, makan yang teratur',
	'greeting 15',
	'greeting 16',
	'greeting 17',
	'greeting 18',
	'greeting 19',
	'greeting 20',
	'greeting 21',
	'greeting 22',
	'greeting 23',
	'greeting 24',
	'greeting 25',
	'greeting 26',
	'greeting 27',
	'greeting 28',
	'greeting 29',
	'greeting 30',
	'greeting 31'
];

var foto = [
	'diah5.png',
	'diah1.png',
	'diah8.png',
	'diah3.png',
	'diah7.png',
	'diah4.png',
	'diah6.png',
	'diah2.png'
]
document.getElementById("text").innerHTML = greetings[n-1];
document.getElementById("foto").setAttribute("src", "file/"+foto[Math.floor(Math.random() * 5)]);
var pos = 0;
window.setInterval(function(){
	pos == foto.length ? pos = 0:pos;
	photo(pos);
	pos++
}, 1000);

function photo(pos){
	document.getElementById("foto").setAttribute("src", "file/"+foto[pos]);
}

document.getElementById('myAudio').play();