// Simple JavaScript Game
// Tirta Wirya Putra - Hacktiv8 bootcamp phase0 week2 weekly project
var pilihan = ["batu", "gunting", "kertas"];

function permainan() {
  // Pilihan Komputer
  this.komputerInput = function() {
    this.pilihanKomputer = Math.random();
    if(this.pilihanKomputer < 0.34) {
      return (this.pilihanKomputer = pilihan[0]);
    }
    else if(this.pilihanKomputer <= 0.67) {
      return (this.pilihanKomputer = pilihan[1]);
    }
    else {
      return (this.pilihanKomputer = pilihan[2]);
    } 
  };

  // Siapa yang menang?
  this.bandingkan = function(pilihan1, pilihan2) {
    if(pilihan1 === pilihan2) {
      return "Uh Oh, hasilnya seri.";
    }
    else if(pilihan1 === "batu") {
      if(pilihan2 === "kertas") {
        return "yah.. kamu kalah..";
      }
      else {
        return "Hore, kamu menang!!";
      }
    }
    else if(pilihan1 === "kertas") {
      if(pilihan2 === "gunting") {
        return "yah.. kamu kalah..";    
      }
      else {
        return "Hore, kamu menang!!";
      }
    }
    else if(pilihan1 === "gunting") {
      if(pilihan2 === "batu") {
        return "yah.. kamu kalah..";
      }
      else {
        return "Hore, kamu menang!!";   
      }
    }
  };
}

var mulai = new permainan();
var pilihanPemain = "";
var pilihanKomputer = "";
var hasil = "";
var buttons = document.getElementsByClassName("button");
var pemainMemilih = document.getElementById("pemain");
var komputerMemilih = document.getElementById("komputer");
var tampilkanHasil = document.getElementById("hasil");

/* jshint loopfunc:true */
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
  pilihanPemain = this.id;
  pemainMemilih.innerHTML = "Kamu memilih " + pilihanPemain;
  pilihanKomputer = mulai.komputerInput();
  komputerMemilih.innerHTML = "Komputer memilih " + pilihanKomputer;
  hasil = mulai.bandingkan(pilihanPemain, pilihanKomputer);
  tampilkanHasil.innerHTML = hasil;
  }, false);
}