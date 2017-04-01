// Week4 Day3 Validasi Form dengan JavaScript | Tirta Wirya Putra
var mainForm = document.getElementById("main-form");
mainForm.addEventListener("submit", function(event) {
	var nama = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm_password").value;
	var email = document.getElementById("mail").value;
	var confirmEmail = document.getElementById("confirm_mail").value;
	
	if ((nama == "") || (nama == null)) {
		event.preventDefault();
		alert("Username tidak boleh kosong!");
		return false;
	}
	else if (nama.length < 6) {
		event.preventDefault();
		alert("Username minimal 6 karakter!");
		return false;
	}
	else if ((password == "") || (password == null)) {
		event.preventDefault();
		alert("Password tidak boleh kosong!");
		return false;
	}
	else if ((password.search(/\d/) == -1) || (password.search(/[a-zA-Z]/) == -1)){
		event.preventDefault();
		alert("Password harus terdiri dari huruf dan angka!");
		return false;
	}
	else if (password.length < 6) {
		event.preventDefault();
		alert("Password minimal 6 karakter!");
		return false;
	}
	else if ((confirmPassword == "") || (confirmPassword == null)) {
		event.preventDefault();
		alert("Konfirmasi password tidak boleh kosong!");
		return false;
	}
	else if (password != confirmPassword) {
		event.preventDefault();
		alert("Password dan Konfirmasi Password tidak sama!");
		return false;
	}
	else if ((email == "") || (email == null)) {
		event.preventDefault();
		alert("Email tidak boleh kosong!");
		return false;
	}
	else if ((confirmEmail == "") || (confirmEmail == null)) {
		event.preventDefault();
		alert("Konfirmasi Email tidak boleh kosong!");
		return false;
	}
	else if (email != confirmEmail) {
		event.preventDefault();
		alert("Email dan Konfirmasi Email tidak sama!");
		return false;
	}
});

	


