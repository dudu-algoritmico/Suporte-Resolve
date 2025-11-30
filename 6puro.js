function abrirAba(evento, abaId) {

  const abas = document.querySelectorAll('.aba');
  abas.forEach(aba => aba.style.display = 'none');

  const abasCriar = document.querySelectorAll('.abacr');
  abasCriar.forEach(aba => aba.style.display = 'none');

  const botoes = document.querySelectorAll('.botoes button');
  botoes.forEach(btn => btn.classList.remove('ativo'));

  document.getElementById(abaId).style.display = 'block';

  if(evento){
    evento.target.classList.add('ativo');
  }

  /*FECHAMENUSANDUBA*/
  if(window.innerWidth < 768){
    document.querySelector('.painlat').classList.remove('mostrar');
  }
}

function alerta(){
  document.getElementById('cxalerta').style.display = 'block';
}
function falerta(){
  document.getElementById('cxalerta').style.display = 'none';
}

function alerta2(){
  document.getElementById('cxalerta2').style.display = 'block';
}
function falerta2(){
  document.getElementById('cxalerta2').style.display = 'none';
}

function alermod(){
  document.getElementById('cxmod').style.display = 'block';
}
function falermod(){
  document.getElementById('cxmod').style.display = 'none';
}

/*MENUSANDUBA*/
function toggleMenuMobile(){
  const menu = document.querySelector('.painlat');
  menu.classList.toggle('mostrar');
}

/*function toggleMenu(){
      const menu = document.getElementsByClassName("CXTUSER");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
}*/