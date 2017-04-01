// Week4 Day1 Seleksi dan Manipulasi DOM Sederhana | Tirta Wirya Putra
document.getElementById("fill-me").innerHTML = "HALO!";

var paragraph = document.getElementsByClassName("change-all-of-me"); 
for (var i = 0; i < paragraph.length; i++) {
	paragraph[i].innerHTML = "HALO JUGA!";
}

document.getElementsByTagName("h2")[0].innerHTML = "Apa Kabar!";