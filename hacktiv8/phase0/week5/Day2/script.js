// Week4 Day2 Penjelajahan dan Manipulasi DOM Sederhana | Tirta Wirya Putra

document.getElementById("eldest-parent").children[0].innerHTML = "Diakses Melalui Eldest Parent";
document.getElementById("a-child").previousElementSibling.innerHTML = "Diakses Melalui a Child";
document.getElementById("a-child").nextElementSibling.innerHTML = "Diakses Melalui a Child";
document.getElementById("a-child").parentNode.parentNode.nextElementSibling.innerHTML = "Diakses Melalui a Child";
