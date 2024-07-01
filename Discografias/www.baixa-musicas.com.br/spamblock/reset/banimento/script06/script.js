


document.getElementById("concluir03").onclick = function senha03() {
  var senha03 = '99984770125652';
  var senhadig = document.getElementById("senha03").value;

  if (senha03 == senhadig){
    document.getElementById("over03").style.display="none"
  }else if (senha03 != senhadig){
    window.location.href='discografiascompletas.html';
  }
}
