function config(){
  var urlParams = new URLSearchParams(window.location.search);
  var url = urlParams.get("id") // livros
  var participante = document.getElementById('nome')
  var profile = document.getElementById('profile')
  var dados = document.getElementById('dados')
  var transferencia = document.getElementById('transferencia')
  var nav = document.getElementById('nav')
  var saldo = document.getElementById('saldo')

    if(url == '00'){
      var s00 = localStorage.getItem('Banco-Planetario')
      saldo.innerHTML = s00

      participante.innerHTML = 'Conta Planetaria'
      profile.style.color = 'gold'
      dados.style.backgroundColor = 'gold'
      transferencia.style.backgroundColor = 'gold'
      nav.style.backgroundColor = 'gold'
    }
    else if(url == '01'){
      var s01 = localStorage.getItem('Jogador-01')
      saldo.innerHTML = s01

      participante.innerHTML = 'Participante 01'
      profile.style.color = 'yellow'
      dados.style.backgroundColor = 'yellow'
      transferencia.style.backgroundColor = 'yellow'
      nav.style.backgroundColor = 'yellow'
    }
    else if(url == '02'){
      var s02 = localStorage.getItem('Jogador-02')
      saldo.innerHTML = s02

      participante.innerHTML = 'Participante 02'
      profile.style.color = 'red'
      dados.style.backgroundColor = 'red'
      transferencia.style.backgroundColor = 'red'
      nav.style.backgroundColor = 'red'
    }
    else if(url == '03'){
      var s03 = localStorage.getItem('Jogador-03')
      saldo.innerHTML = s03

      participante.innerHTML = 'Participante 03'
      profile.style.color = 'blue'
      dados.style.backgroundColor = 'blue'
      transferencia.style.backgroundColor = 'blue'
      nav.style.backgroundColor = 'blue'
    }
    else if(url == '04'){
      var s04 = localStorage.getItem('Jogador-04')
      saldo.innerHTML = s04

      participante.innerHTML = 'Participante 04'
      profile.style.color = 'green'
      dados.style.backgroundColor = 'green'
      transferencia.style.backgroundColor = 'green'
      nav.style.backgroundColor = 'green'
    }
    else if(url == '05'){
      var s05 = localStorage.getItem('Jogador-05')
      saldo.innerHTML = s05

      participante.innerHTML = 'Participante 05'
      profile.style.color = 'gray'
      dados.style.backgroundColor = 'gray'
      transferencia.style.backgroundColor = 'gray'
      nav.style.backgroundColor = 'gray'
    }
    else if(url == '06'){
      var s06 = localStorage.getItem('Jogador-06')
      saldo.innerHTML = s06

      participante.innerHTML = 'Participante 06'
      profile.style.color = 'lightblue'
      dados.style.backgroundColor = 'lightblue'
      transferencia.style.backgroundColor = 'lightblue'
      nav.style.backgroundColor = 'lightblue'
    }

}

function pix(){
  var urlParams = new URLSearchParams(window.location.search);
  var url = urlParams.get("id")

  var valor = parseInt(document.getElementById('valor').value)

  var item = document.getElementById('chave').value
  

  if(url == '00'){
    var saldo = localStorage.getItem('Banco-Planetario');
    var final = saldo - valor
    localStorage.setItem('Banco-Planetario', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  else if(url == '01'){
    var saldo = localStorage.getItem('Jogador-01');
    var final = saldo - valor
    localStorage.setItem('Jogador-01', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  else if(url == '02'){
    var saldo = localStorage.getItem('Jogador-02');
    var final = saldo - valor
    localStorage.setItem('Jogador-02', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  else if(url == '03'){
    var saldo = localStorage.getItem('Jogador-03');
    var final = saldo - valor
    localStorage.setItem('Jogador-03', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  else if(url == '04'){
    var saldo = localStorage.getItem('Jogador-04');
    var final = saldo - valor
    localStorage.setItem('Jogador-04', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  else if(url == '05'){
    var saldo = localStorage.getItem('Jogador-05');
    var final = saldo - valor
    localStorage.setItem('Jogador-05', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  else if(url == '06'){
    var saldo = localStorage.getItem('Jogador-06');
    var final = saldo - valor
    localStorage.setItem('Jogador-06', final);

    var saldo2 = parseInt(localStorage.getItem(item))
    var final2 = saldo2+valor
    localStorage.setItem(item, final2);
    window.onload()
  }
  
}