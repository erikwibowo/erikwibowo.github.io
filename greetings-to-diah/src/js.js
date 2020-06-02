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
	'Istirahat yang cukup 😊, Semangat puasanya 🍉',
	'Wherever you are, I always make you smile 😄',
	'Jangan mandi sampe lewat maghrib.',
	"Alhamdulillah hari terakhir puasa syawal. Semangat 🍉",
	"When I'm next to you, I'm home 😊",
	'greeting 9',
	'greeting 10',
	'greeting 11',
	'greeting 12',
	'greeting 13',
	'greeting 14',
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
document.getElementById("text").innerHTML = greetings[n-1];