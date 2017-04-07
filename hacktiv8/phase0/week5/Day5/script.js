// Weekly Project Phase 0 Week 5 Hacktiv8 | Tirta Wirya Putra
function guess(){
  let answer = document.getElementById('answer').value;
  let attempt = document.getElementById('attempt').value;
  let code = document.getElementById('code');
  let guessingDiv = document.getElementById('guessing-div');
  let input = document.getElementById('user-guess').value;
  let message = document.getElementById('message');
  let replayDiv = document.getElementById('replay-div');
  let results = document.getElementById('results');

  message.innerHTML = "";

  if(answer == "") {
      answer = Math.floor(Math.random() * 10000).toString();
      while(answer.length < 4) {
          answer = "0" + answer;
      }
      document.getElementById('answer').value = answer;
  }
  if(attempt == "") {
      attempt = 0;
  }

  if(input.length != 4) {
      message.innerHTML = 'Tebakan harus terdiri dari 4 angka!';
      return;
  } else {
      attempt++;
      document.getElementById('attempt').value = attempt;
  }

  let correct = 0;
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(i = 0; i < input.length; i++)
  {
      if(input.charAt(i) == answer.charAt(i))
      {
          html += '<span class="glyphicon glyphicon-ok"></span>';
          correct++;
      } else if (answer.indexOf(input.charAt(i)) > -1) {
          html += '<span class="glyphicon glyphicon-transfer"></span>';
      } else {
          html += '<span class="glyphicon glyphicon-remove"></span>';
      }
  }
  html += '</div></div>';

  results.innerHTML += html;

  if(correct == input.length) {
      message.innerHTML = 'Hore, kamu menang :)';
      code.className += " success";
      code.innerHTML = answer;
      guessingDiv.style = "display:none";
      replayDiv.style = "display:block";
  } else if(attempt >= 10) {
      message.innerHTML = 'Yah, kamu kalah :(';
      code.className += " failure";
      code.innerHTML = answer;
      guessingDiv.style = "display:none";
      replayDiv.style = "display:block";
  } else {
      message.innerHTML = 'Uh oh, tebakan kamu salah. Coba lagi!';
  }
}
